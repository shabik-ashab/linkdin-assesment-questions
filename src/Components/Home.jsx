import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
       <Container>
          <Box sx={{mt:5,ml:10}}>
          <Typography variant="h4" >
          Home
               </Typography>
           
            <Link to="/react">
            React
            </Link>
          </Box>
       </Container>
    </>
  )
}

export default Home