import React, { useState } from "react";
import useFetch from "./useFetch.js";
import AutoGrid from "./AutoGrid.js";
import { Container } from "@material-ui/core";

export default function App() {
  const [clue, setClue] = useState([]);
  const [answers, setAnswers] = useState([]);
  const { get } = useFetch("https://jservice.io/api/");
  // const clueLength = clue.length === 0;
  // console.log(clue.length);

  // useEffect(() => {
  //   getRandom();
  // }, [!clue]);
  
  // const saveClues = React.useCallback(() => {
  //   localStorage.setItem("clues", JSON.stringify(clues));
  // }, [clues]);

  function getRandom() {
    get("random")
      .then((data) => {
        setClue(data);
        if (answers.length > 0) {
          setAnswers([]);
        } 
      })
      .catch((err) => console.log(err));
  }

  function handleNewQuestionClick() {
    getRandom();
  }

  function handleAnswerClick() {
    setAnswers(clue);
  }

  return (
    <Container>
      <AutoGrid
        clue={clue}
        answers={answers}
        onNewQuestionClick={handleNewQuestionClick}
        onAnswerClick={handleAnswerClick}
      />
    </Container>
  );
}
