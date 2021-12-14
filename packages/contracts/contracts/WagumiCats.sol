// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract WagumiCats is ERC721, ReentrancyGuard, Ownable {
  using Counters for Counters.Counter;

  constructor(string memory customBaseURI_) ERC721("Wagumi Cats", "WAGUMI") {
    customBaseURI = customBaseURI_;
  }

  /** MINTING LIMITS **/

  mapping(address => bool) private mintCountMap;

  function allowedMintCount(address minter) public view returns (bool) {
    return mintCountMap[minter];
  }

  function updateMintCount(address minter) private {
    mintCountMap[minter] = false;
  }

  /** MINTING **/

  uint256 public constant MAX_SUPPLY = 1000;

  Counters.Counter private supplyCounter;

  function ownerBatchMint() public onlyOwner {
    uint256 _newId = totalSupply();

    for (uint i = 0; i < 10; i++) {
      _safeMint(msg.sender, (_newId + i));
      supplyCounter.increment();
    }
  }

  function mint() public nonReentrant {
    require(saleIsActive, "Sale not active");

    if (allowedMintCount(_msgSender()) ) {
      updateMintCount(_msgSender());
    } else {
      revert("Minting limit exceeded");
    }

    require(totalSupply() < MAX_SUPPLY, "Exceeds max supply");

    _safeMint(_msgSender(), totalSupply());

    supplyCounter.increment();
  }

  function totalSupply() public view returns (uint256) {
    return supplyCounter.current();
  }

  /** ACTIVATION **/

  bool public saleIsActive = true;

  function setSaleIsActive(bool saleIsActive_) external onlyOwner {
    saleIsActive = saleIsActive_;
  }

  /** URI HANDLING **/

  string private customBaseURI;

  function setBaseURI(string memory customBaseURI_) external onlyOwner {
    customBaseURI = customBaseURI_;
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return customBaseURI;
  }
}
