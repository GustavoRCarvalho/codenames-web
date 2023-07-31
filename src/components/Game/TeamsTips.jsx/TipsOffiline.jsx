import { TipsCard } from "./TipsCard"
import { TipsInput } from "./TipsInput"
import { useEffect, useRef, useState } from "react"
import { TipsWrapper } from "./TipsWrappper"
import { TipsBackground } from "./TipsBackground"

export const TipsOffline = ({ color, rest, turn }) => {
  const [tips, setTips] = useState([])
  const [tipInput, setTipInput] = useState("")
  const tipsInputRef = useRef(null)

  function handleTypeEnter(e) {
    if (e.key === "Enter") {
      const inputSplit = tipInput.split(" ")
      if (
        tipInput !== "" &&
        inputSplit.length === 2 &&
        Number.isInteger(Number(inputSplit[1]))
      ) {
        setTips((value) => {
          return [...value, `${inputSplit[0] + " - " + inputSplit[1]}`]
        })
        setTipInput("")
      } else {
        alert("Insira uma dica e uma quantidade de palavras. Ex.: Espelho 3")
      }
    }
  }

  useEffect(() => {
    tipsInputRef?.current.focus()
  }, [turn])

  return (
    <TipsBackground color={color} rest={rest}>
      <TipsWrapper>
        {tips.map((label, index) => {
          return <TipsCard key={label + index}>{label}</TipsCard>
        })}
      </TipsWrapper>
      <TipsInput
        ref={tipsInputRef}
        placeholder="Insira a dica..."
        title="Insert Tip"
        $show={turn ? 1 : 0}
        maxLength={21}
        value={tipInput}
        onChange={(e) => {
          setTipInput(e.target.value)
        }}
        onKeyDown={handleTypeEnter}
      />
    </TipsBackground>
  )
}
