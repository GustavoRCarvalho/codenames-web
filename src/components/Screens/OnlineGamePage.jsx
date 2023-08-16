import axios from "axios"
import { useState, useEffect } from "react"
import { io } from "socket.io-client"
import { TipsGridContainer } from "../Game/TipsGridContainer"
import { TipsOffline } from "../Game/TeamsTips.jsx/TipsOffiline"
import { GridOnline } from "../Game/Grid/GridOnline"
import { useLocation } from "react-router-dom"
import { BaseURL } from "../../Axios/Axios"
import { Stopwatch } from "../Game/Stopwatch"
import { ContentContainer } from "../common/ContentLimit"
import { NextTurnButton } from "../Game/NextTurnButton"

const socketGame = io(BaseURL)

export const OnlineGamePage = () => {
  const path = useLocation()
  const roomCode = path.pathname.split(":")[1]
  const [gameStats, setGameStats] = useState({})
  const boolTurn = gameStats?.turn === "pink" ? true : false

  const pinkRest = 9
  const blueRest = 8

  const sendMessage = () => {
    socketGame.emit("change-game", roomCode)
    console.log("sendmessage")
  }

  const getUpdateGame = ({ controller }) => {
    axios
      .get(`${BaseURL}/game/${roomCode}`, {
        signal: controller.signal,
      })
      .then(({ data }) => {
        console.log(data)
        setGameStats(data)
      })
  }

  console.log(socketGame)

  useEffect(() => {
    const controller = new AbortController()
    socketGame.connect()
    socketGame.emit("add-player", roomCode)

    getUpdateGame({ controller: controller })

    return () => {
      controller.abort()
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    function onChangeGame({ message }) {
      console.log("emit mudou: ", message)
      getUpdateGame({ controller: controller })
    }

    function onConnect() {
      console.log("conectou")
    }

    function onDisconnect(reason) {
      console.log("desconectou: ", reason)
    }

    socketGame.on("get-game", onChangeGame)
    socketGame.on("connect", onConnect)
    socketGame.on("disconnect", onDisconnect)

    return () => {
      controller.abort()
      socketGame.off("connect", onConnect)
      socketGame.off("disconnect", onDisconnect)
    }
  }, [socketGame])

  useEffect(() => {
    console.log("ALTEROU")
  }, [gameStats])

  function handleChangeTurn() {
    // call api to change turn
    putChangeGame({ turn: gameStats.turn === "pink" ? "blue" : "pink" })
  }

  const putChangeGame = ({ turn }) => {
    const payload = { turn: turn }

    function onSucess({ data }) {
      console.log("putChanceGame: ", data.message)
      setGameStats((value) => {
        return {
          ...value,
          timer: data.timer,
          turn: value.turn === "pink" ? "blue" : "pink",
        }
      })
    }

    function onFailure(reason) {
      console.log("catch - putChanceGame: ", reason)
    }

    axios
      .put(`${BaseURL}/game/${roomCode}`, payload)
      .then(onSucess)
      .catch(onFailure)
  }

  return (
    <>
      <Stopwatch
        time={gameStats.timer}
        turn={boolTurn}
        handleChangeTurn={handleChangeTurn}
      />
      <TipsGridContainer>
        <TipsOffline
          turn={boolTurn}
          color={"var(--bg-color-pink)"}
          rest={pinkRest}
        />
        <GridOnline
          wordList={gameStats.game_state}
          roomCode={roomCode}
          sendMessage={sendMessage}
          turn={boolTurn}
          handleChangeTurn={handleChangeTurn}
        />
        <TipsOffline
          turn={!boolTurn}
          color={"var(--bg-color-blue)"}
          rest={blueRest}
        />
      </TipsGridContainer>
      <ContentContainer>
        <NextTurnButton $turn={boolTurn} onClick={handleChangeTurn}>
          Passar Turno
        </NextTurnButton>
      </ContentContainer>
      <button onClick={() => sendMessage()}>MUDAR</button>
    </>
  )
}
