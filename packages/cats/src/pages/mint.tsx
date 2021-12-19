import { WagumiCatsRinkebyDeployment } from "@wagumi/contracts";
import { ERC721_ABI, useContract } from "ethereal-react";

import { Summary } from "@/cats/components/molecules/Summary";
import { Minter } from "@/cats/components/organisms/Minter";
import { FooterLogo } from "@/cats/components/templates/FooterLogo";
import { PageHeader } from "@/cats/components/templates/PageHeader";
import { DISCORD_URL, GITHUB_URL, TWITTER_URL } from "@/cats/const/social";

export const MintPage = (): JSX.Element => {
  const WagumiCatsDeploymentContract = useContract(
    WagumiCatsRinkebyDeployment.address,
    [...ERC721_ABI, "function mint()"],
  );

  return (
    <>
      <PageHeader title="WAGUMI Cats 🐾" />
      <Summary contract={WagumiCatsDeploymentContract} />
      <Minter contract={WagumiCatsDeploymentContract} />
      <FooterLogo
        discord={DISCORD_URL}
        github={GITHUB_URL}
        twitter={TWITTER_URL}
      />
    </>
  );
};

export default MintPage;
