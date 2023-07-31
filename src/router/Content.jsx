import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { OfflineGamePage } from "../components/Screens/OfflineGamePage"
import { Menu } from "../components/Screens/Menu"

export default function Content() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="offline" element={<OfflineGamePage />} />
        <Route path="online/:sala" element={<h1>Em implementação</h1>} />
        <Route path="*" element={<div>Error NOT Found</div>} />
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
