import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Navbar'


const reactQ = [
    {
        id: 1,
        q: "Q1. If you want to import just the Component from the React library, what syntax do you use?"
    },
    {
        id: 2,
        q: "Q2. If a function component should always render the same way given the same props, what is a simple performance optimization available for it?"
    },
    {
        id: 3,
        q: "Q3. How do you fix the syntax error that results from running this code?"
    },
    {
        id: 4,
        q: "Q4. If you see the following import in a file, what is being used for state management in the component?"
    },
    {
        id: 5,
        q: "Q5. Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?"
    },
]

const ReactQ = () => {
    const [products, setProducts] = useState([]);
    const [displayQuestion, setDisplayProducts] = useState([]);
    // setReactQuestion(reactQ);
    
    useEffect(() => {
        fetch('./reactQ.json')
            .then(res => res.json())
            .then(data => {
                setReactQuestion(data)
                setProducts(data)
            });
    }, []);
    console.log(reactQuestions);


    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

  return (
    <>
    <Navbar />
    <Box sx={{mt:5,ml:10}}>
        <Typography variant="h4">
         React Question
        </Typography>
        <Box sx={{m:2}}>
        <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
        </Box>
        <Box sx={{mt:3}}>
            {
                displayQuestion.map((question) => (
                    <Box sx={{m:1}} key={question.id}>
                        {question.q}
                    </Box>
                ))
            }
        </Box>
   
    </Box>
   
    
    </>
  )
}

export default ReactQ