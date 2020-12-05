import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";
import { Button, Loader, Input, Card, B } from "./styledComponents/Index";

const Quiz = () => {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState(null);

  const fetchPlayers = () =>
    axios
      .get("/api/v1/get-players-by-team", { params: { team_code: "BIF" } })
      .then((res) => {
        const response = res.data.body;
        setPlayers(response);
      });

  useEffect(() => {
    fetchPlayers();
  }, []);

  useEffect(() => {
    const selectedPlayer = players[Math.floor(Math.random() * players.length)];
    if (players.length) setPlayer(selectedPlayer);
  }, [players]);

  return (
    <B className="Quiz">
      <h1>Players</h1>
      <Button>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button disabled>Disabled</Button>
      {player ? (
        <B>
          <PlayerCard
            playerImg={player.player_image_url}
            playerName={player.first_name}
            playerNumber={player.default_jersey}
          />
          <Card>
            <Input />
          </Card>
        </B>
      ) : (
        <Loader size="2rem" />
      )}
    </B>
  );
};

export default Quiz;
