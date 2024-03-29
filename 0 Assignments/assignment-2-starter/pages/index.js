import Head from 'next/head'
import Image from 'next/image'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import JSArticles from '../Components/JSArticles';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Assignment 2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </Head>
      <main>
        <AppBar position="static" title="Assignment 2">
          <Typography sx={{ m: 2 }}>
            Assignment 2
          </Typography>
        </AppBar>
        <Container>
          
          <Typography variant="h2" component="h2" color="primary" align="center">
            Assignment 2 - React Components and Styling
          </Typography>
          <Typography color="secondary" align="center">
          Here's a list of awesome resources that you can use
          </Typography>
          <JSArticles />
        </Container>
      </main>
    </div>
  )
}
