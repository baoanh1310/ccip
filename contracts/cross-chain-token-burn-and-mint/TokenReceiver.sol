// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {Withdraw} from "../utils/Withdraw.sol";
import {ICBToken} from "./ICBToken.sol";

contract TokenReceiver is CCIPReceiver, Withdraw {
    ICBToken token;

    event MintCallSuccessfull();

    constructor(address router, address tokenAddress) CCIPReceiver(router) {
        token = ICBToken(tokenAddress);
    }

    function _ccipReceive(
        Client.Any2EVMMessage memory message
    ) internal override {
        (bool success, ) = address(token).call(message.data);
        require(success);
        emit MintCallSuccessfull();
    }
}