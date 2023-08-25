import { axiosKit as axios } from "../../Axios/Axios"
import { useState, useEffect } from "react"
import { io } from "socket.io-client"
import { TipsGridContainer } from "../Game/TipsGridContainer"
import { GridOnline } from "../Game/Grid/GridOnline"
import { useLocation } from "react-router-dom"
import { BaseURL } from "../../Axios/Axios"
import { Stopwatch } from "../Game/Stopwatch"
import { ContentContainer } from "../common/ContentLimit"
import { NextTurnButton } from "../Game/NextTurnButton"
import { TipsOnline } from "../Game/TeamsTips.jsx/TipsOnline"

const socketGame = io(BaseURL)

export const OnlineGamePage = () => {
  const path = useLocation()
  const roomCode = path.pathname.split(":")[1]
  const [gameStats, setGameStats] = useState({})
  const [tips, setTips] = useState([])
  const boolTurn = gameStats?.turn === "pink" ? true : false

  const sendMessage = () => {
    socketGame.emit("change-game", roomCode)
  }

  const sendTip = () => {
    socketGame.emit("add-hint", roomCode)
  }

  const getUpdateTips = ({ controller }) => {
    axios
      .get(`hints/${roomCode}`, {
        signal: controller.signal,
      })
      .then(({ data: { hints } }) => {
        let pinkTips = []
        let blueTips = []
        hints.map(({ team, text }) => {
          if (team === "pink") {
            pinkTips = [...pinkTips, text]
          } else {
            blueTips = [...blueTips, text]
          }
        })
        setTips({ pink: pinkTips, blue: blueTips })
      })
  }

  const getUpdateGame = ({ controller }) => {
    axios
      .get(`game/${roomCode}`, {
        signal: controller.signal,
      })
      .then(({ data }) => {
        setGameStats(data)
      })
  }

  useEffect(() => {
    const controller = new AbortController()
    socketGame.connect()
    socketGame.emit("add-player", roomCode)

    getUpdateGame({ controller: controller })
    getUpdateTips({ controller: controller })

    return () => {
      controller.abort()
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    function onChangeGame() {
      getUpdateGame({ controller: controller })
    }

    function onChangeTips() {
      getUpdateTips({ controller: controller })
    }

    function onConnect() {}

    function onDisconnect() {}

    socketGame.on("get-game", onChangeGame)
    socketGame.on("get-hints", onChangeTips)
    socketGame.on("connect", onConnect)
    socketGame.on("disconnect", onDisconnect)

    return () => {
      controller.abort()
      socketGame.off("connect", onConnect)
      socketGame.off("disconnect", onDisconnect)
    }
  }, [socketGame])

  function handleChangeTurn() {
    putChangeGame({ turn: gameStats.turn === "pink" ? "blue" : "pink" })
  }

  const putChangeGame = ({ turn }) => {
    const payload = { turn: turn }

    function onSucess() {
      sendMessage()
    }

    function onFailure() {}

    axios.put(`game/${roomCode}`, payload).then(onSucess).catch(onFailure)
  }

  return (
    <>
      <Stopwatch
        time={gameStats.timer}
        turn={boolTurn}
        handleChangeTurn={handleChangeTurn}
      />
      <TipsGridContainer>
        <TipsOnline
          tips={tips.pink}
          roomCode={roomCode}
          sendTip={sendTip}
          turn={boolTurn}
          team={"pink"}
          color={"var(--bg-color-pink)"}
          rest={gameStats.rest_pink}
        />
        <GridOnline
          wordList={gameStats.game_state}
          roomCode={roomCode}
          sendMessage={sendMessage}
          turn={boolTurn}
          turnTeam={gameStats.turn}
          handleChangeTurn={handleChangeTurn}
        />
        <TipsOnline
          tips={tips.blue}
          roomCode={roomCode}
          sendTip={sendTip}
          turn={!boolTurn}
          team={"blue"}
          color={"var(--bg-color-blue)"}
          rest={gameStats.rest_blue}
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
