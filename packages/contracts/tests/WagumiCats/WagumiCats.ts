import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import hre from "hardhat";
import type { Artifact } from "hardhat/types";

import { shouldBehaveLikeNFT } from "./WagumiCats.behavior";

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
  });
});
