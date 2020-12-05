import styled from "styled-components";

const Card = styled.div`
  min-width: 50%;
  max-width: 100%;
  background-color: lightcoral;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(p) => (p.flexDirection ? p.flexDirection : "row")};
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 1rem;
`;

export { Card };
