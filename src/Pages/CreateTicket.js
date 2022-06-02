import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import CreateButton from '../Components/CreateButton'

const mdTheme = createTheme();

function CreateTicket() {
  
  const [subject, setSubject] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [project, setProject] = React.useState('')
  const [priority, setPriority] = React.useState('')
  const [assignee, setAssignee] = React.useState('')

  const handleSubjectChange = (SelectChangeEvent) => {
    setSubject(SelectChangeEvent.target.value)
  }

  const handleDescriptionChange = (SelectChangeEvent) => {
    setSubject(SelectChangeEvent.target.value)
  }

  const handleProjectChange = (SelectChangeEvent) => {
    setProject(SelectChangeEvent.target.value)
  }

  const handlePriorityChange = (SelectChangeEvent) => {
    setPriority(SelectChangeEvent.target.value)
  }
  
  const handleAssigneeChange = (SelectChangeEvent) => {
    setAssignee(SelectChangeEvent.target.value)
  }

  const submitTicket = () => {alert('created ticket')}

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            Create a ticket
          <Grid item xs={12}>
            <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
              <FormControl sx={{p:2}}>
                <InputLabel>Subject</InputLabel>
                <Input value={subject} onChange={handleSubjectChange}/>
              </FormControl>
              <FormControl sx={{p:2}}>
                <InputLabel>Description</InputLabel>
                <Input value={description} onChange={handleDescriptionChange}/>
              </FormControl>
              <FormControl sx={{mt:2, ml: 1, maxWidth: 300}}>
                <InputLabel>Assignee</InputLabel>
                <Select
                  value={assignee}
                  label="Assignee"
                  onChange={handleAssigneeChange}
                >
                  <MenuItem value={1}>Matt Smith</MenuItem>
                  <MenuItem value={2}>Jane Notsmith</MenuItem>
                  <MenuItem value={3}>Tim Something</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{mt:2, ml: 1, maxWidth: 300}}>
                <InputLabel>Project</InputLabel>
                <Select
                  value={project}
                  label="Project"
                  onChange={handleProjectChange}
                >
                  <MenuItem value={1}>Project 1</MenuItem>
                  <MenuItem value={2}>Project 2</MenuItem>
                  <MenuItem value={3}>Project 3</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{mt:2, ml: 1, maxWidth: 300}}>
                <InputLabel>Priority</InputLabel>
                <Select
                  value={priority}
                  label="Priority"
                  onChange={handlePriorityChange}
                >
                  <MenuItem value={1}>P1</MenuItem>
                  <MenuItem value={2}>P2</MenuItem>
                  <MenuItem value={3}>P3</MenuItem>
                </Select>
              </FormControl>
            </Paper>
            <CreateButton name="+ Create ticket" route="" callback={submitTicket} /> 
          </Grid> 
        </Container>       
      </Box>
    </ThemeProvider>
  );
}

export default CreateTicket