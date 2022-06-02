import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Tickets from '../Components/Tickets'
import CreateButton from '../Components/CreateButton'

const mdTheme = createTheme();

function TicketsView() {  

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CssBaseline />
        <CreateButton name="+ Create ticket" route="/create-ticket"/>
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Tickets />
            </Paper>
          </Grid>
        </Container>        
      </Box>
    </ThemeProvider>
  );
}

export default TicketsView