import styled from "styled-components";

const Button = styled.button`
  color: white;
  background: ${(p) => (p.secondary ? "black" : "#f8049c")};
  font-weight: bold;
  width: 15%;
  padding: 8px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 1em;
  display: block;
  border: none;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };