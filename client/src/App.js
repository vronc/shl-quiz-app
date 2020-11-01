import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [players, setPlayers] = useState("");
  const fetchPlayers = () =>
    axios.get("/api/v1/get-players").then((res) => {
      const response = res.data;
      setPlayers(response);
    });

  const connectToShl = () =>
    axios.get("/api/v1/connect-to-shl").then((res) => {
      console.log(res);
    });

  useEffect(() => {
    connectToShl();
    fetchPlayers();
  }, []);
  return (
    <div className="App">
      <h1>Updated!</h1>
      <h1>{players.body}</h1>
    </div>
  );
};

export default App;
