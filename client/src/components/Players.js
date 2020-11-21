import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./styledComponents/Button";
import PlayerCard from "./styledComponents/PlayerCard";
import Loader from "./Loader";

const Players = () => {
  const [players, setPlayers] = useState(null);

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

  return (
    <div className="Players">
      <div>
        <Button text="butt" />
      </div>
      <Loader color="pink" size="50px" />
      <h1>Players</h1>
      {players ? (
        <div>
          <PlayerCard
            playerImg={players[0].player_image_url}
            playerName={players[0].first_name}
          ></PlayerCard>
        </div>
      ) : (
        <Loader color="green" size="10px" />
      )}
    </div>
  );
};

export default Players;
