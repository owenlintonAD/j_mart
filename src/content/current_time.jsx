import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Clock from 'react-live-clock';

export default function CurrentTime() {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <Clock
            ticking={true}
            format={'dddd, MMMM Mo, YYYY, h:mm:ss A'}
            timezone={Intl.DateTimeFormat().resolvedOptions().timeZone} />
        </Typography>
      </CardContent>
    </Card>
  );
}