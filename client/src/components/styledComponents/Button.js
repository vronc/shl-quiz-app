import styled from "styled-components";
import { COLORS } from "../../utils/Constants";

const Button = styled.button`
  color: white;
  background: ${(p) => (p.selected ? COLORS.SELECTED : COLORS.IDLE)};
  font-weight: bold;
  width: ${(p) => p.width || "15%"};
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
    color: ${COLORS.DISABLED};
  }

  &:focus {
    outline: none !important;
    border-color: ${COLORS.IDLE};
    box-shadow: 0 0 10px ${COLORS.IDLE};
  }
`;

export { Button };
