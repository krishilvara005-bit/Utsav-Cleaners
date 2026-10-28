import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Utsav Cleaners - Premium Eco-Friendly Dry Cleaning & Doorstep Laundry Services in Noida & NCR." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-white text-ink">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
