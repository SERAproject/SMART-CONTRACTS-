//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;

import "./Provenance.sol";
import "./Tracking.sol";
import "./Reputation.sol";

contract Factory {
    function createProvenance () public {
        Provenance provenance = new Provenance();
        Tracking tracking = new Tracking(address(provenance));
        Reputation reputation = new Reputation(address(tracking));
    }
}
