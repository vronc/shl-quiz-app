import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";
import { Loader, Input, Card, B, Button } from "./styledComponents/Index";
import { shuffle } from "../utils/Shuffle";
import { hammingDistance } from "../utils/HammingDistance";
import ScoreKeeper from "./ScoreKeeper";
import {
  COLORS,
  INPUT_PLACEHOLDER_BY_MODE,
  POSITION_ABBREVIATIONS,
  QUIZ_MODES,
} from "../utils/Constants";
//import mock from "../mock.json";

const Quiz = ({ teams, endQuiz, quizMode }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const checkAnswer = () => {
    if (
      (quizMode === QUIZ_MODES.NUMBERS &&
        answer.replace(/^0+/, "") ===
          questions[currentQuestionIndex].default_jersey.toString()) ||
      (quizMode === QUIZ_MODES.NAMES &&
        hammingDistance(answer, questions[currentQuestionIndex].last_name) <
          3) ||
      (quizMode === QUIZ_MODES.POSITIONS &&
        hammingDistance(answer, questions[currentQuestionIndex].position) <
          3) ||
      answer.toUpperCase() ===
        POSITION_ABBREVIATIONS[questions[currentQuestionIndex].position]
    ) {
      questions[currentQuestionIndex].score = 1;
    } else {
      questions[currentQuestionIndex].score = 0;
    }
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      checkAnswer();
      setAnswer("");
      handleNextQuestion();
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      return Promise.all(
        teams.map((teamCode) =>
          axios.get("/api/v1/get-players-by-team", {
            params: { team_code: teamCode.trim() },
          })
        )
      );
    };
    fetchPlayers().then((playersByTeam) => {
      playersByTeam.map((team) =>
        setQuestions((qs) =>
          shuffle([
            ...qs,
            ...team.data.body
              .map((p) => ({
                ...p,
                score: 2,
                team: team.config.params.team_code,
                position: p.position.split(" ")[3],
              }))
              .filter((p) => p.default_jersey),
          ])
        )
      );
    });
    //setQuestions(mock);
  }, [teams]);

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };
  return (
    <B className="Quiz">
      {questions.length ? (
        <B>
          <Card>
            <ScoreKeeper questions={questions} />
          </Card>
          {currentQuestionIndex < questions.length ? (
            <B>
              <PlayerCard
                playerImg={
                  questions[currentQuestionIndex].player_image_url &&
                  questions[currentQuestionIndex].player_image_url
                }
                playerName={{
                  first: questions[currentQuestionIndex].first_name,
                  last: questions[currentQuestionIndex].last_name,
                }}
                playerNumber={questions[currentQuestionIndex].default_jersey}
                playerPosition={questions[currentQuestionIndex].position}
                showPlayerNumber={quizMode !== QUIZ_MODES.NUMBERS}
                showPlayerName={quizMode !== QUIZ_MODES.NAMES}
                showPlayerPosition={quizMode !== QUIZ_MODES.POSITIONS}
                team={questions[currentQuestionIndex].team}
              />
              <Card flexWrap="nowrap">
                <form onSubmit={handleSubmit}>
                  <Input
                    onChange={handleInputChange}
                    pattern="[\p{L}A-Za-z0-9]{1,50}"
                    required
                    value={answer}
                    placeholder={INPUT_PLACEHOLDER_BY_MODE[quizMode]}
                  />
                </form>
              </Card>
            </B>
          ) : (
            <Card minHeight="30rem">
              <Button width="auto" onClick={() => endQuiz(questions)}>
                Show results
              </Button>
            </Card>
          )}
        </B>
      ) : (
        <B style={{ color: COLORS.IDLE }}>
          <Loader size="2rem" />
          <h3 style={{ color: COLORS.IDLE }}>Preparing your quiz...</h3>
        </B>
      )}
    </B>
  );
};

export default Quiz;
