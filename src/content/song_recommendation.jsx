import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function SongRecommendation() {
  const netflixOption = options[Math.floor(Math.random() * options.length)];
  return <SongCard {...netflixOption} />
}

function SongCard({title, genre, description, spotifyID}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Song Recommendation
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {genre}
        </Typography>
        <Typography variant="body2">
          <iframe src={`https://open.spotify.com/embed/track/${spotifyID}`} width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

const options = [
  {
    title: 'No Reptiles',
    genre: 'Good energy',
    description: 'Some good cottage music',
    spotifyID: '1SN1gifVAKecU85lZggS8k'
  },
  {
    title: 'The Beths',
    genre: 'Chill fun & catchy',
    description: 'Easy listening',
    spotifyID: '0eL1VqUPElim7IP5eezImS'
  },
  {
    title: 'illuminati hotties',
    genre: 'post-naptime burritocore',
    description: 'Fun sound, positive energy',
    spotifyID: '4iw5jzsl4j1g82b2VcSVeM'
  },
  {
    title: 'AURORA',
    genre: 'Soft pop',
    description: 'I can\'t stop listening to Runaway on repeat',
    spotifyID: '0TCmhnbMpw5zwPsTvlXTJi'
  },
  {
    title: 'Tame Impala',
    genre: 'Psychedelic',
    description: 'This guy has lots of great songs worth checking out',
    spotifyID: '6K4t31amVTZDgR3sKmwUJJ'
  },
  {
    title: 'Dorian Electra',
    genre: 'Hyperpop (loud, high energy)',
    description: 'This is one of the tamer songs, Dorian Electra has lots of great music all hyperpop, which is a little out there',
    spotifyID: '4wIA16n4ON8YkU5y8C6uYr'
  },
  {
    title: 'Rex Orange County',
    genre: 'Alternative / Indie',
    description: 'Love this guys music, lots of happy vibes',
    spotifyID: '47Bg6IrMed1GPbxRgwH2aC'
  },
  {
    title: 'Orion Sun',
    genre: 'Personal, soft',
    description: 'Easy listening & soft, good background music that you can focus on if you want',
    spotifyID: '4ymyaSXpC2qZuavMX4GrzR'
  },
  {
    title: 'The xx',
    genre: 'Indie Rock, unique',
    description: 'Great band, great songs, I enjoy listening to entire albums by them in order',
    spotifyID: '5w3CRkbTWXfbYepIdFpGUN'
  },
  {
    title: 'Saint Motel',
    genre: 'Dream/Indie Pop',
    description: 'Bright and colourful songs & videos',
    spotifyID: '2DFi8rwHcVkTTgu7PULhtI'
  },
  {
    title: 'St. Vincent',
    genre: 'Indie Pop',
    description: 'Complex and tons of sounds',
    spotifyID: '2qTy3hGSbxoSenKmlKGHFw'
  },
  {
    title: 'FKA twigs',
    genre: 'Avant pop, artful',
    description: 'Each song is different, and very different',
    spotifyID: '7x8pIrhMu9FCmqqHNyuH0P'
  },
  {
    title: 'Bombay Bicycle Club',
    genre: 'Indie',
    description: '',
    spotifyID: '3nClCcBmn9NnrRQkQTkx1J'
  },
  // {
  //   title: '',
  //   genre: '',
  //   description: '',
  //   spotifyID: ''
  // },
  // {
  //   title: '',
  //   genre: '',
  //   description: '',
  //   spotifyID: ''
  // },
  // {
  //   title: '',
  //   genre: '',
  //   description: '',
  //   spotifyID: ''
  // },
];
