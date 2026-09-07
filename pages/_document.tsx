import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#faf8f4" />
      </Head>
      <body className="antialiased bg-paper text-ink">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
