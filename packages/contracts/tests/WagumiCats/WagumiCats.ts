import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import hre from "hardhat";
import type { Artifact } from "hardhat/types";

import { shouldBehaveLikeDeployed } from "./WagumiCats.behavior";
import { shouldBehaveLikeNFT } from "./WagumiCats.nft";
import { shouldBehaveLikeAfterBatchMint } from "./WagumiCats.owner";
import { shouldBehaveLikeAfterTransfer } from "./WagumiCats.transfer";

import type { WagumiCats } from "@/typechain/WagumiCats";

const { deployContract } = hre.waffle;

export interface Signers {
  admin: SignerWithAddress;
}

describe("WagumiCats", () => {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await hre.ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Deploy", () => {
    beforeEach(async function () {
      const nftArtifact: Artifact = await hre.artifacts.readArtifact(
        "WagumiCats",
      );
      this.nft = <WagumiCats>(
        await deployContract(this.signers.admin, nftArtifact)
      );
    });

    shouldBehaveLikeNFT();
    shouldBehaveLikeDeployed();
  });

  describe("Owner Batch Mint", () => {
    beforeEach(async function () {
      const nftArtifact: Artifact = await hre.artifacts.readArtifact(
        "WagumiCats",
      );
      this.nft = <WagumiCats>(
        await deployContract(this.signers.admin, nftArtifact)
      );
      const nft = this.nft as WagumiCats;
      await nft.ownerBatchMint();
    });

    shouldBehaveLikeNFT();
    shouldBehaveLikeAfterBatchMint();
  });

  describe("Owner Transfer", () => {
    beforeEach(async function () {
      const nftArtifact: Artifact = await hre.artifacts.readArtifact(
        "WagumiCats",
      );
      this.nft = <WagumiCats>(
        await deployContract(this.signers.admin, nftArtifact)
      );
      const nft = this.nft as WagumiCats;
      await nft.ownerBatchMint();
      await nft.transferOwnership("0xDCE4694e268bD83EA41B335320Ed11A684a1d7dB");
    });

    shouldBehaveLikeNFT();
    shouldBehaveLikeAfterTransfer();
  });
});
