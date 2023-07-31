import { BrowserRouter } from "react-router-dom"
import Content from "./router/Content"

export const App = () => {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  )
}
