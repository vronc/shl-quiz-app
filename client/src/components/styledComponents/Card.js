import styled from "styled-components";

const Card = styled.div`
  width: 90%;
  background-color: lightseagreen;
  border-radius: 10px;
  display: flex;
  flex-wrap: ${(p) => (p.flexWrap ? p.flexWrap : "wrap")};
  flex-direction: ${(p) => (p.flexDirection ? p.flexDirection : "row")};
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 1rem;
`;

export { Card };
