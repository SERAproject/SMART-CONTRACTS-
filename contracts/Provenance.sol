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
        string email;
        string trade_name;
        string legal_name;
        string country;
        string state_town;
        string building_number;
        string phone_number;
        bool certification;
        ActionStatus action_status;
    }

    struct Product {
        address producer_address;
        string name;
        uint date_time_of_origin;
        ActionStatus action_status;
    }

    mapping(address => Producer) public producers;
    mapping(string => Product) public products;
    mapping(address => mapping(address => bool)) public auth_producer;
		mapping(uint256 => address) public producer_list;
		mapping(address => bool) public is_producer;
    string[] public product_list;
    uint256 public producer_count;
    uint256 public product_count;
    
    constructor() {
        producer_count = 0;
        product_count = 0;
    }

    function addProducer(address to, string memory email, string memory trade_name, string memory legal_name, string memory country, string memory state_town, string memory building_number, string memory phone_number) public {
      require(producers[to].action_status != ActionStatus.ADDED, "This producer is already exist.");
      producers[to] = Producer(email, trade_name, legal_name, country, state_town, building_number, phone_number, false, ActionStatus.ADDED);
      producer_count ++;
			producer_list[producer_count] = to;
			is_producer[to] = true;
    }

		function authProducer(address to) public {
			if(msg.sender > to)
        auth_producer[msg.sender][to] = true;
    	else
        auth_producer[to][msg.sender] = true;
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

    function addProduct(string memory pub_number, string memory name) public {
        require(products[pub_number].action_status != ActionStatus.ADDED, "This product is already exist.");
        products[pub_number] = Product(msg.sender, name, block.timestamp, ActionStatus.ADDED);
        product_list.push(pub_number);
        product_count ++;
    }

    function removeProduct(string memory pub_number) public onlyOwner {
        products[pub_number].action_status = ActionStatus.REMOVED;
    }
    
    function findProduct(string memory pub_number) public view returns (Product memory) {
        return products[pub_number];
    }

}
