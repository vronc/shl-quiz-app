import React, { useEffect, useState } from "react";
import axios from "axios";
import TeamPicker from "./components/TeamPicker";
import Quiz from "./components/Quiz";
import { createGlobalStyle } from "styled-components";
import { B, Button } from "./components/styledComponents/Index";
import { QUIZ_STATES } from "./utils/Constants";
import { Card } from "./components/styledComponents/Index";

const GlobalStyle = createGlobalStyle`
body{
  background: silver;
  min-height: 100vh;
  margin: 0;
  color: black;
  font-family: 'Trebuchet MS'
}
`;

const App = () => {
  const connectToShl = () => axios.get("/api/v1/connect-to-shl");

  const [selectedTeams, setSelectedTeams] = useState([]); // DEBUG change to empty array
  const [quizState, setQuizState] = useState(QUIZ_STATES.PICK_TEAMS); // DEBUG change to PICK_TEAMS
  const [result, setResult] = useState("");

  useEffect(() => {
    connectToShl();
  }, []);

  const endQuiz = (res) => {
    setResult(res);
    setQuizState(QUIZ_STATES.QUIZ_RESULT);
  };

  const handleSelectTeam = (team) => {
    const newSelectedTeams = selectedTeams.filter((t) => t !== team);
    setSelectedTeams(
      newSelectedTeams.length === selectedTeams.length
        ? [...newSelectedTeams, team]
        : newSelectedTeams
    );
  };

  const handleQuizStart = () => {
    setQuizState(QUIZ_STATES.QUIZ_ONGOING);
  };

  return (
    <B style={{ class: "row" }}>
      <GlobalStyle />
      {quizState === QUIZ_STATES.PICK_TEAMS && (
        <B>
          <TeamPicker
            handleSelectTeam={handleSelectTeam}
            selectedTeams={selectedTeams}
          ></TeamPicker>
          <Button
            disabled={selectedTeams.length === 0}
            onClick={() => handleQuizStart()}
          >
            Start
          </Button>
        </B>
      )}
      {quizState === QUIZ_STATES.QUIZ_ONGOING && (
        <Quiz
          teams={selectedTeams}
          endQuiz={endQuiz}
          setResult={setResult}
        ></Quiz>
      )}
      {quizState === QUIZ_STATES.QUIZ_RESULT && (
        <Card>Total Score: {result} 🎉</Card>
      )}
    </B>
  );
};

export default App;
