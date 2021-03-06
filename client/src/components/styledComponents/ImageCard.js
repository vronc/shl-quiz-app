import styled from "styled-components";
import { COLORS } from "../../utils/Constants";

const ImageCard = styled.img`
  src: ${(p) => p.src};
  background-color: ${(p) => p.color || COLORS.PRIMARY};
  border-radius: 10px;
  box-shadow: 0px -12px 0px 0px,
    0px 12px 0px 0px ${(p) => p.color || COLORS.PRIMARY};
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 1rem;
`;

export { ImageCard };
