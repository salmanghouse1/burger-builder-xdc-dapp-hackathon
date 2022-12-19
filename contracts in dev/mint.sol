// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BurgerToken is ERC20, Ownable {
    constructor() ERC20("Burger Token", "BGT") {
        _mint(msg.sender, 50000 * 10**decimals());
    }
}
