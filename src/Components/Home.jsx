import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
       <Container>
          <Box sx={{mt:5,ml:10}}>
          <Typography variant="h3" sx={{mb:5}} >
            Linkdin Skill Assesment Test and answers
               </Typography>
               <Typography variant="h4" sx={{mb:1}}>
                   Topics
               </Typography>

               <Box sx={{mb:2}}>
            <a
              target="_blank"
              href="https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes"
            >
              Refference
            </a>
          </Box>

               <Box sx={{fontSize:'1.4em'}}>
               <Link to="/react">
                   React
                </Link>
               </Box>
           
            
          </Box>
       </Container>
    </>
  )
}

export default Home