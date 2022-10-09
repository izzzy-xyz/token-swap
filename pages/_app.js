import React from "react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Initial Coin Offering</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Pre-ICO discounted price before the official public sale. This currency will be used as a management token for the exchange, it can be bought and traded between users on a decentralized exchange, add liquidity and earn from the liquidity pool, allow users to vote, making the main decisions on the platform from a decentralized structure to the whole community"
        />
        <meta
          name="keywords"
          content="token drop, token transfer, token claim, token claim phases, ico, initial coin offering"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
