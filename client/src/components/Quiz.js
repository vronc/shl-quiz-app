import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";
import { Loader, Input, Card, B } from "./styledComponents/Index";
import { shuffle } from "../utils/Shuffle";
import ScoreKeeper from "./ScoreKeeper";
//import mock from "../mock.json";

const Quiz = ({ teams, endQuiz }) => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const checkAnswer = () => {
    const currentScore = score;
    if (
      answer.replace(/^0+/, "") ===
      questions[questionIndex].default_jersey.toString()
    ) {
      questions[questionIndex].score = 1;
      setScore(currentScore + 1);
    } else {
      questions[questionIndex].score = 0;
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
    if (questions.length <= questionIndex + 1) endQuiz(questions);
    else setQuestionIndex(questionIndex + 1);
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
            ...team.data.body.map((p) => ({
              ...p,
              score: 2,
              team: team.config.params.team_code,
            })),
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
          <PlayerCard
            playerImg={
              questions[questionIndex].player_image_url &&
              questions[questionIndex].player_image_url
            }
            playerName={{
              first: questions[questionIndex].first_name,
              last: questions[questionIndex].last_name,
            }}
            playerNumber={questions[questionIndex].default_jersey}
            showPlayerNumber={false}
            team={questions[questionIndex].team}
          />

          <Card>
            <ScoreKeeper questions={questions} />
          </Card>
          <Card flexWrap="nowrap">
            Player number:
            <form onSubmit={handleSubmit}>
              <Input
                onChange={handleInputChange}
                pattern="[A-Za-z0-9]{1,50}"
                required
                value={answer}
              />
            </form>
          </Card>
        </B>
      ) : (
        <B>
          <Loader size="2rem" />
          Preparing your quiz...
        </B>
      )}
    </B>
  );
};

export default Quiz;
