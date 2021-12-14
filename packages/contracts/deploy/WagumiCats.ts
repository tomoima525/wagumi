import type { HardhatRuntimeEnvironment } from "hardhat/types";

import type { WagumiCats } from "@/typechain/WagumiCats";
import type { WagumiCats__factory } from "@/typechain/factories/WagumiCats__factory";

const deploy = async ({ ethers, network }: HardhatRuntimeEnvironment) => {
  if (network.name !== "hardhat") {
    return;
  }

  const wagumiCatsFactory = (await ethers.getContractFactory(
    "WagumiCats",
  )) as WagumiCats__factory;
  const greeter: WagumiCats = await wagumiCatsFactory.deploy(
    "https://cats.wagumi.xyz/metadata/",
  );
  await greeter.deployed();
};

deploy.tags = ["WagumiCats"];

export default deploy;
