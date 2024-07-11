import { Html, Head, Main, NextScript } from 'next/document'

let bgTime = '';

const date = new Date();
const hour = date.getHours();

switch (true) {
  case hour >= 6 && hour < 12:
    bgTime = 'pagi';
    break;
  case hour >= 12 && hour < 18:
    bgTime = 'siang';
    break;
  case hour >= 18 && hour < 21:
    bgTime = 'sore';
    break;
  default:
    bgTime = 'malam';
    break;
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="orientation" content="portrait" />
      </Head>
      <body className={bgTime}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
