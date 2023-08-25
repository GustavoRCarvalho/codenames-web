import { styled } from "styled-components"
import { CommonInput } from "../common/CommonInput"
import { CommonButton } from "../common/CommonButton"
import { useState } from "react"
import { axiosKit as axios } from "../../Axios/Axios"
import { useNavigate } from "react-router-dom"

export const EnterRoom = ({ refEnterWrapper }) => {
  const navigate = useNavigate()
  const [room, setRoom] = useState("")
  const [error, setError] = useState("")

  const getUpdateGame = ({ roomCode }) => {
    const onSucess = () => {
      navigate(`:${roomCode}`)
    }

    const onFailure = () => {
      setError("Sala não existe")
    }

    axios.get(`game/${roomCode}`).then(onSucess).catch(onFailure)
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

  return (
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

const RoomInputLabel = styled.label`
  margin: 0;
  padding: 0;

  font-weight: 500;
  color: #fff;
  margin-right: 0.5em;
  margin-top: 0.5em;
`
