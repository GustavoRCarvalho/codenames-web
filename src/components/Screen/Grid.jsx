import { styled } from "styled-components"

export const Grid = ({ children }) => {
  function column() {
    let columnsNumber = Math.sqrt(children.length)
    if (Number.isInteger(columnsNumber)) {
      let columnslabel = ""
      for (var i = 0; i < columnsNumber; i++) {
        columnslabel += "1fr "
      }
      return columnslabel
    }
    return "1fr 1fr 1fr 1fr 1fr"
  }

  return <GridBackground $column={column()}>{children}</GridBackground>
}

const GridBackground = styled.div`
  display: grid;
  gap: 0.5em;

  grid-template-columns: ${(props) => props.$column};
`
