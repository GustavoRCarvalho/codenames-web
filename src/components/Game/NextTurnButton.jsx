import { styled } from "styled-components"

export const NextTurnButton = styled.button`
  background-color: ${(props) => props.$color};
  color: #fff;

  width: 50%;
  max-width: 750px;

  font-size: 1em;
  font-weight: 500;
  font-family: inherit;

  border-radius: 8px;
  border: none;
  transition: box-shadow 0.25s;

  padding: 0.6em 1.2em;
  margin: 1em;

  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 1em #0009;
  }
`
