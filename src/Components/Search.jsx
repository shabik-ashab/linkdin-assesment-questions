import { Box } from '@mui/system';
import { Checkbox, TextField, Typography } from "@mui/material";
import React, { useState } from 'react'

const Search = ({Questions,setDisplayQuestions,displayQuestion}) => {
    
  // setReactQuestion(reactQ);
  

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
    const handleSearch = (event) => {
        const searchText = event.target.value;
    
        const matchedProducts = Questions.filter((product) =>
          product.q.toLowerCase().includes(searchText.toLowerCase())
        );
    
        setDisplayQuestions(matchedProducts);
      };
  return (
    <Box sx={{ml:10}}>
        {/* search */}
        <Box sx={{ mt: 2 }}>
          <TextField
            id="outlined-search"
            label="Search Questions"
            onChange={handleSearch}
            type="search"
            sx={{
              width: "50%",
            }}
          />
          {/* <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Question" /> */}
        </Box >

        <Box sx={{ mt: 3, }}>
          {displayQuestion.map((question) => (
            <Box sx={{ mb: 2,border:'1px solid black',mr:10 }}>
              <Box sx={{ m: 1 }} key={question.id}>
                <Typography sx={{ fontSize: "1.1em" }}>{question.q}</Typography>
              </Box>
              {question.codeImg && (
                <Box sx={{ maxHeight: "30vh", maxWidth: "70vh" }}>
                  <img src={question.codeImg} alt="code image" />
                </Box>
              )}
              {/* answer for question */}
               <Box>
                    {question.ansImg? 
                <Box sx={{ maxHeight: "30vh", maxWidth: "70vh" }}>
                  <img src={question.ansImg} alt="code image" />
                </Box>
                :
                <>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  {question.ans}
                </>
                  }
            </Box>
            </Box>

           
          ))}
        </Box>
    </Box>
  )
}

export default Search