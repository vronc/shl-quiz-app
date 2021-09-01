// Taken from https://codesandbox.io/s/custom-checkbox-and-radiobutton-with-react-and-styled-components-6h3st?from-embed=&file=/src/Checkbox.js:731-732

import React from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "../../utils/Constants";

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: 0;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0.6rem 1rem;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background: ${COLORS.FIELD};
  position: absolute;
  top: 0rem;
  left: 0rem;
  border: 1px solid ${COLORS.IDLE};
  border-radius: 0.2rem;

  ${Label}:hover & {
    background: ${COLORS.FIELD_SUPPORT};
    border: 1px solid ${COLORS.PRIMARY};
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1rem;
    left: 0.35rem;
    width: 20%;
    height: 60%;
    border: solid ${COLORS.SELECTED};
    border-width: 0 0.2rem 0.2rem 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default function Checkbox({
  value,
  checked,
  onChange,
  name,
  id,
  label,
  disabled,
}) {
  return (
    <Label htmlFor={id} disabled={disabled}>
      {label}
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  );
}

export { Checkbox };
