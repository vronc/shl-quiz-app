import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Taken from https://gist.github.com/adrianmcli/9fac3ff3c144c2805be90381eaa8d3d4
const Loader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  //border-top: calc(${(p) => p.size}% - 22) solid blue;
  border-top: 2px solid darkcyan;
  border-right: 2px solid grey;
  border-bottom: 2px solid darkcyan;
  border-left: 4px solid cyan;
  background: transparent;
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  border-radius: 50%;
`;

export { Loader };
