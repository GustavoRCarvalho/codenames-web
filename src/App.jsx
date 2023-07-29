import "./App.css"
import { getRandomArbitrary, shuffleArray } from "./assets/utils"
import { words } from "./assets/words"
import { Grid } from "./components/Screen/Grid"
import { TipsBackground } from "./components/TeamsTips.jsx/TipsBackground"
import { styled } from "styled-components"
import { useMemo, useState } from "react"

function App() {
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

    return {
      pinkList: wordLabelsList
        .filter((_, index) => index < 9)
        .map((label) => {
          return {
            label: label,
            teamColor: "pink",
          }
        }),
      blueList: wordLabelsList
        .filter((_, index) => index > 8 && index < 17)
        .map((label) => {
          return {
            label: label,
            teamColor: "blue",
          }
        }),
      whiteList: wordLabelsList
        .filter((_, index) => index > 23)
        .map((label) => {
          return {
            label: label,
            teamColor: "white",
          }
        }),
      shuffle: shuffleArray(
        wordLabelsList.map((label, index) => {
          if (index < 9) {
            return {
              label: label,
              teamColor: "pink",
            }
          } else if (index < 17) {
            return {
              label: label,
              teamColor: "blue",
            }
          } else if (index < 24) {
            return {
              label: label,
              teamColor: "white",
            }
          } else {
            return {
              label: label,
              teamColor: "black",
            }
          }
        })
      ),
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

  return (
    <>
      <ContentContainer>
        <TipsBackground turn={turn} color={"#eb37bc"} rest={pinkRest()} />
        <Grid
          wordList={wordList.shuffle}
          selected={selected}
          setSelected={setSelected}
        ></Grid>
        <TipsBackground turn={!turn} color={"#3aa4ff"} rest={blueRest()} />
      </ContentContainer>
      <NextTurnButton
        $color={turn ? "#eb37bc" : "#3aa4ff"}
        onClick={() => setTurn((value) => !value)}
      >
        Passar Turno
      </NextTurnButton>
    </>
  )
}

const NextTurnButton = styled.button`
  background-color: ${(props) => props.$color};

  width: 50%;
  max-width: 750px;

  font-size: 1em;
  font-weight: 500;
  font-family: inherit;

  border-radius: 8px;
  border: none;
  transition: box-shadow 0.25s;

  padding: 0.6em 1.2em;
  margin: 1em;

  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 1em #0009;
  }
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 500px;
`

export default App
