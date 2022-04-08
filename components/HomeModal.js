/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { useRouter } from 'next/router';

import { AnimatePresence, motion } from "framer-motion";
import Grid from '@mui/material/Grid';

import art_details from '../data/art_details';

import Button from './Button';

const HomeModal = ({ isVisible, close }) => {
  const router = useRouter();

  return (
    <AnimatePresence>
      { isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            width: '100vw', 
            height: '100vh',
            position: 'absolute',
            zIndex: 9999,
            top: 0,
            left: 0
          }}
        >
          <div style={{ 
            background: 'linear-gradient(45deg, #F38070, #764BA2)',
            opacity: 0.5,
            width: '100vw', 
            height: '100vh',
            zIndex: -1,
            position: 'fixed'
          }} />
          <Grid container justifyContent="center" alignItems="center" height="100%" direction="column" spacing={2}>
            <Grid item>
              <img src="/art-gallery.png" alt="Gallery" />
            </Grid>
            <Grid item>
              <Button
                onClick={() => { router.push(`/${art_details[0].id}`) }}
              >
                VIEW ARTWORKS
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => { router.push('/artists') }}
              >
                VIEW ARTIST LIST
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => { close() }}
              >
                BACK
              </Button>
            </Grid>
          </Grid>
        </motion.div>
      ) }
    </AnimatePresence>
  );
}

export default HomeModal;
