import styled, { keyframes } from "styled-components";
import { COLORS } from "../../utils/Constants";

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
  padding: 1rem;
  margin: 2rem;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  //border-top: calc(${(p) => p.size}% - 22) solid blue;
  border-top: 2px solid ${COLORS.IDLE};
  border-right: 2px solid ${COLORS.ATTENTION};
  border-bottom: 2px solid ${COLORS.IDLE};
  border-left: 4px solid ${COLORS.DISABLED};
  background: transparent;
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  border-radius: 50%;
`;

export { Loader };
