import { useState } from "react"
import "./App.css"
import { CardBackground } from "./components/Card/CardBackground"
import { Grid } from "./components/Screen/Grid"
import { ShowAllButton } from "./components/Screen/ShowAllButton"
import { TipsBackground } from "./components/TeamsTips.jsx/TipsBackground"
import { styled } from "styled-components"

function App() {
  const [selected, setSelected] = useState([])
  const [showAll, setShowAll] = useState(false)

  const words = [
    { label: "Vento", color: "#fff", bordercolor: "#2c2c2c" },
    { label: "Praia", color: "#3aa4ff", bordercolor: "#2967b4" },
    { label: "Chapéu", color: "#fff", bordercolor: "#2c2c2c" },
    { label: "Cachorro", color: "#eb37bc", bordercolor: "#b4298f" },
    { label: "Pincel", color: "#fff", bordercolor: "#2c2c2c" },
    { label: "Leão", color: "#eb37bc", bordercolor: "#b4298f" },
    { label: "Barco", color: "#eb37bc", bordercolor: "#b4298f" },
    { label: "Abacaxi", color: "#3aa4ff", bordercolor: "#2967b4" },
    { label: "Trem", color: "#121212", bordercolor: "#505050" },
    { label: "Cachecol", color: "#fff", bordercolor: "#2c2c2c" },
    { label: "Helicóptero", color: "#3aa4ff", bordercolor: "#2967b4" },
    { label: "Lápis", color: "#eb37bc", bordercolor: "#b4298f" },
    { label: "Esquilo", color: "#3aa4ff", bordercolor: "#2967b4" },
    { label: "Relógio", color: "#3aa4ff", bordercolor: "#2967b4" },
    { label: "Girafa", color: "#eb37bc", bordercolor: "#b4298f" },
    { label: "Limão", color: "#fff", bordercolor: "#2c2c2c" },
    { label: "Caranguejo", color: "#eb37bc", bordercolor: "#b4298f" },
    { label: "Pintura", color: "#fff", bordercolor: "#2c2c2c" },
    { label: "Piano", color: "#3aa4ff", bordercolor: "#2967b4" },
    { label: "Montanha", color: "#3aa4ff", bordercolor: "#2967b4" },
    { label: "Sapatilha", color: "#3aa4ff", bordercolor: "#2967b4" },
    { label: "Teatro", color: "#eb37bc", bordercolor: "#b4298f" },
    { label: "Computador", color: "#fff", bordercolor: "#2c2c2c" },
    { label: "Melancia", color: "#eb37bc", bordercolor: "#b4298f" },
    { label: "Mariposa", color: "#3aa4ff", bordercolor: "#2967b4" },
  ]

  return (
    <>
      <ShowAllButton showAll={showAll} setShowAll={setShowAll} />
      <ContentContainer>
        <TipsBackground color={"#eb37bc"} />
        <Grid>
          {words.map((card, index) => {
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
