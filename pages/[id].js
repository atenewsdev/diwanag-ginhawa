/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';

import { useRouter } from "next/router";
import art_details from '../data/art_details';

import { NextSeo } from 'next-seo';

const ViewAll = ({ setBgIndex, currentIndex }) => {
  const router = useRouter();
  const { id } = router.query;

  function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  React.useEffect(() => {
    setBgIndex(getRandomIndex(1, 2));
  }, [setBgIndex])

  const back = () => {
    if (currentIndex === 0) {
      router.push(`/${art_details[art_details.length - 1].id}`)
    } else {
      router.push(`/${art_details[currentIndex - 1].id}`)
    }
  }

  const forward = () => {
    if (currentIndex === art_details.length - 1) {
      router.push(`/${art_details[0].id}`)
    } else {
      router.push(`/${art_details[currentIndex + 1].id}`)
    }
  }

  return (
    <>
      <NextSeo
        title={`${art_details[currentIndex].title} | Diwanag 2021: Ginháwa`}
        description={`${art_details[currentIndex].medium} by ${art_details[currentIndex].artist}`}
        openGraph={{
          images: [
            {
              url: `https://ginhawa.atenews.ph/${art_details[currentIndex].id}.jpg`,
              alt: `${art_details[currentIndex].title}`,
              width: 800,
              height: 600,
              type: 'image/jpeg',
            }
          ],
          site_name: `${art_details[currentIndex].title} | Diwanag 2021: Ginháwa`,
        }}
        twitter={{
          handle: '@atenews',
          cardType: 'summary_large_image',
        }}
      />
      <Grid
        key={id}
        container 
        justifyContent="center" 
        alignItems="center" 
        height="100%"
        direction="column" 
        spacing={2}
        style={{ height: '100vh', width: '100vw' }}
      >
        <Grid item>
          <img 
            src={`/art/${art_details[currentIndex].id}.jpg`}
            alt={art_details[currentIndex].title}
            style={{
              border: '5px solid #fff',
              maxHeight: '60vh',
              maxWidth: '90vw'
            }}
          />
        </Grid>
        <Grid item>
          <Card style={{ borderRadius: 20 }}>
            <CardContent style={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
              <Grid 
                container
                justifyContent="center" 
                alignItems="center" 
                direction="column"
              >
                <Grid item>
                  <Typography style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 'bold' }}>
                    {art_details[currentIndex].title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography style={{ fontFamily: 'Montserrat' }}>
                    {art_details[currentIndex].medium}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontStyle: 'italic' }}>
                    by {art_details[currentIndex].artist}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Grid 
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <IconButton aria-label="back" size="large" onClick={back}>
                <ArrowBackIcon fontSize="inherit" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="home" size="large" onClick={() => {
                router.push('/')
              }}>
                <HomeIcon fontSize="inherit" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="forward" size="large" onClick={forward}>
                <ArrowForwardIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const currentIndex = art_details.findIndex((art) => art.id === id);
  // Pass data to the page via props
  return { props: { currentIndex } }
}

export default ViewAll;
