import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function NetflixRecommendation() {
  const netflixOption = options[Math.floor(Math.random() * options.length)];
  return <NetflixCard {...netflixOption} />
}

function NetflixCard({title, genre, description, link, image}) {
  const imageStyle = {
    objectFit: 'cover',
    width: '100%'
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Netflix Recommendation
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {genre}
        </Typography>
        <Typography variant="body2">
          <a href={link}><img style={imageStyle} src={image} /></a>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={link} underline="none">
          <Typography>Watch it</Typography>
        </Link>
      </CardActions>
    </Card>
  );
}

const options = [
  {
    title: 'The IT Crowd',
    genre: 'Comedy',
    description: 'One of Owen\'s favourite shows, a British tech support comedy, we watched an episode together and it was funny',
    link: 'https://www.netflix.com/title/70140450',
    image: 'https://www.themoviedb.org/t/p/w1280/qZXkBoOUYzvKI4UCMzDQ5kqWHjh.jpg'
  },
  {
    title: 'Black Mirror',
    genre: 'Sci-Fi Thriller',
    description: 'An exploratory speculative (and british) sci fi show, episodes vary wildly in content & sometimes quality. Most of the episodes are unrelated so you can watch in pieces.',
    link: 'https://www.netflix.com/title/70264888',
    image: 'https://www.themoviedb.org/t/p/w1280/7PRddO7z7mcPi21nZTCMGShAyy1.jpg'
  },
  {
    title: 'Scream Queens',
    genre: 'Comedy / Comedic Horror',
    description: 'Emma Roberts and Jamie Lee Curtis being hilarious while a serial killer is on the loose. Hilarious and weird',
    link: 'https://www.netflix.com/title/80057309',
    image: 'https://www.themoviedb.org/t/p/w1280/yeayXZYSU8xdmC8i5g5jTdxeggp.jpg'
  },
  {
    title: 'Dirk Gently\'s Holistic Detective Agency',
    genre: 'Comedy, Sci-Fi and Mystery',
    description: 'This show is a treat. Quirky & funny with a mystery, based on a story by Douglas Adams',
    link: 'https://www.netflix.com/title/80119426',
    image: 'https://www.themoviedb.org/t/p/w1280/q8oMpXPEAUJJ0KztsRs5K51T2lo.jpg'
  },
  {
    title: 'Archive 81',
    genre: 'Mystery, Thriller',
    description: 'Follow an archivist / tape film restorer as he watches the documentary tapes he restores. Mysterious and thriller, a very fun watch, kept me on the edge of my seat for the whole watch',
    link: 'https://www.netflix.com/title/80222802',
    image: 'https://www.themoviedb.org/t/p/w1280/l1jeSEm6a88GFcLzlHQr60D0dOi.jpg'
  },
  {
    title: 'Stay Close',
    genre: 'Mystery, Crime',
    description: 'This is a good slow-burn mystery crime following a soon-to-be-married mother as her events from the past resurface. Great watch and only 1 season',
    link: 'https://www.netflix.com/title/81289581',
    image: 'https://www.themoviedb.org/t/p/w1280/dOxXkneHeiAVbdpkEbajgiwobO9.jpg'
  },
  {
    title: 'Lupin',
    genre: 'French Mystery & Crime',
    description: 'A light and fun show about the French gentleman thief (based on older franchises with the same name). I\'ve only seen the first half but so far its witty, and exciting, and theres a dog named J\'acuse',
    link: 'https://www.netflix.com/title/80994082',
    image: 'https://www.themoviedb.org/t/p/w1280/4MObjJi6LOWO6xtDzAkX6NVBU0J.jpg'
  },
  {
    title: 'Community',
    genre: 'School Comedy/Sitcom',
    description: 'This is one of my favourite shows ever, its hilarious and for a sitcom type show the episodes are varied and interesting',
    link: 'https://www.netflix.com/title/70155589',
    image: 'https://www.themoviedb.org/t/p/w1280/3KUjDt8XY7w2Ku70UE0SECmv1zP.jpg'
  },
  {
    title: 'Norm Macdonald Has a Show',
    genre: 'Comedy, Talk show',
    description: 'Talkshowish, podcastish, this show varies between bad jokes happening and hilarious moments. With a different guest each week you can look through the episodes and pick and choose (there are also some free episodes available on youtube from before this was picked up by Netflix)',
    link: 'https://www.netflix.com/title/80225949',
    image: 'https://www.themoviedb.org/t/p/w1280/pGOpdt9Xy9YO2nUEWgp8G89KC5r.jpg'
  },
  {
    title: 'BoJack Horseman',
    genre: 'Comedy (also sometimes depressing)',
    description: 'This ones a little out there, but its hilarious at times. A washed up sitcom star and his problems (also he is a horse)',
    link: 'https://www.netflix.com/title/70298932',
    image: 'https://www.themoviedb.org/t/p/w1280/pB9L0jAnEQLMKgexqCEocEW8TA.jpg'
  },
  {
    title: 'Master of None',
    genre: 'Comedy, slice of life',
    description: 'This show has real, sweet, sad, and funny moments. Its witty and emotional and very much worth a watch',
    link: 'https://www.netflix.com/title/80049714',
    image: 'https://www.themoviedb.org/t/p/w1280/nLGBrpSSLogxEP7RmKvBbxPTmqJ.jpg'
  },
  {
    title: 'Portlandia',
    genre: 'Sketch Comedy, Satire',
    description: 'Hilarious sketch comedy show parodying the residents of Portlandia',
    link: 'https://www.netflix.com/title/70236284',
    image: 'https://www.themoviedb.org/t/p/w1280/pfaxCP6YqlFHCL3QytnTanwRTL5.jpg'
  },
  {
    title: 'Arrested Development',
    genre: 'Comedy, Sitcom',
    description: 'A comedy that doesn\'t take itself too seriously, probably packs the most jokes per minute than any other show out there',
    link: 'https://www.netflix.com/title/80149283',
    image: 'https://www.themoviedb.org/t/p/w1280/qMzwO952hMWQSCfHkp7IL20s4K7.jpg'
  },
  {
    title: 'Comedians In Cards Getting Coffee',
    genre: 'Comedyish?',
    description: 'Not the funniest show considering how many comedians are in it, but interesting conversations with interesting people. Fun short little episodes, and there is some comedy',
    link: 'https://www.netflix.com/title/80181577',
    image: 'https://www.themoviedb.org/t/p/w1280/hpK5MsFa7k7RQdClvRglBo0wAoT.jpg'
  },
  {
    title: 'Fargo',
    genre: 'Dark TV Comedy',
    description: 'I\'ve only seen seasons 1 & 2 but this is a quirky and interesting dark comedy crime drama',
    link: 'https://www.netflix.com/title/80171903',
    image: 'https://www.themoviedb.org/t/p/w1280/9ZIhl17uFlXCNUputSEDHwZYIEJ.jpg'
  },
  {
    title: 'American Vandal',
    genre: 'Comedy, Crime Mockumentary',
    description: 'Season 1 is great - it follows students documenting their investigation as they try to figure out if their classmate has been unjustly expelled. Hilarious and actually a mystery, follows slice of life highschool',
    link: 'https://www.netflix.com/title/80117545',
    image: 'https://www.themoviedb.org/t/p/w1280/pZH8L0gMjeHJMT29mTXWn7mEliR.jpg'
  },
];
