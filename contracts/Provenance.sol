//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Provenance is Ownable {
    enum ActionStatus {
        REMOVED,
        ADDED
    }

    struct Producer {
        string name;
        string phone_number;
        string city;
        string state;
        string country_of_origin;
        bool certification;
        ActionStatus action_status;
    }

    struct Product {
        address producer_address;
        string location;
        uint date_time_of_origin;
        ActionStatus action_status;
    }

    mapping(address => Producer) public producers;
    mapping(uint256 => Product) public products;
    
    function addProducer(address from, string memory name, string memory phone_number, string memory city, string memory state, string memory country_of_origin ) public {
        require(producers[from].action_status != ActionStatus.ADDED, "This producer is already exist.");
        producers[from] = Producer(name, phone_number, city, state, country_of_origin, false, ActionStatus.ADDED);
    }

    function findProducer(address recipient) public view returns (Producer memory) {
        return producers[recipient];
    }

    function removeProducer(address recipient) public onlyOwner{
        producers[recipient].action_status = ActionStatus.REMOVED;
    }

    function certifyProducer(address recipient) public onlyOwner {
        producers[recipient].certification = true;
    }

    function addProduct(uint256 serial_number, string memory location) public {
        require(products[serial_number].action_status != ActionStatus.ADDED, "This product is already exist.");
        products[serial_number] = Product(msg.sender, location, block.timestamp, ActionStatus.ADDED);
    }

    function removeProduct(uint256 serial_number) public onlyOwner {
        products[serial_number].action_status = ActionStatus.REMOVED;
    }
    
    function findProduct(uint256 serial_number) public view returns (Product memory) {
        return products[serial_number];
    }

}
