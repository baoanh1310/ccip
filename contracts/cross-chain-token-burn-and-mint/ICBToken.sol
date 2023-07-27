// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ICBToken is ERC20, Ownable {
    address public tokenSender;
    constructor() ERC20("Icebear", "ICB") {
        _mint(msg.sender, 1000000);
    }

    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }

    function setBurner(address _tokenSenderContract) public onlyOwner {
        tokenSender = _tokenSenderContract;
    }

    function burn(address _account, uint256 _amount) public {
        require(
            msg.sender == _account || msg.sender == tokenSender, 
            "ICBToken: Only token holder or TokenSender contract can call burn method"
        );
        _burn(_account, _amount);
    }
}