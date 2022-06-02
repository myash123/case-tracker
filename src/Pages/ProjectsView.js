import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import CreateButton from '../Components/CreateButton'

const mdTheme = createTheme();

function ProjectsView() {

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <CreateButton name="+ Create Project" route="/create-project"/>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            Projects
        </Container>        
      </Box>
    </ThemeProvider>
  );
}

export default ProjectsView