import { styled } from "styled-components"

export const CommonButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: ${(props) =>
    props.disabled ? "#8e8e8e" : "var(--color-button-dark)"};
  background-color: ${(props) =>
    props.disabled ? "#202020" : "var(--bg-color-button-dark)"};
  cursor: ${(props) => (props.disabled ? "normal" : "pointer")};
  transition: border-color 0.25s;

  margin: 1em;

  &:hover {
    border-color: ${(props) =>
      props.disabled ? "transparent" : "var(--border-color-button-dark)"};
  }
  @media (prefers-color-scheme: light) {
    color: var(--color-button-light);
    background-color: var(--bg-color-button-light);

    &:hover {
      border-color: var(--border-color-button-light);
    }
  }
`
