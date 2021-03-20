import React from "react";
import { QUIZ_MODES } from "../utils/Constants";

import { Button, Card } from "./styledComponents/Index";

const QuizModePicker = ({ selectedQuizMode, setSelectedQuizMode }) => {
  return (
    <Card>
      {Object.keys(QUIZ_MODES).map((mode, i) => (
        <Button
          selected={selectedQuizMode === QUIZ_MODES[mode]}
          onClick={() => setSelectedQuizMode(QUIZ_MODES[mode])}
          key={i}
        >
          {QUIZ_MODES[mode]}
        </Button>
      ))}
    </Card>
  );
};

export default QuizModePicker;
