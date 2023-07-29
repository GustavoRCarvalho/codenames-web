import "./App.css"
import { getRandomArbitrary, shuffleArray } from "./assets/utils"
import { words } from "./assets/words"
import { Grid } from "./components/Screen/Grid"
import { TipsBackground } from "./components/TeamsTips.jsx/TipsBackground"
import { styled } from "styled-components"
import { useMemo, useState } from "react"

function App() {
  const [selected, setSelected] = useState([])

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
        <TipsBackground color={"#eb37bc"} rest={pinkRest()} />
        <Grid
          wordList={wordList.shuffle}
          selected={selected}
          setSelected={setSelected}
        ></Grid>
        <TipsBackground color={"#3aa4ff"} rest={blueRest()} />
      </ContentContainer>
    </>
  )
}

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 500px;
`

export default App
