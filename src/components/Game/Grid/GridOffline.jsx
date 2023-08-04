import { styled } from "styled-components"
import { CardBackground } from "../Card/CardBackground"
import { useState } from "react"
import { CommonButton } from "../../common/CommonButton"
import { GridWrapper } from "./GridWrapper"
import { column } from "./gridCommon"

export const GridOffline = ({
  wordList,
  selected,
  setSelected,
  turn,
  handleChangeTurn,
}) => {
  const [showAll, setShowAll] = useState(false)

  function handleClickShow() {
    setShowAll((value) => !value)
  }

  return (
    <GridWrapper>
      <CommonButton onClick={handleClickShow}>
        {showAll ? "ESCONDER TODOS" : "MOSTRAR TODOS"}
      </CommonButton>
      <GridBackground $column={column({ wordList })} data-testid={"grid"}>
        {wordList.map((card) => {
          const active = showAll
            ? true
            : selected.find((value) => value === card.label)
          return (
            <CardBackground
              key={card.label}
              label={card.label}
              active={active}
              teamColor={card.teamColor}
              turn={turn}
              method={() =>
                setSelected((values) => {
                  return [...values, card.label]
                })
              }
              handleChangeTurn={handleChangeTurn}
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
