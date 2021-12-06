import { expect } from "chai";
import { ethers } from "ethers";

export const shouldBehaveLikeGreeter = () => {
  it("should mint successfully", async function () {
    expect(await this.nft.balanceOf(this.signers.address)).to.equal(0);

    expect(await this.nft.connect(this.signers.admin)._baseURI()).to.equal(
      "https://wagumi.xyz/art/metadata/",
    );
  });
};
