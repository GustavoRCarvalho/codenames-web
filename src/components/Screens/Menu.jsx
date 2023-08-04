import { styled } from "styled-components"
import { CommonButton } from "../common/CommonButton"
import { ContentContainer } from "../common/ContentLimit"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"

export const Menu = () => {
  return (
    <MenuContainer>
      <NoStyleLinkRouter to="online">
        <CommonButton>Jogar Online</CommonButton>
      </NoStyleLinkRouter>
      <NoStyleLinkRouter to="offline">
        <CommonButton>Jogar Offline</CommonButton>
      </NoStyleLinkRouter>
    </MenuContainer>
  )
}

const MenuContainer = styled(ContentContainer)`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`
