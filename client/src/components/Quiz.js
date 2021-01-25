import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";
import { Loader, Input, Card, B } from "./styledComponents/Index";
import { shuffle } from "../utils/Shuffle";
import ScoreKeeper from "./ScoreKeeper";

const Quiz = ({ teams }) => {
  const [players, setPlayers] = useState([]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const checkAnswer = () => {
    const currentScore = score;
    if (answer == players[playerIndex].default_jersey) {
      setScore(currentScore + 1);
    }
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      checkAnswer();
      handleNextQuestion();
    }
  };

  const handleNextQuestion = () => {
    setPlayerIndex(playerIndex + 1);
  };
  useEffect(() => {
    const fetchPlayers = () => {
      teams.map((teamCode) =>
        axios
          .get("/api/v1/get-players-by-team", {
            params: { team_code: teamCode.trim() },
          })
          .then((res) => {
            let response = res.data.body;
            const shuffledResponse = shuffle(response);
            setPlayers(shuffledResponse);
          })
      );
    };

    fetchPlayers();
  }, [teams]);

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <B className="Quiz">
      {players.length ? (
        <B>
          <PlayerCard
            playerImg={players[playerIndex].player_image_url}
            playerName={{
              first: players[playerIndex].first_name,
              last: players[playerIndex].last_name,
            }}
            playerNumber={players[playerIndex].default_jersey}
          />
          <Card>
            <ScoreKeeper score={score} />
          </Card>
          <Card flexWrap="nowrap">
            Player number:
            <form onSubmit={handleSubmit}>
              <Input onChange={handleInputChange} value={answer} />
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
