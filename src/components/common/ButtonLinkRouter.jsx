import { styled } from "styled-components"
import { CommonButton } from "./CommonButton"
import { NoStyleLinkRouter } from "./NoStyleLinkRouter"

export const ButtonLinkRouter = ({
  children,
  to,
  id = undefined,
  disabled,
}) => {
  return (
    <LinkRouter to={to}>
      <Button disabled={disabled} data-tooltip-id={id}>
        {children}
      </Button>
    </LinkRouter>
  )
}

export const LinkRouter = styled(NoStyleLinkRouter)`
  margin: 1em;
`
export const Button = styled(CommonButton)`
  margin: 0em;
`
