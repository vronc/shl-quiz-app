import { React } from "react";
import { B } from "./styledComponents/Index";
import {
  ProgressBarContainer,
  ProgressSegment,
  ProgressBarItem,
} from "./styledComponents/Index";

const ScoreKeeper = ({ questions }) => {
  return (
    <B>
      <ProgressBarContainer>
        <ProgressSegment>
          {questions.map((q, i) => (
            <ProgressBarItem key={i} state={q.score} />
          ))}
        </ProgressSegment>
      </ProgressBarContainer>
    </B>
  );
};

export default ScoreKeeper;
