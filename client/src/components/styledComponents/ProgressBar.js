import styled from "styled-components";
import { COLORS } from "../../utils/Constants";

const ITEM_STATES = {
  0: COLORS.INCORRECT,
  1: COLORS.CORRECT,
  2: "lightgray",
};

const ProgressBarContainer = styled.div`
  width: 95%;
`;

const ProgressSegment = styled.div`
  display: flex;
  height: 10px;
`;

const ProgressBarItem = styled.div`
  flex: 100%;
  background-color: ${(p) => ITEM_STATES[p.state]};
  margin: 2px;
  height: 8px;

  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

export { ProgressBarContainer, ProgressSegment, ProgressBarItem };
