import styled from "styled-components";

const progressSegment = styled.div`
  display: flex;
  margin-bottom: 4em;
`;

const ProgressBar = styled.div`
  .container {
    max-width: 60em;
    margin: 0 auto;
  }

  .item {
    width: 100%;
    background-color: lightgray;
    margin-right: 2px;
    height: 8px;

    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
`;
export { ProgressBar };
