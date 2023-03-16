//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;

import "./SeraNFT.sol";

contract SeraNFTFactory {
    struct Token {
        address owner;
        address token_address;
        string invoice_id;
        string token_name;
        string token_symbol;
        string contract_type;
    }

    uint256 public token_count;
    mapping(uint256 => Token) public token;

    constructor () {
      token_count = 0;
    }

    function createSeraNFT (string memory invoice_id, string memory token_name, string memory token_symbol, string memory contract_type) public {
      SeraNFT seraNFT = new SeraNFT();
      token_count ++;
      token[token_count] = Token(msg.sender, address(seraNFT), invoice_id, token_name, token_symbol, contract_type);
      seraNFT.transferOwnership(msg.sender);
    }
}