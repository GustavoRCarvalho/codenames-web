import { styled } from "styled-components"
import { CardBackground } from "../Card/CardBackground"
import { useState } from "react"
import { CommonButton } from "../../common/CommonButton"
import { GridWrapper } from "./GridWrapper"

export const GridOffline = ({
  wordList,
  selected,
  setSelected,
  turn,
  handleChangeTurn,
}) => {
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

  function handleClickCard({ active, label, teamColor }) {
    if (!active) {
      setSelected((values) => {
        return [...values, label]
      })
    }
    if (teamColor === "white") {
      handleChangeTurn()
    } else if (teamColor === "blue" && turn) {
      handleChangeTurn()
    } else if (teamColor === "pink" && !turn) {
      handleChangeTurn()
    } else if (teamColor === "black") {
      setShowAll(true)
    }
  }

  function handleClickShow() {
    setShowAll((value) => !value)
  }

  return (
    <GridWrapper>
      <CommonButton onClick={handleClickShow}>
        {showAll ? "ESCONDER TODOS" : "MOSTRAR TODOS"}
      </CommonButton>
      <GridBackground $column={column()} data-testid={"grid"}>
        {wordList.map((card) => {
          const active = showAll
            ? true
            : selected.find((value) => value === card.label)
          return (
            <CardBackground
              key={card.label}
              active={active}
              teamColor={card.teamColor}
              handleClickCard={handleClickCard}
              label={card.label}
            />
          )
        })}
      </GridBackground>
    </GridWrapper>
  )
}

const GridBackground = styled.div`
  display: grid;
  gap: 0.5em;

  grid-template-columns: ${(props) => props.$column};
`
