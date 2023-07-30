import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { CommonButton } from "./CommonButton"

export const Stopwatch = ({ time, turn, setTurn }) => {
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
      setTurn((value) => !value)
    }
  }, [setTurn, minutes, seconds])

  useEffect(() => {
    setTimeCount(time)
  }, [time, turn])

  const handlePauseResume = () => {
    setIsPaused((value) => !value)
  }

  return (
    <WatchContainer>
      <WatchControl>
        <ArrowLeftIcon show={turn} />
        <Watch paused={isPaused}>
          {minutes} : {seconds}
        </Watch>
        <ArrowRightIcon show={!turn} />
      </WatchControl>
      <CommonButton onClick={handlePauseResume}>
        {isPaused ? "Continuar" : "Pausar"}
      </CommonButton>
    </WatchContainer>
  )
}

const WatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WatchControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Watch = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
  margin-inline: 1em;

  padding: 0.5em;
  border-radius: 0.5em;
  border: ${(props) => (props.paused ? "2px solid red" : "2px solid #0000")};
`

const ArrowRightIcon = styled(AiOutlineArrowRight)`
  color: #3aa4ff;
  width: 2em;
  height: ${(props) => (props.show ? "2em" : "0em")};
`

const ArrowLeftIcon = styled(AiOutlineArrowLeft)`
  color: #eb37bc;
  width: 2em;
  height: ${(props) => (props.show ? "2em" : "0em")};
`
