import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import * as cheerio from 'cheerio';
import {useDate} from './date_context';

function useWord(day=null) {
  const date = useDate();
  const [word, setWord] = useState({
    word: '',
    secondary: '',
    description: '',
    link: '',
  });

  useEffect(async () => {
    const url = 'https://www.merriam-webster.com/word-of-the-day/' + date;
    const result = await axios(
      url,
    );

    const $ = cheerio.load(result.data);
    const word = $('body > div.outer-container > div > div.main-wrapper.clearfix > main > article > div.article-header-container.wod-article-header > div.quick-def-box > div.word-header > div > h1').text()
    const secondary = $('body > div.outer-container > div > div.main-wrapper.clearfix > main > article > div.article-header-container.wod-article-header > div.quick-def-box > div.word-attributes').text();
    const description = $('body > div.outer-container > div > div.main-wrapper.clearfix > main > article > div.lr-cols-area.clearfix.sticky-column > div.left-content > div > div.wod-definition-container > p').eq(0).text();

    setWord(() => {
      return {
        word: word,
        secondary: secondary,
        description: description,
        link: url,
      };
    });
  }, []);

  return word;
}

export default function WordOfTheDay() {
  const {word, secondary, description, link} = useWord();
  return <WordCard word={word} secondary={secondary} description={description} link={link} />
}

function WordCard({word, secondary, description, link}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {word}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {secondary}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={link} underline="none">
          <Typography>Learn More</Typography>
        </Link>
      </CardActions>
    </Card>
  );
}