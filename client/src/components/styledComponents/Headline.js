import styled from "styled-components";

import { COLORS } from "../../utils/Constants";

const Headline = styled.h1`
  color: ${(props) => props.color || COLORS.BLUE};
  text-align: center;
`;

export { Headline };
