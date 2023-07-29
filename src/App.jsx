import { useMemo, useState } from "react"
import "./App.css"
import { CardBackground } from "./components/Card/CardBackground"
import { Grid } from "./components/Screen/Grid"
import { ShowAllButton } from "./components/Screen/ShowAllButton"
import { TipsBackground } from "./components/TeamsTips.jsx/TipsBackground"
import { styled } from "styled-components"
import { words } from "./assets/words"
import { getRandomArbitrary, shuffleArray } from "./assets/utils"

function App() {
  const [selected, setSelected] = useState([])
  const [showAll, setShowAll] = useState(false)

  const wordList = useMemo(() => {
    let wordsLabels = words

    const wordLabelsList = Array.apply(null, Array(25)).map(() => {
      const randomNumber = getRandomArbitrary(0, wordsLabels.length)
      const label = wordsLabels[randomNumber]
      wordsLabels = wordsLabels.filter((value) => value !== label)

      return label
    })

    return shuffleArray(
      wordLabelsList.map((label, index) => {
        if (index < 9) {
          return {
            label: label,
            color: "#eb37bc",
            bordercolor: "#b4298f",
          }
        } else if (index < 17) {
          return {
            label: label,
            color: "#3aa4ff",
            bordercolor: "#2967b4",
          }
        } else if (index < 24) {
          return {
            label: label,
            color: "#fff",
            bordercolor: "#2c2c2c",
          }
        } else {
          return {
            label: label,
            color: "#121212",
            bordercolor: "#505050",
          }
        }
      })
    )
  }, [])

  return (
    <>
      <ShowAllButton showAll={showAll} setShowAll={setShowAll} />
      <ContentContainer>
        <TipsBackground color={"#eb37bc"} />
        <Grid>
          {wordList.map((card) => {
            return (
              <CardBackground
                key={card.label}
                showAll={showAll}
                color={card.color}
                bordercolor={card.bordercolor}
                selected={selected}
                setSelected={setSelected}
                label={card.label}
              ></CardBackground>
            )
          })}
        </Grid>
        <TipsBackground color={"#3aa4ff"} />
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
