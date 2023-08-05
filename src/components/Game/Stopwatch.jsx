import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { CommonButton } from "../common/CommonButton"
import { ContentContainer } from "../common/ContentLimit"

export const Stopwatch = ({ time, turn, handleChangeTurn }) => {
  const [isPaused, setIsPaused] = useState(false)
  const [timeCount, setTimeCount] = useState(time)
  const minutes = parseInt(timeCount / 60)
    .toString()
    .padStart(2, "0")
  const seconds = (timeCount % 60).toString().padStart(2, "0")

  useEffect(() => {
    let interval = null

    if (isPaused === false) {
      interval = setInterval(() => {
        setTimeCount((value) => value - 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isPaused])

  useEffect(() => {
    if (minutes === "00" && seconds === "00") {
      handleChangeTurn()
    }
  }, [minutes, seconds])

  useEffect(() => {
    setTimeCount(time)
  }, [time, turn])

  const handlePauseResume = () => {
    setIsPaused((value) => !value)
  }

  return (
    <WatchContainer>
      <WatchControl>
        <ArrowLeftIcon show={turn ? 1 : 0} />
        <Watch $paused={isPaused ? 1 : 0}>
          {minutes} : {seconds}
        </Watch>
        <ArrowRightIcon show={!turn ? 1 : 0} />
      </WatchControl>
      <CommonButton onClick={handlePauseResume}>
        {isPaused ? "Continuar" : "Pausar"}
      </CommonButton>
    </WatchContainer>
  )
}

const WatchContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WatchControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1em;
`

const Watch = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
  margin-inline: 1em;

  padding: 0.5em;
  border-radius: 0.5em;
  box-shadow: ${(props) => (props.$paused ? "inset 0px 0px 10px 1px red" : "")};
`

const ArrowRightIcon = styled(AiOutlineArrowRight)`
  color: var(--bg-color-blue);
  width: 2em;
  height: ${(props) => (props.show ? "2em" : "0em")};
`

const ArrowLeftIcon = styled(AiOutlineArrowLeft)`
  color: var(--bg-color-pink);
  width: 2em;
  height: ${(props) => (props.show ? "2em" : "0em")};
`
