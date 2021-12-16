import type { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy = async ({
  getNamedAccounts,
  deployments,
  network,
}: HardhatRuntimeEnvironment) => {
  if (network.name !== "hardhat") {
    return;
  }

  const { deploy, execute } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("WagumiCats", {
    args: ["https://cats.wagumi.xyz/metadata/"],
    from: deployer,
    log: true,
  });

  await execute("WagumiCats", { from: deployer }, "ownerBatchMint");
  await execute("WagumiCats", { from: deployer }, "setSaleIsActive", [true]);
  await execute("WagumiCats", { from: deployer }, "transferOwnership", [
    "0xdce4694e268bd83ea41b335320ed11a684a1d7db",
  ]);
};

deploy.tags = ["WagumiCats"];

export default deploy;
