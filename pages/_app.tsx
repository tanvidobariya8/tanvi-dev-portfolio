import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo5.png" /> {/* Specify size */}
        <title>Tanvi's Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
