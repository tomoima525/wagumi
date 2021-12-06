// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("Wagumi DAO Token", "WAGUMI") {
        _mint(msg.sender, 1000 * 1000 * 1000 * 10 ** 18);
    }
}
