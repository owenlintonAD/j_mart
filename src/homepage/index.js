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
import CurrentTime from '../content/current_time';
import Masonry from 'react-masonry-css'

export default function HomePage() {
  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      <PictureOfTheDay />
      <PictureOfTheDay />
      <SongRecommendation />

      <NetflixRecommendation />
      <WordOfTheDay />
      <CurrentTime />

      <PictureOfTheDay />
      <PictureOfTheDay />
      <PictureOfTheDay />

      <PictureOfTheDay />
      <PictureOfTheDay />
      <PictureOfTheDay />
    </Masonry>
  )
}
