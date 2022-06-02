import * as React from 'react'; 
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

function CreateButton({ name, route, callback }) {

  return (
    <Box sx={{p: 2}}>
      <Link to={route} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button variant="contained" onClick={ () => callback() }> {name} </Button>
      </Link>
    </Box>
  )
}

export default CreateButton
