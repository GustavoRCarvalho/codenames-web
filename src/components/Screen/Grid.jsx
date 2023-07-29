import { styled } from "styled-components"
import { CardBackground } from "../Card/CardBackground"
import { useState } from "react"
import { ShowAllButton } from "./ShowAllButton"

export const Grid = ({ wordList, selected, setSelected }) => {
  const [showAll, setShowAll] = useState(false)

  function column() {
    let columnsNumber = Math.sqrt(wordList.length)
    if (Number.isInteger(columnsNumber)) {
      let columnslabel = ""
      for (var i = 0; i < columnsNumber; i++) {
        columnslabel += "1fr "
      }
      return columnslabel
    }
    return "1fr 1fr 1fr 1fr 1fr"
  }

  return (
    <GridWrapper>
      <ShowAllButton showAll={showAll} setShowAll={setShowAll} />
      <GridBackground $column={column()}>
        {wordList.map((card) => {
          return (
            <CardBackground
              key={card.label}
              showAll={showAll}
              teamColor={card.teamColor}
              color={card.color}
              bordercolor={card.bordercolor}
              selected={selected}
              setSelected={setSelected}
              label={card.label}
            />
          )
        })}
      </GridBackground>
    </GridWrapper>
  )
}

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const GridBackground = styled.div`
  display: grid;
  gap: 0.5em;

  grid-template-columns: ${(props) => props.$column};
`
