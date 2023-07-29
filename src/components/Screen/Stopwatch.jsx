import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"

export const Stopwatch = ({ time, turn, setTurn }) => {
  const [isActive, setIsActive] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [timeCount, setTimeCount] = useState(time)
  const minutes = parseInt(timeCount / 60)
    .toString()
    .padStart(2, "0")
  const seconds = (timeCount % 60).toString().padStart(2, "0")

  useEffect(() => {
    let interval = null

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTimeCount((value) => value - 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive, isPaused])

  useEffect(() => {
    if (minutes === "00" && seconds === "00") {
      setTurn((value) => !value)
    }
  }, [setTurn, minutes, seconds])

  useEffect(() => {
    setTimeCount(time)
  }, [turn])

  // const handleStart = () => {
  //   setIsActive(true)
  //   setIsPaused(false)
  // }

  // const handlePauseResume = () => {
  //   setIsPaused((value) => !value)
  // }

  // const handleReset = () => {
  //   setIsActive(false)
  //   setTime(0)
  // }

  return (
    <WatchContainer>
      <ArrowLeftIcon show={turn} />
      <Watch>
        {minutes} : {seconds}
      </Watch>
      <ArrowRightIcon show={!turn} />
    </WatchContainer>
  )
}

const WatchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Watch = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-inline: 1em;
`

const ArrowRightIcon = styled(AiOutlineArrowRight)`
  color: #3aa4ff;
  width: 2em;
  height: ${(props) => (props.show ? " 2em" : 0)};
`

const ArrowLeftIcon = styled(AiOutlineArrowLeft)`
  display: ${(props) => (props.show ? "block" : "none")};

  color: #eb37bc;
  width: 2em;
  height: ${(props) => (props.show ? " 2em" : 0)};
`
