import styled from "styled-components";
import { COLORS } from "../../utils/Constants";

const ImageCard = styled.img`
  src: ${(p) => p.src};
  background-color: ${COLORS.BLUE};
  border-radius: 10px;
  box-shadow: 0 0 0 13px ${COLORS.BLUE};
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 2rem;
`;

export { ImageCard };
