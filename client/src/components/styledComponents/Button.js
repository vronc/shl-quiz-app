import styled from "styled-components";

const Button = styled.button`
  color: white;
  background: ${(p) => (p.selected ? "#593C8F" : "#7073C8")};
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
    color: #666;
  }
`;

export { Button };
