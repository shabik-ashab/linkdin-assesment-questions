import { Checkbox, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar";

const ReactQ = () => {
  const [Questions, setQuestions] = useState([]);
  const [displayQuestion, setDisplayQuestions] = useState([]);
  // setReactQuestion(reactQ);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    fetch("./reactQ.json")
      .then((res) => res.json())
      .then((data) => {
        setDisplayQuestions(data);
        setQuestions(data);
      });
  }, []);

  console.log(Questions);
  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedProducts = Questions.filter((product) =>
      product.q.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayQuestions(matchedProducts);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ mt: 5, ml: 10 }}>
        <Typography variant="h4">React Question</Typography>
        <Typography>
          <Box sx={{}}>
            <a
              target="_blank"
              href="https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/master/react/reactjs-quiz.md"
            >
              Refference
            </a>
          </Box>
        </Typography>
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
        </Box>
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
    </>
  );
};

export default ReactQ;
