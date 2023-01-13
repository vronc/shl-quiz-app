import styled from "styled-components";

import { COLORS } from "../../utils/Constants";

const H2 = styled.h2`
  color: ${(props) => props.color || COLORS.PRIMARY};
  text-align: center;
  margin: 1rem;
`;

export { H2 };
