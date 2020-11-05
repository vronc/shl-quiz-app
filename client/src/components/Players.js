import React, { useState, useEffect } from "react";

import axios from "axios";

const Players = () => {
  const [players, setPlayers] = useState(null);

  const fetchPlayers = () =>
    axios
      .get("/api/v1/get-players-by-team", { params: { team_code: "BIF" } })
      .then((res) => {
        const response = res.data.body;
        console.log(response);
        setPlayers(response);
      });

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div className="Players">
      <h1>Players</h1>
      {players && (
        <div>
          {players.map(function (player, idx) {
            return (
              <li key={idx}>
                <img src={player.player_image_url} />
                <h1>{player.first_name + " " + player.last_name}</h1>
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Players;
