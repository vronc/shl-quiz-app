import React from "react";
import { QUIZ_MODES } from "../utils/Constants";
import ExpandableButton from "./ExpandableButton";

import { Button, Card } from "./styledComponents/Index";

const QuizModePicker = ({ selectedQuizMode, setSelectedQuizMode }) => {
  return (
    <Card>
      {Object.keys(QUIZ_MODES).map((mode, i) =>
        mode === QUIZ_MODES.NAMES ? (
          <ExpandableButton
            selected={selectedQuizMode === QUIZ_MODES[mode]}
            onClick={() => setSelectedQuizMode(QUIZ_MODES[mode])}
            key={i}
            width={"10rem"}
          >
            {QUIZ_MODES[mode]}
          </ExpandableButton>
        ) : (
          <Button
            selected={selectedQuizMode === QUIZ_MODES[mode]}
            onClick={() => setSelectedQuizMode(QUIZ_MODES[mode])}
            key={i}
            width={"10rem"}
          >
            {QUIZ_MODES[mode]}
          </Button>
        )
      )}
    </Card>
  );
};

export default QuizModePicker;
