import React from "react";
import { QUIZ_MODES } from "../utils/Constants";

import { B, Button, Card } from "./styledComponents/Index";

const QuizModePicker = ({ selectedQuizMode, setSelectedQuizMode }) => {
  return (
    <Card>
      <B style={{ flexDirection: "column" }}>
        <h1>Pick game mode</h1>
        <h5 style={{ marginTop: 0 }}>
          Guess the numbers or names of the players.
        </h5>
        <B style={{ flexDirection: "row" }}>
          {Object.keys(QUIZ_MODES).map((mode, i) => (
            <Button
              selected={selectedQuizMode === QUIZ_MODES[mode]}
              onClick={() => setSelectedQuizMode(QUIZ_MODES[mode])}
              key={i}
            >
              {QUIZ_MODES[mode]}
            </Button>
          ))}
        </B>
      </B>
    </Card>
  );
};

export default QuizModePicker;
