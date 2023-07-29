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
    return shuffleArray([
      ...Array.apply(null, Array(9)).map(() => {
        return {
          label: words[getRandomArbitrary(0, words.length)],
          color: "#eb37bc",
          bordercolor: "#b4298f",
        }
      }),
      ...Array.apply(null, Array(8)).map(() => {
        return {
          label: words[getRandomArbitrary(0, words.length)],
          color: "#3aa4ff",
          bordercolor: "#2967b4",
        }
      }),
      ...Array.apply(null, Array(7)).map(() => {
        return {
          label: words[getRandomArbitrary(0, words.length)],
          color: "#fff",
          bordercolor: "#2c2c2c",
        }
      }),
      {
        label: words[getRandomArbitrary(0, words.length)],
        color: "#121212",
        bordercolor: "#505050",
      },
    ])
  }, [])

  return (
    <>
      <ShowAllButton showAll={showAll} setShowAll={setShowAll} />
      <ContentContainer>
        <TipsBackground color={"#eb37bc"} />
        <Grid>
          {wordList.map((card, index) => {
            return (
              <CardBackground
                key={index}
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
  height: 60vh;
  min-height: 500px;
`

export default App
