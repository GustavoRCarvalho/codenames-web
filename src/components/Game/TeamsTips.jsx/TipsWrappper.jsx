import { styled } from "styled-components"

export const TipsWrapper = styled.ul`
  flex: 1;
  display: flex;
  width: 100%;
  overflow-y: scroll;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;

  &::-webkit-scrollbar {
    width: 0;
  }
`
