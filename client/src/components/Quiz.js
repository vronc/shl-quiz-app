import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";
import { Loader, Input, Card, B } from "./styledComponents/Index";
import { shuffle } from "../utils/Shuffle";
import ScoreKeeper from "./ScoreKeeper";
import placeholder_player_image from "../assets/placeholder_player.png";
//import mock from "../mock.json";

const Quiz = ({ teams, endQuiz }) => {
  const [players, setPlayers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const checkAnswer = () => {
    const currentScore = score;
    if (
      answer.replace(/^0+/, "") ===
      players[questionIndex].default_jersey.toString()
    ) {
      results[questionIndex] = 1;
      setScore(currentScore + 1);
    } else {
      results[questionIndex] = 0;
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
    if (players.length <= questionIndex + 1) endQuiz(results);
    else setQuestionIndex(questionIndex + 1);
  };
  useEffect(() => {
    const fetchPlayers = () => {
      teams.map((teamCode) =>
        axios
          .get("/api/v1/get-players-by-team", {
            params: { team_code: teamCode.trim() },
          })
          .then((res) => {
            if (res.data.body) {
              const shuffledResponse = shuffle(res.data.body);
              setPlayers(shuffledResponse);
            } else {
              throw new Error("There was a problem fetching players.");
            }
          })
      );
    };
    //setPlayers(mock);
    fetchPlayers();
  }, [teams]);

  useEffect(() => {
    setResults(Array(players.length).fill(2));
  }, [players]);

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <B className="Quiz">
      {players.length ? (
        <B>
          <PlayerCard
            playerImg={
              players[questionIndex].player_image_url
                ? players[questionIndex].player_image_url
                : placeholder_player_image
            }
            playerName={{
              first: players[questionIndex].first_name,
              last: players[questionIndex].last_name,
            }}
            playerNumber={players[questionIndex].default_jersey}
          />
          <Card>
            <ScoreKeeper results={results} />
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
