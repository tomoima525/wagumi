import WalletConnectProvider from "@walletconnect/web3-provider";
import { RequireNetwork, WalletProvider } from "ethereal-react";
import type { AppProps } from "next/app";

import { Suspense } from "react";

import "tailwindcss/tailwind.css";
import { Loading } from "@/cats/components/atoms/Loading";
import { Container } from "@/cats/components/molecules/Container";
import { Intro } from "@/cats/components/templates/Intro";
import { Seo } from "@/cats/components/templates/Seo";
import { SwitchNetwork } from "@/cats/components/templates/SwitchNetwork";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Container>
      <Seo />
      <WalletProvider
        cacheProvider
        providerOptions={{
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: {
                4: `https://rinkeby.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
              },
              infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
              network: "rinkeby",
            },
          },
        }}
        fallback={<Intro />}
        loading={<Loading />}
      >
        <Suspense fallback={<Loading />}>
          <RequireNetwork chainId={4} fallback={<SwitchNetwork />}>
            <Component {...pageProps} />
          </RequireNetwork>
        </Suspense>
      </WalletProvider>
    </Container>
  );
};

export default CustomApp;
