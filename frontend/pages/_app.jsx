import { AnimatePresence } from 'framer-motion'
import '../styles/globals.scss'
import Head from 'next/head'
import Script from 'next/script';

export default function MyApp({ Component, pageProps, router }){
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}