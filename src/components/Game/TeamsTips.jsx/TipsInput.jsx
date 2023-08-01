import { styled } from "styled-components"

export const TipsInput = styled.input`
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
  background-color: #0002;
  &::placeholder {
    color: #fff;
  }

  width: 90%;
  text-align: center;

  border: 0;
  border-radius: 0.25em;

  outline: none;

  margin-block: 1em;
  padding: 0.5em;
`
