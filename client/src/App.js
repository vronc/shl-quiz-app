import React, { useEffect, useState } from "react";
import axios from "axios";
import TeamPicker from "./components/TeamPicker";
import Quiz from "./components/Quiz";
import { createGlobalStyle } from "styled-components";
import { B, Button } from "./components/styledComponents/Index";
import { QUIZ_STATES } from "./utils/Constants";
import { Card } from "./components/styledComponents/Index";
import { COLORS } from "./utils/Constants";

const GlobalStyle = createGlobalStyle`
body{
  background: seashell;
  min-height: 100vh;
  margin: 0;
  color: ${COLORS.BLUE};
  font-family: 'Trebuchet MS';
  background-color: ${COLORS.GREEN};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23007d8e' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23006688' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23004f7e' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%2300376d' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%231c1d55' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
`;

const App = () => {
  const connectToShl = () => axios.get("/api/v1/connect-to-shl");

  const [selectedTeams, setSelectedTeams] = useState([]); // DEBUG change to empty array
  const [quizState, setQuizState] = useState(QUIZ_STATES.PICK_TEAMS); // DEBUG change to PICK_TEAMS
  const [results, setResults] = useState([]);

  useEffect(() => {
    connectToShl();
  }, []);

  const endQuiz = (res) => {
    setResults(res);
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

  const handleRestartQuiz = () => {
    setSelectedTeams([]);
    setResults([]);
    setQuizState(QUIZ_STATES.PICK_TEAMS);
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
        <Quiz teams={selectedTeams} endQuiz={endQuiz}></Quiz>
      )}
      {quizState === QUIZ_STATES.QUIZ_RESULT && (
        <Card style={{ height: "30em" }}>
          <h1>
            Total Score:{" "}
            {results.filter(function (value) {
              return value === 1;
            }).length +
              " / " +
              results.length}{" "}
            🎉
          </h1>
          <B>
            <Button onClick={() => handleRestartQuiz()}>Re-Quiz</Button>
          </B>
        </Card>
      )}
    </B>
  );
};

export default App;
