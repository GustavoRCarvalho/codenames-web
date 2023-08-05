import { styled } from "styled-components"
import { CardBackground } from "../Card/CardBackground"
import { useState } from "react"
import { CommonButton } from "../../common/CommonButton"
import { GridWrapper } from "./GridWrapper"
import axios from "axios"
import { column } from "./gridCommon"

export const GridOnline = ({
  wordList = [],
  roomCode,
  sendMessage,
  turn,
  handleChangeTurn,
}) => {
  const [showAll, setShowAll] = useState(false)

  const putChangeGame = ({ label }) => {
    console.log(wordList)
    const wordsListState = wordList.map((wordObj) => {
      if (wordObj.word === label) {
        return {
          ...wordObj,
          turned: true,
        }
      } else {
        return wordObj
      }
    })
    console.log(wordsListState)
    const payload = { turn: turn, game_state: wordsListState }

    function onSucess({ data }) {
      sendMessage()
      console.log("putChanceGame: ", data.message)
    }
    function onFailure(reason) {
      console.log("catch - putChanceGame: ", reason)
    }

    axios
      .put(`https://guesstheword.adaptable.app/game/${roomCode}`, payload)
      .then(onSucess)
      .catch(onFailure)
  }

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
          const active = showAll ? true : card.turned
          return (
            <CardBackground
              key={card.word}
              active={active}
              label={card.word}
              turn={turn}
              teamColor={card.team}
              handleChangeTurn={handleChangeTurn}
              setShowAll={setShowAll}
              method={() => putChangeGame({ label: card.word })}
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
