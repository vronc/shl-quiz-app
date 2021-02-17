import styled from "styled-components";
import { COLORS } from "../../utils/Constants";

const Button = styled.button`
  color: white;
  background: ${(p) => (p.selected ? COLORS.DARK_PURPLE : COLORS.LIGHT_PURPLE)};
  font-weight: bold;
  width: 15%;
  padding: 8px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 1em;
  display: block;
  border: none;
  white-space: none;
  margin: 0.25rem;

  &:disabled {
    background: #eee;
    color: ${COLORS.DISABLED_GRAY};
  }
`;

export { Button };
