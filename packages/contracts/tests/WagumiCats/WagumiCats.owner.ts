import { expect } from "chai";

export const shouldBehaveLikeAfterBatchMint = () => {
  it("should behave like after batch mint", async function () {
    expect(await this.nft.totalSupply()).to.equal(10);
  });
};
