import styled from "styled-components";

const ITEM_STATES = {
  0: "salmon",
  1: "palegreen",
  2: "lightgray",
};

const ProgressBarContainer = styled.div`
  width: 95%;
  margin: 1rem;
`;

const ProgressSegment = styled.div`
  display: flex;
  margin-bottom: 1rem;
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
