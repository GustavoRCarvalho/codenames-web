import { GridOffline } from "../Game/Grid/GridOffline"
import { Stopwatch } from "../Game/Stopwatch"
import { useState } from "react"
import { TipsOffline } from "../Game/TeamsTips.jsx/TipsOffiline"
import { NextTurnButton } from "../Game/NextTurnButton"
import { TipsGridContainer } from "../Game/TipsGridContainer"
import { HelpButton } from "../Game/Help/HelpButton"
import { ContentContainer } from "../common/ContentLimit"

export const OfflineGamePage = ({ wordList = {} }) => {
  const [selected, setSelected] = useState([])
  const [turn, setTurn] = useState(true)

  const blueRest = () => {
    let count = 0
    wordList.blueList.forEach((element) => {
      selected.forEach((selectedElement) => {
        if (selectedElement === element.label) {
          count += 1
        }
      })
    })
    return wordList.blueList.length - count
  }
  const pinkRest = () => {
    let count = 0
    wordList.pinkList.forEach((element) => {
      selected.forEach((selectedElement) => {
        if (selectedElement === element.label) {
          count += 1
        }
      })
    })
    return wordList.pinkList.length - count
  }

  function handleChangeTurn() {
    setTurn((value) => !value)
  }

  return (
    <>
      <HelpButton />
      <Stopwatch time={240} turn={turn} handleChangeTurn={handleChangeTurn} />
      <TipsGridContainer>
        <TipsOffline
          turn={turn}
          color={"var(--bg-color-pink)"}
          rest={pinkRest()}
        />
        <GridOffline
          wordList={wordList.shuffle}
          selected={selected}
          setSelected={setSelected}
          turn={turn}
          handleChangeTurn={handleChangeTurn}
        ></GridOffline>
        <TipsOffline
          turn={!turn}
          color={"var(--bg-color-blue)"}
          rest={blueRest()}
        />
      </TipsGridContainer>
      <ContentContainer>
        <NextTurnButton
          $color={turn ? "var(--bg-color-pink)" : "var(--bg-color-blue)"}
          onClick={handleChangeTurn}
        >
          Passar Turno
        </NextTurnButton>
      </ContentContainer>
    </>
  )
}
