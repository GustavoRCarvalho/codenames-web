import { styled } from "styled-components"

export const CommonButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: #fff;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  margin: 1em;

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