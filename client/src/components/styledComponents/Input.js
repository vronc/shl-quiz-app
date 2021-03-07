import styled from "styled-components";
import { COLORS } from "../../utils/Constants";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || COLORS.PRIMARY};
  background: seashell;
  border: none;
  border-radius: 3px;
  text-align: center;
`;

export { Input };
