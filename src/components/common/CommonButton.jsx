import { styled } from "styled-components"

export const CommonButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: ${(props) => (props.disabled ? "#8e8e8e" : "#fff")};
  background-color: ${(props) => (props.disabled ? "#202020" : "#1a1a1a")};
  cursor: ${(props) => (props.disabled ? "normal" : "pointer")};
  transition: border-color 0.25s;

  margin: 1em;

  &:hover {
    border-color: ${(props) => (props.disabled ? "transparent" : "#646cff")};
  }
  @media (prefers-color-scheme: light) {
    color: #000;
    background-color: #ededed;

    &:hover {
      border-color: #000447;
    }
  }
`
