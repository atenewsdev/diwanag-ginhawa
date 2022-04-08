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

const ViewAll = ({ setBgIndex }) => {
  const router = useRouter();
  const { id } = router.query;

  function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const currentIndex = React.useMemo(() => {
    return art_details.findIndex((art) => art.id === id)
  }, [id])

  React.useEffect(() => {
    console.log(getRandomIndex(1, 2))
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

  return art_details[currentIndex] && (
    <>
      <NextSeo
        title={`${art_details[currentIndex].title} | Diwanag 2021: Ginháwa`}
        description={`${art_details[currentIndex].medium} by ${art_details[currentIndex].artist}`}
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
            src={`/art/${art_details[currentIndex].id}.png`}
            alt={art_details[currentIndex].title}
            style={{
              maxHeight: '60vh',
              maxWidth: '90vw'
            }}
          />
        </Grid>
        <Grid item>
          <Card>
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

export default ViewAll;
