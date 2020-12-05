import React, { useState, useEffect } from "react";

import axios from "axios";
import { Button, Card, B } from "./styledComponents/Index";

const TeamPicker = ({ handleSelectTeam }) => {
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
    <B>
      <Card flexDirection="column">
        <h1>Pick some teams!</h1>
        <p>All palyers from the picked teams will be included in the quiz.</p>
        <Card>
          {teams &&
            teams.map((team, i) => (
              <Button onClick={() => handleSelectTeam(team.team_code)} key={i}>
                {team.team_code}
              </Button>
            ))}
        </Card>
      </Card>
    </B>
  );
};

export default TeamPicker;
