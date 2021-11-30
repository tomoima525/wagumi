import { DefaultSeo as Default } from "next-seo";
import Head from "next/head";
import type { FC } from "react";

export const Seo: FC = () => {
  return (
    <>
      <Default
        noindex={false}
        nofollow={false}
        title="Wagumi DAO"
        canonical="https://wagumi.lol"
        description="Wagumi DAO - A cross-chain NFT experiment."
        openGraph={{
          locale: "en_US",
          site_name: "wagumi.lol",
          type: "website",
          url: "https://www.wagumi.lol",
          images: [{ url: "https://www.wagumi.lol/ogp.jpg" }],
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@wagumi",
          site: "@wagumi",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </>
  );
};
