import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function HighestPerformer() {
  return (
    <>
      <Title>Highest Performer</Title>
      <Typography component="p" variant="h4">
        15 
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        by Matt
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View User
        </Link>
      </div>
    </>
  );
}