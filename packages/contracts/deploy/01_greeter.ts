import type { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy = async ({
  getNamedAccounts,
  deployments,
  network,
}: HardhatRuntimeEnvironment) => {
  if (network.name !== "hardhat") {
    return;
  }

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("Greeter", {
    args: ["Hello World"],
    from: deployer,
    log: true,
  });
};

deploy.tags = ["Greeter"];

export default deploy;
