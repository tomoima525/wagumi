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
  await deploy("NFT", {
    args: ["https://wagumi.xyz/art/metadata/"],
    from: deployer,
    log: true,
  });
};

deploy.tags = ["WagumiCats"];

export default deploy;
