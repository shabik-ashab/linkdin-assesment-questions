import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Navbar'


const ReactQ = () => {
    const [Questions, setQuestions] = useState([]);
    const [displayQuestion, setDisplayQuestions] = useState([]);
    // setReactQuestion(reactQ);
    
    useEffect(() => {
        fetch('./reactQ.json')
            .then(res => res.json())
            .then(data => {
                setDisplayQuestions(data);
                setQuestions(data)
            });
    }, []);

    console.log(Questions);
    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = Questions.filter(product => product.q.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayQuestions(matchedProducts);
    }

  return (
    <>
    <Navbar />
    <Box sx={{mt:5,ml:10}}>
        <Typography variant="h4">
         React Question
        </Typography>
        <Typography>
        <Box sx={{ml:1}}>
        <a target="_blank" href="https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/master/react/reactjs-quiz.md">Visit Link for Answer</a>
        </Box>
        </Typography>
        <Box sx={{m:2}}>
        <TextField id="outlined-search" label="Search Questions" 
        onChange={handleSearch}
        type="search" />
        {/* <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Question" /> */}
        </Box>
        <Box sx={{mt:3}}>
            {
                displayQuestion.map((question) => (
                    <Box sx={{mb:3}}>
                     <Box sx={{m:1}} key={question.id}>
                        {question.q}
                    </Box >
                    {
                        question.codeImg &&
                        <Box sx={{maxHeight:'30vh',maxWidth:'70vh'}}>
                            <img src={ question.codeImg} alt="code image" />
                        </Box>
                    }
                    </Box>
                 
                ))
            }
        </Box>
   
    </Box>
   
    
    </>
  )
}

export default ReactQ