import styled from "styled-components";
import { COLORS } from "../../utils/Constants";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || COLORS.PRIMARY};
  background: ${COLORS.FIELD};
  border: none;
  border-radius: 3px;
  text-align: center;

  &:focus {
    outline: none !important;
    border-color: ${COLORS.IDLE};
    box-shadow: 0 0 10px ${COLORS.IDLE};
  }
`;

export { Input };
