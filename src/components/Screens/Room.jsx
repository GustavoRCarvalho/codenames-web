import { styled } from "styled-components"
import { CommonButton } from "../common/CommonButton"
import { ContentContainer } from "../common/ContentLimit"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { useState, useRef, useEffect } from "react"
import { CommonInput } from "../common/CommonInput"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const Room = () => {
  const [room, setRoom] = useState("88a36d")
  const [error, setError] = useState("")
  const refEnterWrapper = useRef(null)
  const [formWidth, setFormWidth] = useState("auto")
  const navigate = useNavigate()

  useEffect(() => {
    const handleWindowResize = () => {
      setFormWidth(
        refEnterWrapper.current
          ? `${refEnterWrapper.current.offsetWidth}px`
          : "auto"
      )
    }
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  })

  useEffect(() => {
    window.addEventListener(
      "resize",
      setFormWidth(`${refEnterWrapper.current.offsetWidth}px`)
    )
  }, [refEnterWrapper])

  const getUpdateGame = ({ roomCode }) => {
    const onSucess = () => {
      navigate(`:${roomCode}`)
    }
    const onFailure = () => {
      setError("Sala não existe")
    }

    axios
      .get(`https://guesstheword.adaptable.app/game/${roomCode}`)
      .then(onSucess)
      .catch(onFailure)
  }

  const postCreateGame = () => {
    const payload = {
      word_count: 25,
    }

    const onSucess = ({ data }) => {
      navigate(`:${data.session}`)
    }
    const onFailure = () => {}

    axios
      .post(`https://guesstheword.adaptable.app/game/create-game`, payload)
      .then(onSucess)
      .catch(onFailure)
  }

  const handleEnterInput = (e) => {
    setRoom(e.target.value)
    setError("")
  }

  const handleEnterRoom = (e) => {
    e.preventDefault()

    if (room.length === 6) {
      getUpdateGame({ roomCode: room })
    } else {
      setError("Sala deve conter 6 digitos")
    }
  }

  const handleCreateRoom = (e) => {
    e.preventDefault()

    if (room.length === 6) {
      postCreateGame()
    }
  }

  return (
    <RoomContainer>
      <RoomEnterWrapper ref={refEnterWrapper}>
        <RoomInputLabel>Código</RoomInputLabel>
        <InputWrapper>
          <CommonInput
            $error={error}
            placeholder="Insira o código"
            value={room}
            onChange={handleEnterInput}
          />
          <ErrorLabel>{error}</ErrorLabel>
        </InputWrapper>
        <EnterRoomButton onClick={handleEnterRoom}>Entrar</EnterRoomButton>
      </RoomEnterWrapper>
      <CreateRoomButton onClick={handleCreateRoom} width={formWidth}>
        Criar Sala
      </CreateRoomButton>
    </RoomContainer>
  )
}

const ErrorLabel = styled.span`
  color: #ff3030;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const RoomEnterWrapper = styled.form`
  display: flex;
  align-items: start;
`

const EnterRoomButton = styled(CommonButton)`
  margin: 0;
  margin-left: 1em;
`

const CreateRoomButton = styled(CommonButton)`
  width: ${(props) => props.width};
`

const RoomInputLabel = styled.label`
  margin: 0;
  padding: 0;

  font-weight: 500;
  color: #fff;
  margin-right: 0.5em;
  margin-top: 0.5em;
`

const RoomContainer = styled(ContentContainer)`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
