import { GoMint } from "@/cats/components/atoms/GoMint";
import { RandomCat } from "@/cats/components/organisms/RandomCat";
import { FooterLogo } from "@/cats/components/templates/FooterLogo";
import { PageHeader } from "@/cats/components/templates/PageHeader";

import { DISCORD_URL, GITHUB_URL, TWITTER_URL } from "@/cats/const/social";

export const IndexPage = (): JSX.Element => {
  return (
    <>
      <PageHeader title="WAGUMI Cats 🐾" />
      <RandomCat />
      <GoMint />
      <FooterLogo
        discord={DISCORD_URL}
        github={GITHUB_URL}
        twitter={TWITTER_URL}
      />
    </>
  );
};

export default IndexPage;
