import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar";
import Search from "../Search";

const ReactQ = () => {
    const [displayQuestion, setDisplayQuestions] = useState([]);
  const [Questions, setQuestions] = useState([]);
  

  useEffect(() => {
    fetch("./reactQ.json")
      .then((res) => res.json())
      .then((data) => {
        setDisplayQuestions(data);
        setQuestions(data);
      });
  }, []);


 

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
      </Box>
      <Search
      Questions={Questions}
      displayQuestion={displayQuestion}
      setDisplayQuestions={setDisplayQuestions}
      />
    </>
  );
};

export default ReactQ;
