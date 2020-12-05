import React, { useEffect, useState } from "react";
import axios from "axios";
import TeamPicker from "./components/TeamPicker";
import Quiz from "./components/Players";
import { createGlobalStyle } from "styled-components";
import { B, Button } from "./components/styledComponents/Index";

const GlobalStyle = createGlobalStyle`
body{
  background: darkgray;
  min-height: 100vh;
  margin: 0;
  color: black;
  font-family: 'Kaushan Script'
}
`;

const QUIZ_STATES = {
  PICK_TEAMS: "pick teams",
  QUIZ_ONGOING: "quiz ongoing",
  QUIZ_RESULT: "quiz result",
};

const App = () => {
  const connectToShl = () => axios.get("/api/v1/connect-to-shl");

  const [selectedTeams, setSelectedTeams] = useState([]);
  const [quizState, setQuizState] = useState(QUIZ_STATES.PICK_TEAMS);

  useEffect(() => {
    connectToShl();
  }, []);

  const handleSelectTeam = (team) => {
    console.log(selectedTeams);
    setSelectedTeams([...selectedTeams, team]);
  };

  const handleQuizStart = () => {
    setQuizState(QUIZ_STATES.QUIZ_ONGOING);
    console.log("Start");
  };

  return (
    <B style={{ class: "row" }}>
      <GlobalStyle />
      {quizState === QUIZ_STATES.PICK_TEAMS && (
        <B>
          <TeamPicker handleSelectTeam={handleSelectTeam}></TeamPicker>
          <Button
            disabled={selectedTeams.length === 0}
            onClick={() => handleQuizStart()}
          >
            Start
          </Button>
        </B>
      )}
      {quizState === QUIZ_STATES.QUIZ_ONGOING && <Quiz></Quiz>}
    </B>
  );
};

export default App;
