import axios from "axios"
import { useState, useEffect } from "react"
import { io } from "socket.io-client"
import { TipsGridContainer } from "../Game/TipsGridContainer"
import { TipsOffline } from "../Game/TeamsTips.jsx/TipsOffiline"
import { GridOnline } from "../Game/Grid/GridOnline"
import { useLocation } from "react-router-dom"

const socketGame = io("https://guesstheword.adaptable.app/")

export const OnlineGamePage = () => {
  const path = useLocation()
  const roomCode = path.pathname.split(":")[1]
  const [gameStats, setGameStats] = useState({})

  const pinkRest = 9
  const blueRest = 8
  const turn = true
  const session = "594dac"

  const sendMessage = () => {
    socketGame.emit("change-game", roomCode)
    console.log("sendmessage")
  }

  const getUpdateGame = ({ controller }) => {
    axios
      .get(`https://guesstheword.adaptable.app/game/${roomCode}`, {
        signal: controller.signal,
      })
      .then(({ data }) => {
        setGameStats(data)
      })
  }

  console.log(socketGame)

  useEffect(() => {
    const controller = new AbortController()
    socketGame.connect()
    socketGame.emit("add-player", session)

    getUpdateGame({ controller: controller })

    return () => {
      controller.abort()
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    function onChangeGame({ message }) {
      console.log("mudou: ", message)
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
      if (socketGame.connected) {
        socketGame.close()
      }
    }
  }, [socketGame])

  useEffect(() => {
    console.log("ALTEROU")
  }, [gameStats])

  function handleChangeTurn() {
    // call api to change turn
    getUpdateGame()
  }

  return (
    <>
      <TipsGridContainer>
        <TipsOffline turn={turn} color={"#eb37bc"} rest={pinkRest} />
        <GridOnline
          wordList={gameStats.game_state}
          roomCode={roomCode}
          sendMessage={sendMessage}
          turn={gameStats.turn}
          handleChangeTurn={handleChangeTurn}
        />
        <TipsOffline turn={!turn} color={"#3aa4ff"} rest={blueRest} />
      </TipsGridContainer>
      <button onClick={() => sendMessage()}>MUDAR</button>
    </>
  )
}
