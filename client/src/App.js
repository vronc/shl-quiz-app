import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";

const App = () => {
  const [players, setPlayers] = useState(null);
  const fetchPlayers = () =>
    axios
      .get("/api/v1/get-players-by-team", { params: { team_code: "BIF" } })
      .then((res) => {
        const response = res.data.body;
        setPlayers(response);
      });

  const connectToShl = () =>
    axios.get("/api/v1/connect-to-shl").then((res) => {
      //console.log(res);
    });

  useEffect(() => {
    connectToShl();
    fetchPlayers();
  }, []);
  return (
    <div className="App">
      <h1>Updated!</h1>
      {players && <h1>{players[0].first_name + " " + players[0].last_name}</h1>}
    </div>
  );
};

export default App;
