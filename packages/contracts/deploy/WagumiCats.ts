import type { DeployFunction } from "hardhat-deploy/types";
import type { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy: DeployFunction = async ({
  getNamedAccounts,
  deployments,
  ethers,
}: HardhatRuntimeEnvironment) => {
  const WAGUMI_MULTISIG_ADDRESS = "0xDCE4694e268bD83EA41B335320Ed11A684a1d7dB";

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const WagumiCatsContract = await deploy("WagumiCats", {
    args: ["https://cats.wagumi.xyz/metadata/"],
    from: deployer,
    log: true,
  });

  const WagumiCatsFactory = await ethers.getContractFactory("WagumiCats");
  const WagumiCats = WagumiCatsFactory.attach(WagumiCatsContract.address);

  const txOwnerBatchMint = await WagumiCats.ownerBatchMint(
    WAGUMI_MULTISIG_ADDRESS,
  );
  const receiptOwnerBatchMint = await txOwnerBatchMint.wait();
  console.log(JSON.stringify(receiptOwnerBatchMint));

  const txSetSaleIsActive = await WagumiCats.setSaleIsActive(true);
  const receiptSetSaleIsActive = await txSetSaleIsActive.wait();
  console.log(JSON.stringify(receiptSetSaleIsActive));

  const txTransferOwnership = await WagumiCats.transferOwnership(
    WAGUMI_MULTISIG_ADDRESS,
  );
  const receiptTransferOwnership = await txTransferOwnership.wait();
  console.log(JSON.stringify(receiptTransferOwnership));
};

deploy.tags = ["WagumiCats"];

export default deploy;
