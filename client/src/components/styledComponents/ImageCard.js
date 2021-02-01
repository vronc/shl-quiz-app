import styled from "styled-components";

const ImageCard = styled.img`
  src: ${(p) => p.src};
  background-color: "#DB5461";
  border-radius: 10px;
  box-shadow: 0 0 0 13px #1c1d55;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 2rem;
`;

export { ImageCard };
