import { styled } from "styled-components"
import { ContentContainer } from "../common/ContentLimit"
import { CommonButton } from "../common/CommonButton"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { ToolTipCustom } from "../common/ToolTipCustom"
import { ButtonLinkRouter } from "../common/ButtonLinkRouter"

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitleWrapper>
        <NumberTitle $color="#eb37bc">4</NumberTitle>
        <NumberTitle $color="#666666">0</NumberTitle>
        <NumberTitle $color="#3aa4ff">4</NumberTitle>
      </NotFoundTitleWrapper>
      <NotFoundDescription>
        A página que você está procurando não pode ser encontrada!
      </NotFoundDescription>
      <ButtonLinkRouter to={"/"} id="BackToHomeButton">
        Início
      </ButtonLinkRouter>
      <ToolTipCustom
        place="bottom"
        id="BackToHomeButton"
        content="Volte para página inicial"
      />
    </NotFoundContainer>
  )
}

const NotFoundContainer = styled(ContentContainer)`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NumberTitle = styled.h1`
  font-family: "Barlow", sans-serif;
  font-size: 10em;
  line-height: 1em;

  color: ${(props) => props.$color};

  margin: 0;
  user-select: none;

  cursor: default;
`

const NotFoundDescription = styled.span`
  color: #8d8d8d;
  font-family: "Barlow", sans-serif;
`

const NotFoundTitleWrapper = styled.div`
  display: flex;
`
