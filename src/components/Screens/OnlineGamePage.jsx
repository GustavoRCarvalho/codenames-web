import axios from "axios"
import { GameContainer } from "../Game/GameContainer"
import { useState, useEffect } from "react"
import { io } from "socket.io-client"

const socketGame = io("https://codenames-bd.adaptable.app")
socketGame.connect()

export const OnlineGamePage = () => {
  const [gameStats, setGameStats] = useState({})
  const session = "594dac"

  function sendMessage(e) {
    e.preventDefault()

    socketGame.emit("change-game", session)
  }

  const getChangeGame = ({ controller }) => {
    axios
      .get("https://codenames-bd.adaptable.app/game/594dac", {
        signal: controller.signal,
      })
      .then(({ data }) => {
        setGameStats(data)
      })
  }

  useEffect(() => {
    const controller = new AbortController()
    socketGame.emit("add-player", session)

    function onChangeGame({ message }) {
      console.log("mudou: ", message)
      getChangeGame({ controller: controller })
    }
    // function onConnect() {
    //   console.log("conectou")
    // }
    // function onDisconnect() {
    //   console.log("desconectou")
    // }

    socketGame.on("change-game", onChangeGame)
    // socketGame.on("connect", onConnect)
    // socketGame.on("disconnect", onDisconnect)

    return () => {
      controller.abort()
      // socketGame.off("connect", onConnect)
      // socketGame.off("disconnect", onDisconnect)
    }
  }, [socketGame])

  useEffect(() => {
    console.log("ALTEROU")
  }, [gameStats])

  // const [isConnected, setIsConnected] = useState(socketGame)
  // const [fooEvents, setFooEvents] = useState(socketGame.connected)

  // useEffect(() => {
  //   function onConnect() {
  //     setIsConnected(true)
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false)
  //   }

  //   function onFooEvent(value) {
  //     setFooEvents((previous) => [...previous, value])
  //   }

  //   socketGame.on("connect", onConnect)
  //   socketGame.on("disconnect", onDisconnect)
  //   socketGame.on("foo", onFooEvent)

  //   return () => {
  //     socketGame.off("connect", onConnect)
  //     socketGame.off("disconnect", onDisconnect)
  //     socketGame.off("foo", onFooEvent)
  //   }
  // }, [])

  return (
    <GameContainer>
      {/* LIGADO: {toString(isConnected)} <br />
      fooEvents: {toString(fooEvents)} */}
      <button onClick={sendMessage}>MUDAR</button>
      {JSON.stringify(gameStats)}
    </GameContainer>
  )
}
