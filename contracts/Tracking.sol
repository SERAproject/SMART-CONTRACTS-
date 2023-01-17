//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Provenance.sol";

contract Tracking is Ownable {

    Provenance provenances;

    enum ActionStatus {
        INPROGRESS,
        SUCCESS,
        FAILURE,
        CANCELED
    }

    struct Shipment {
        address sender;
        address recipient;
        uint start_time;
        uint256 item;
        uint256 quantity;
        ActionStatus action_status;
    }

    struct Condition {
        uint lead_time;
        string destination;
        uint256 token_amount;
    }

    event Log(string text);

    mapping(address => uint256) public balances;
    mapping(uint256 => Shipment) public shipments;
    mapping(uint256 => Condition) public conditions;
    mapping(address => uint256) public shipment_list;
    mapping(address => uint256) public success_shipment_list;

    constructor(address _address) {
        provenances = Provenance(_address);
    }

    function sendToken(address from, address to, uint256 token_amount) private {
        require(balances[from] >= token_amount, "You do not have enough tokens.");
        balances[from] =  balances[from] - token_amount;
        balances[to] =  balances[to] + token_amount;

        emit Log("Payment sent.");
    }

    function getBalance(address supplier) public view returns (uint256) {
        return balances[supplier];
    }

    function recoverToken(uint shipment_id) public onlyOwner {
        balances[shipments[shipment_id].sender] -= conditions[shipment_id].token_amount;
        balances[shipments[shipment_id].recipient] += conditions[shipment_id].token_amount;
    }

    function setContractParameters(uint256 shipment_id, uint lead_time, string memory destination, uint256 token_amount) public onlyOwner {
        conditions[shipment_id] = Condition(lead_time, destination, token_amount);
    }

    function sendShipment(uint256 shipment_id, uint256 item, address recipient, uint256 quantity) public {
        require(provenances.findProducer(msg.sender).certification, "This producer is not certified.");
        require(provenances.findProduct(item).producer_address != address(0), "This product is not registered.");
        shipments[shipment_id] = Shipment(msg.sender, recipient, block.timestamp, item, quantity, ActionStatus.INPROGRESS);
        shipment_list[msg.sender] ++;
    }

    function receiveShipment(uint256 shipment_id, uint256 item, uint256 quantity) public {
        if(shipments[shipment_id].recipient != msg.sender){
            emit Log("This shipment is not yours.");
            shipments[shipment_id].action_status = ActionStatus.FAILURE;
        } else if((shipments[shipment_id].item != item) || (shipments[shipment_id].quantity != quantity)) {
            emit Log("Item/quantity do not match");
            shipments[shipment_id].action_status = ActionStatus.FAILURE;
        } else {
            emit Log("Item received.");

            if(block.timestamp <= (shipments[shipment_id].start_time + conditions[shipment_id].lead_time)) {
                sendToken(msg.sender, shipments[shipment_id].sender, conditions[shipment_id].token_amount);
                shipments[shipment_id].action_status = ActionStatus.SUCCESS;
                success_shipment_list[shipments[shipment_id].sender] ++;
            } else {
                emit Log("Payment not triggered as criteria not met");
            }
        }
    }

    function deleteShipment(uint256 shipment_id) public onlyOwner {
        shipments[shipment_id].action_status = ActionStatus.CANCELED;
        shipment_list[shipments[shipment_id].sender] --;
    }
    
    function checkShipment(uint256 shipment_id) public view returns (Shipment memory) {
        return shipments[shipment_id];
    }
    
    function checkSuccess(address recipient) public view returns (uint256) {
        return success_shipment_list[recipient];
    }
    
    function calculateReputation(address recipient) public view returns (uint256)  {
        if(shipment_list[recipient] > 0){
            return (uint256) (success_shipment_list[recipient] * 100 / shipment_list[recipient]);
        } else {
            return 0;
        }
    }
}
