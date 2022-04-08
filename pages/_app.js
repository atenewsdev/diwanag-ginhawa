import React from 'react';

import '../styles/globals.css'
import Head from 'next/head';

import Backgrounds from '../components/Backgrounds';
import { motion } from 'framer-motion';
import { AnimatePresence } from "framer-motion";

import { useRouter } from 'next/router';

import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [bgIndex, setBgIndex] = React.useState(0);
  console.log(router.asPath)
  return (
    <>
      <NextSeo
        title={`Diwanag 2021: Ginháwa`}
        description={`Diwanag 2021: Ginháwa is the official Art Folio of Atenews for the year 2021.`}
      />
      <AnimatePresence 
        exitBeforeEnter
      >
        <div key={router.asPath}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Backgrounds bgIndex={bgIndex} />
            <main>
              <Component {...pageProps} setBgIndex={setBgIndex} />
            </main>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  )
}

export default MyApp
