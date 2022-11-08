import Head from 'next/head'
import Image from 'next/image'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Container from '@mui/material/Container';

import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AdaptationReviewCard from '../components/AdaptationReviewCard';
import { useState } from 'react';

import { getReviews, postReview } from '../utils/api/reviews';
import Navbar from '../components/Navbar';

const MOCK_ADAPTATION_RATING = [{
    'title': 'Fight Club',
    'comment': 'Great movie and book',
    'rating': 10
  }]

const FETCH_URL = "http://localhost:5000/reviews"

export default function Home() {
  const [reviews, setReviews] = useState([])

  const [title, setTitle] = useState("")
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState("")

  const addReview = (event) => {
    event.preventDefault()
    postReview({
      title: title,
      comment: comment,
      rating: rating
    }).then((data) => {
      setReviews([data, ...reviews])
    })
  }

  const loadAllReviews = () => {
    getReviews().then((data) => {
      console.log(data)
      setReviews(data)
    })
  }

    
  return (
    <div>
      <Head>
        <title>Adaptation Reviews.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Container maxWidth="md">
          
          <Box
            sx={{
              pt: 2,
              pb: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={loadAllReviews}
            >
              Load All Current Reviews
            </Button>
          </Box>
          {reviews.map((adaptation)=> {
            return <AdaptationReviewCard
              title={adaptation.title}
              rating={adaptation.rating}
              comment={adaptation.comment}
            />
          })}
          <AdaptationReviewCard />
        </Container>
      </main>
    </div>
  )
}
