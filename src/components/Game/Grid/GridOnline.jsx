import { styled } from "styled-components"
import { CardBackground } from "../Card/CardBackground"
import { useState } from "react"
import { CommonButton } from "../../common/CommonButton"
import { GridWrapper } from "./GridWrapper"
import axios from "axios"

export const GridOnline = ({
  wordList = [],
  roomCode,
  sendMessage,
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

  function handleClickCard({ active, label, teamColor }) {
    console.log("put")
    if (!active) {
      // chamar set mudou passando {label}
      putChangeGame({ label })
    }
    if (teamColor === 2) {
      handleChangeTurn()
    } else if (teamColor === 1 && turn) {
      handleChangeTurn()
    } else if (teamColor === 0 && !turn) {
      handleChangeTurn()
    } else if (teamColor === 3) {
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
          const active = showAll ? true : card.turned
          return (
            <CardBackground
              key={card.word}
              active={active}
              teamColor={card.team}
              handleClickCard={handleClickCard}
              label={card.word}
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
