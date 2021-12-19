import type { DeployFunction } from "hardhat-deploy/types";
import type { HardhatRuntimeEnvironment } from "hardhat/types";

const check: DeployFunction = async ({
  getNamedAccounts,
}: HardhatRuntimeEnvironment) => {
  const { deployer } = await getNamedAccounts();
  console.log("Deploying contracts with the account:", deployer);
};

check.tags = ["Check"];

export default check;
