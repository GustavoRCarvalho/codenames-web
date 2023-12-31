import { styled } from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { ButtonLinkRouter } from "../common/ButtonLinkRouter"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { CommonButton } from "../common/CommonButton"
import { ToolTipCustom } from "../common/ToolTipCustom"

export const Menu = () => {
  return (
    <MenuContainer>
      <NoStyleLinkRouter to="online">
        <Button type="button">Jogar Online</Button>
      </NoStyleLinkRouter>
      <NoStyleLinkRouter to="offline">
        <Button type="button">Jogar Offline</Button>
      </NoStyleLinkRouter>
      <NoStyleLinkRouter to="help">
        <Button type="button">Como Jogar?</Button>
      </NoStyleLinkRouter>
      <NoStyleLinkRouter to="contact" data-tooltip-id="ContactButton">
        <Button disabled type="button">
          Quem Somos
        </Button>
      </NoStyleLinkRouter>
      <ToolTipCustom
        place="bottom"
        id="ContactButton"
        content="Ops! Ainda não está pronto"
      />
    </MenuContainer>
  )
}

export const Button = styled(CommonButton)`
  margin: 0em;
  width: 100%;
`

const MenuContainer = styled(ContentContainer)`
  height: 100vh;

  display: grid;
  align-content: center;
  align-items: center;

  gap: 2em;
  grid-template-columns: 12em 12em;
  justify-content: center;
`
