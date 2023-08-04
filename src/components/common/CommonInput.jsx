import { styled } from "styled-components"

export const CommonInput = styled.input`
  border-radius: 8px;
  border: 1px solid ${(props) => (props.$error ? "#ff3030" : "transparent")};
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: #fff;
  background-color: #1a1a1a;

  transition: border-color 0.25s;

  margin-inline: 1em;

  &:hover {
    border-color: #646cff;
  }
  @media (prefers-color-scheme: light) {
    color: #000;
    background-color: #ededed;

    &:hover {
      border-color: #000447;
    }
  }
`
