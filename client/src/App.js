import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import TeamPicker from "./components/TeamPicker";
import Players from "./components/Players";

const App = () => {
  const connectToShl = () => axios.get("/api/v1/connect-to-shl");

  useEffect(() => {
    connectToShl();
  }, []);

  return (
    <div>
      <TeamPicker></TeamPicker>
      <Players></Players>
    </div>
  );
};

export default App;
