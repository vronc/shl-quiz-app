import styled from "styled-components";

const B = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(p) => p.flexDirection || "column"};
  width: 100%;
`;

export { B };
