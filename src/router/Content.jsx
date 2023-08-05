import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { OfflineGamePage } from "../components/Screens/OfflineGamePage"
import { Menu } from "../components/Screens/Menu"
import { wordList } from "../assets/FakeApiGrid"
import { OnlineGamePage } from "../components/Screens/OnlineGamePage"
import { Room } from "../components/Menu/Room"
import { NotFound } from "../components/Screens/NotFound"
import { Help } from "../components/Game/Help/Help"

export default function Content() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route
          path="offline"
          element={<OfflineGamePage wordList={wordList()} />}
        />
        <Route path="online" element={<Room />} />
        <Route path="help" element={<Help />} />
        <Route path="online/:sala" element={<OnlineGamePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
