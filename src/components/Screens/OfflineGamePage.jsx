import { getRandomArbitrary, shuffleArray } from "../../utils/utils"
import { words } from "../../assets/words"
import { GridOffline } from "../Game/Grid/GridOffline"
import { Stopwatch } from "../Game/Stopwatch"
import { useMemo, useState } from "react"
import { TipsOffline } from "../Game/TeamsTips.jsx/TipsOffiline"
import { NextTurnButton } from "../Game/NextTurnButton"
import { TipsGridContainer } from "../Game/TipsGridContainer"
import { styled } from "styled-components"
import { ContentContainer } from "../common/ContentLimit"

export const OfflineGamePage = () => {
  const [selected, setSelected] = useState([])
  const [turn, setTurn] = useState(true)

  const wordList = useMemo(() => {
    let wordsLabels = words

    const wordLabelsList = Array.apply(null, Array(25)).map(() => {
      const randomNumber = getRandomArbitrary(0, wordsLabels.length)
      const label = wordsLabels[randomNumber]
      wordsLabels = wordsLabels.filter((value) => value !== label)

      return label
    })

    const pinkList = wordLabelsList
      .filter((_, index) => index < 9)
      .map((label) => {
        return {
          label: label,
          teamColor: "pink",
        }
      })
    const blueList = wordLabelsList
      .filter((_, index) => index > 8 && index < 17)
      .map((label) => {
        return {
          label: label,
          teamColor: "blue",
        }
      })

    const whiteList = wordLabelsList
      .filter((_, index) => index > 16 && index < 24)
      .map((label) => {
        return {
          label: label,
          teamColor: "white",
        }
      })

    const blackList = wordLabelsList
      .filter((_, index) => index > 23)
      .map((label) => {
        return {
          label: label,
          teamColor: "black",
        }
      })
    return {
      pinkList: pinkList,
      blueList: blueList,
      whiteList: whiteList,
      blackList: blackList,
      shuffle: shuffleArray([
        ...pinkList,
        ...blueList,
        ...whiteList,
        ...blackList,
      ]),
    }
  }, [])

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
    <GameContainer>
      <Stopwatch time={240} turn={turn} setTurn={setTurn} />
      <TipsGridContainer>
        <TipsOffline turn={turn} color={"#eb37bc"} rest={pinkRest()} />
        <GridOffline
          wordList={wordList.shuffle}
          selected={selected}
          setSelected={setSelected}
          turn={turn}
          handleChangeTurn={handleChangeTurn}
        ></GridOffline>
        <TipsOffline turn={!turn} color={"#3aa4ff"} rest={blueRest()} />
      </TipsGridContainer>
      <ContentContainer>
        <NextTurnButton
          $color={turn ? "#eb37bc" : "#3aa4ff"}
          onClick={handleChangeTurn}
        >
          Passar Turno
        </NextTurnButton>
      </ContentContainer>
    </GameContainer>
  )
}

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
