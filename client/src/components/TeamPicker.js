import React, { useState, useEffect } from "react";

import axios from "axios";

const TeamPicker = () => {
  const [teams, setTeams] = useState(null);

  const fetchteams = () =>
    axios.get("/api/v1/get-teams").then((res) => {
      const response = res.data.body;

      setTeams(response);
    });

  useEffect(() => {
    fetchteams();
  }, []);
  return (
    <div className="TeamPicker">
      <h1>TeamPicker</h1>
      {teams && <h1>{teams[0].team_code}</h1>}
    </div>
  );
};

export default TeamPicker;
