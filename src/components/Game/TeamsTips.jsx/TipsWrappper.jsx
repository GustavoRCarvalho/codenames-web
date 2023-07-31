import { styled } from "styled-components"

export const TipsWrapper = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  overflow-y: scroll;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    width: 0;
  }
`
