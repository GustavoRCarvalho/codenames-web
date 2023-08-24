import { TipsCard } from "./TipsCard"
import { TipsInput } from "./TipsInput"
import { useEffect, useRef, useState } from "react"
import { TipsWrapper } from "./TipsWrappper"
import { TipsBackground } from "./TipsBackground"
import axios from "axios"
import { BaseURL } from "../../../Axios/Axios"

export const TipsOnline = ({
  roomCode,
  tips = [],
  sendTip,
  team,
  color,
  rest,
  turn,
}) => {
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
        let tip = `${inputSplit[0] + " - " + inputSplit[1]}`
        postTip({ label: tip })
        setTipInput("")
      } else {
        alert("Insira uma dica e uma quantidade de palavras. Ex.: Espelho 3")
      }
    }
  }

  const postTip = ({ label }) => {
    const payload = { text: label, team: team }

    function onSucess() {
      sendTip()
    }
    function onFailure() {}

    axios
      .post(`${BaseURL}/hints/create/${roomCode}`, payload)
      .then(onSucess)
      .catch(onFailure)
  }

  useEffect(() => {
    tipsInputRef?.current.focus()
  }, [turn])

  return (
    <TipsBackground color={color} rest={rest}>
      <TipsWrapper aria-label="tips">
        {tips.map((label, index) => {
          return <TipsCard key={label + index}>{label}</TipsCard>
        })}
      </TipsWrapper>
      <TipsInput
        ref={tipsInputRef}
        placeholder="Insira a dica..."
        title="Insert Tip"
        $visible={turn}
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
