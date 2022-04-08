/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { useRouter } from 'next/router';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Button from '../components/Button';

import { motion } from 'framer-motion';

import artist_details from '../data/artist_details';

import { NextSeo } from 'next-seo';

const Artists = ({ setBgIndex }) => {
  const router = useRouter();

  React.useEffect(() => {
    setBgIndex(2);
  }, [setBgIndex])

  return (
    <>
      <NextSeo
        title={`Artist List | Diwanag 2021: Ginháwa`}
        description={`Contributors for Diwanag 2021: Ginháwa`}
        openGraph={{
          images: [
            {
              url: `https://ginhawa.atenews.ph/sample_1.jpg`,
              alt: `Ode to Last`,
              type: 'image/jpeg',
            }
          ],
          site_name: `Artist List | Diwanag 2021: Ginháwa`,
        }}
        twitter={{
          handle: '@atenews',
          cardType: 'summary_large_image',
        }}
      />
      <Grid
        component={motion.div}
        container 
        justifyContent="center" 
        alignItems="center" 
        height="100%" 
        direction="column" 
        spacing={4}
        style={{ minHeight: '100vh', width: '100vw', padding: '4rem' }}
      >
        <Grid item>
          <img src="/painter.png" alt="Artists" />
        </Grid>
        <Grid item>
          <Typography style={{
            fontFamily: 'Montserrat',
            letterSpacing: '1rem',
            paddingLeft: '1rem',
            fontSize: '1.2rem'
          }}>
            FEATURING
          </Typography>
        </Grid>
        <Grid item>
          <Grid 
            container 
            justifyContent="center" 
            alignItems="center" 
            height="100%" 
            direction="column" 
            spacing={2}
          >
            { artist_details.map((artist) => (
              <Grid item key={artist.id}>
                <center>
                  <Typography style={{
                    fontFamily: 'Moonglade',
                    fontSize: '2rem'
                  }}>
                    {artist.name}
                  </Typography>
                  <Typography style={{
                    fontFamily: 'Montserrat',
                    fontSize: '0.8rem',
                    fontStyle: 'italic'
                  }}>
                    {artist.course}
                  </Typography>
                </center>
              </Grid>
            )) }
          </Grid>
        </Grid>
        <Grid item>
          <Button
            onClick={() => { router.push('/') }}
          >
            BACK
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Artists;
