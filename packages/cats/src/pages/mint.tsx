import { WagumiCatsDeployment } from "@wagumi/contracts";
import { ERC721_ABI, useContract } from "ethereal-react";

import { Credits } from "@/cats/components/atoms/Credits";
import { Summary } from "@/cats/components/molecules/Summary";
import { Minter } from "@/cats/components/organisms/Minter";
import { FooterLogo } from "@/cats/components/templates/FooterLogo";
import { PageHeader } from "@/cats/components/templates/PageHeader";
import { DISCORD_URL, GITHUB_URL, TWITTER_URL } from "@/cats/const/social";

export const MintPage = (): JSX.Element => {
  const WagumiCatsDeploymentContract = useContract(
    WagumiCatsDeployment.address,
    [...ERC721_ABI],
  );

  return (
    <>
      <PageHeader title="WAGUMI Cats 🐾" />
      <Summary contract={WagumiCatsDeploymentContract} />
      <Minter contract={WagumiCatsDeploymentContract} />
      <Credits />
      <FooterLogo
        discord={DISCORD_URL}
        github={GITHUB_URL}
        twitter={TWITTER_URL}
      />
    </>
  );
};

export default MintPage;
