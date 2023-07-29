import { styled } from "styled-components"
import { TipsCard } from "./TipsCard"
import { TipsInput } from "./TipsInput"
import { useState } from "react"

export const TipsBackground = ({ color }) => {
  const [tips, setTips] = useState([])
  const [tipInput, setTipInput] = useState("")

  function handleTypeEnter(e) {
    if (e.key === "Enter") {
      const inputSplit = tipInput.split(" ")
      if (
        tipInput !== "" &&
        inputSplit.length === 2 &&
        Number.isInteger(Number(inputSplit[1]))
      ) {
        console.log(inputSplit)
        setTips((value) => {
          return [...value, `${inputSplit[0] + " - " + inputSplit[1]}`]
        })
        setTipInput("")
      } else {
        alert("Insira uma dica e uma quantidade de palavras. Ex.: Espelho 3")
      }
    }
  }

  return (
    <Background $backgroundcolor={color}>
      <Title>DICAS: </Title>
      <TipsWrapper>
        {tips.map((label, index) => {
          return <TipsCard key={label + index}>{label}</TipsCard>
        })}
      </TipsWrapper>
      <TipsInput
        value={tipInput}
        onChange={(e) => {
          setTipInput(e.target.value)
        }}
        onKeyDown={handleTypeEnter}
      />
    </Background>
  )
}

const TipsWrapper = styled.div`
  flex: 1;
  width: 90%;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`

const Title = styled.h2``

const Background = styled.div`
  background-color: ${(props) => props.$backgroundcolor ?? "#474747"};
  max-width: 300px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0.5em;

  margin-inline: 1em;
`
