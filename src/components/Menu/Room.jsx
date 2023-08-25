import { styled } from "styled-components"
import { CommonButton } from "../common/CommonButton"
import { ContentContainer } from "../common/ContentLimit"
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { axiosKit as axios } from "../../Axios/Axios"
import { EnterRoom } from "./EnterRoom"
import { ToolTipCustom } from "../common/ToolTipCustom"

export const Room = () => {
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

  const postCreateGame = () => {
    const payload = {
      word_count: 25,
    }

    const onSucess = ({ data }) => {
      navigate(`:${data.session}`)
    }

    const onFailure = () => {}

    axios.post(`game/create-game`, payload).then(onSucess).catch(onFailure)
  }

  const handleCreateRoom = (e) => {
    e.preventDefault()

    postCreateGame()
  }

  return (
    <RoomContainer>
      <EnterRoom refEnterWrapper={refEnterWrapper} />
      <span data-tooltip-id="CreateRoomButton">
        <CreateRoomButton
          disabled={false}
          onClick={handleCreateRoom}
          width={formWidth}
        >
          Criar Sala
        </CreateRoomButton>
      </span>
      <ToolTipCustom
        place="bottom"
        id="CreateRoomButton"
        content="Função desativada para ajustes"
      />
    </RoomContainer>
  )
}

const CreateRoomButton = styled(CommonButton)`
  width: ${(props) => props.width};
  margin: 0;

  margin-top: 1em;
`

const RoomContainer = styled(ContentContainer)`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
