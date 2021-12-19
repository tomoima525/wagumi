import type { DeployFunction } from "hardhat-deploy/types";
import type { HardhatRuntimeEnvironment } from "hardhat/types";

const check: DeployFunction = async ({
  getNamedAccounts,
  ethers,
}: HardhatRuntimeEnvironment) => {
  const { deployer } = await getNamedAccounts();
  console.log("Deploying contracts with the account:", deployer);
  const provider = ethers.getDefaultProvider();
  const balance = await provider.getBalance(deployer);
  console.log("Deploying account has the balance:", balance);
};

check.tags = ["Check"];

export default check;
