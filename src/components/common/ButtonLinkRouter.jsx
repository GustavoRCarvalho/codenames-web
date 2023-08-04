import { styled } from "styled-components"
import { CommonButton } from "./CommonButton"
import { NoStyleLinkRouter } from "./NoStyleLinkRouter"

export const ButtonLinkRouter = ({ children, to, id = undefined }) => {
  return (
    <LinkRouter to={to}>
      <Button data-tooltip-id={id}>{children}</Button>
    </LinkRouter>
  )
}

export const LinkRouter = styled(NoStyleLinkRouter)`
  margin: 1em;
  width: 100%;
`
export const Button = styled(CommonButton)`
  margin: 0em;
  width: 100%;
`
