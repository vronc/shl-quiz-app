import { React } from "react";
import { B } from "./styledComponents/Index";
import {
  ProgressBarContainer,
  ProgressSegment,
  ProgressBarItem,
} from "./styledComponents/Index";

const ScoreKeeper = ({ results }) => {
  return (
    <B>
      <ProgressBarContainer>
        <ProgressSegment>
          {results.map((result, i) => (
            <ProgressBarItem key={i} state={result} />
          ))}
        </ProgressSegment>
      </ProgressBarContainer>
    </B>
  );
};

export default ScoreKeeper;
