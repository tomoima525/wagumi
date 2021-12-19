import WalletConnectProvider from "@walletconnect/web3-provider";
import { RequireNetwork, WalletProvider } from "ethereal-react";
import type { AppProps } from "next/app";

import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import Web3Modal from "web3modal";

import "@/cats/styles/index.css";
import { Error } from "@/cats/components/atoms/Error";
import { Loading } from "@/cats/components/atoms/Loading";
import { Container } from "@/cats/components/molecules/Container";
import { Intro } from "@/cats/components/templates/Intro";
import { Seo } from "@/cats/components/templates/Seo";
import { SwitchNetwork } from "@/cats/components/templates/SwitchNetwork";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    },
  },
};

const web3Modal = new Web3Modal({
  network: "mainnet",
  cacheProvider: true,
  providerOptions: providerOptions,
});

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Container>
      <Seo />
      <WalletProvider
        cacheProvider
        fallback={<Intro />}
        loading={<Loading />}
        web3Modal={web3Modal}
      >
        <ErrorBoundary FallbackComponent={Error}>
          <Suspense fallback={<Loading />}>
            <RequireNetwork chainId={1} fallback={<SwitchNetwork />}>
              <Component {...pageProps} />
            </RequireNetwork>
          </Suspense>
        </ErrorBoundary>
      </WalletProvider>
    </Container>
  );
};

export default CustomApp;
