/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Button from '../components/Button';

import { useAnimation, motion } from 'framer-motion';

import HomeModal from '../components/HomeModal';

const Home = ({ setBgIndex }) => {
  React.useEffect(() => {
    setBgIndex(0);
  }, [setBgIndex])

  const [modal, setModal] = React.useState(false)
  const controls = useAnimation();

  React.useEffect(() => {
    if (modal) {
      controls.start({
        filter: 'blur(50px)'
      })
      setBgIndex(2)
    } else {
      controls.start({
        filter: 'blur(0px)'
      })
      setBgIndex(0)
    }
  }, [modal, controls, setBgIndex])

  return (
    <>
      <Grid
        component={motion.div}
        container 
        justifyContent="center" 
        alignItems="center" 
        height="100%" 
        direction="column" 
        spacing={2}
        animate={controls}
        style={{ height: '100vh', width: '100vw' }}
      >
        <Grid item>
          <Typography style={{ 
            fontFamily: 'Grahamo', 
            fontSize: 'clamp(9.375rem, -10.1563rem + 62.5vw, 25rem)', 
            color: '#430F0F', 
            lineHeight: 'clamp(7.8125rem, -3.9063rem + 37.5vw, 17.1875rem)',
            filter: 'drop-shadow(0 -2px 1rem #DC7676)' 
          }}>
            Ginhawa
          </Typography>
          <Typography style={{ fontFamily: 'Montserrat', fontSize: 'clamp(0.75rem, -0.1875rem + 3vw, 1.5rem)' }}>
            DIWANAG 2021
          </Typography>
        </Grid>
        <Grid item>
          <img src="/logo.png" alt="Ginhawa Logo" />
        </Grid>
        <Grid item>
          <Button
            onClick={() => { setModal((i) => !i) }}
          >
            ART GALLERY
          </Button>
        </Grid>
      </Grid>
      <HomeModal setBgIndex={setBgIndex} isVisible={modal} close={() => { setModal(false) }} />
    </>
  );
}

export default Home;
