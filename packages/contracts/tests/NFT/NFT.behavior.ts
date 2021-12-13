import { expect } from "chai";

export const shouldBehaveLikeNFT = () => {
  it("should mint successfully", async function () {
    expect(await this.nft.name()).to.equal("Wagumi Cats");
    expect(await this.nft.symbol()).to.equal("WAGUMI");
    expect(await this.nft.totalSupply()).to.equal(0);
    expect(await this.nft.balanceOf(this.signers.admin.address)).to.equal(0);
  });
};
