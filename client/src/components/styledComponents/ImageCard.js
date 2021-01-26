import styled from "styled-components";

const ImageCard = styled.img`
  src: ${(p) => p.src};
  background-color: aqua;
  border-radius: 10px;
  box-shadow: 0 0 0 13px seashell;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 2rem;
`;

export { ImageCard };
