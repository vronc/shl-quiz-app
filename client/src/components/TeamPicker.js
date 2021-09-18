import React, { useState, useEffect } from "react";

import axios from "axios";
import { Button, Card, B, Loader } from "./styledComponents/Index";

const TeamPicker = ({ handleSelectTeam, selectedTeams }) => {
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
      <Card>
        <B>
          <h1>Pick some teams</h1>
          <h5 style={{ marginTop: 0 }}>
            All players from your selection of teams will be included in the
            quiz.
          </h5>
          {teams ? (
            <B style={{ flexWrap: "wrap", flexDirection: "row" }}>
              {teams.map((team, i) => (
                <Button
                  selected={selectedTeams.includes(team.team_code)}
                  onClick={() => handleSelectTeam(team.team_code)}
                  key={i}
                >
                  {team.team_code}
                </Button>
              ))}
            </B>
          ) : (
            <Loader size="2rem" />
          )}
        </B>
      </Card>
    </B>
  );
};

export default TeamPicker;
