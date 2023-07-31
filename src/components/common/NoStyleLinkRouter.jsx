import { Link } from "react-router-dom"
import styled from "styled-components"

export const NoStyleLinkRouter = (props) => {
  return (
    <NoStyleLink
      onClick={() => {
        window.scrollTo(0, 0)
      }}
      {...props}
    >
      {props.children}
    </NoStyleLink>
  )
}

const NoStyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`
