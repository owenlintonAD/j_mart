import { Grid } from '@mui/material';

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import NetflixRecommendation from '../content/netflix_recommendation';
import PictureOfTheDay from '../content/picture_of_the_day';
import WordOfTheDay from '../content/word_of_the_day';
import SongRecommendation from '../content/song_recommendation';

export default function HomePage() {
  return (
    <Grid container direction='row' spacing={2}>
      <GridCard><NetflixRecommendation /></GridCard>
      <GridCard><WordOfTheDay /></GridCard>
      <GridCard><SongRecommendation /></GridCard>
      <GridCard><PictureOfTheDay /></GridCard>
    </Grid>
  )
}

function GridCard({children}) {
  return (
    <Grid item xs={6} md={4} lg={3}>
      {children}
    </Grid>
  );
}
