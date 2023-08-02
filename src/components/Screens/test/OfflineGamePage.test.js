import { fireEvent, render, screen } from "@testing-library/react"
import { OfflineGamePage } from "../OfflineGamePage"
import { gameMockData } from "../../../assets/gridMockData"

test("click on card expect to change color", () => {
  render(<OfflineGamePage wordList={gameMockData} />)

  const gridItens = screen.getAllByTestId("gridCell")

  expect(gridItens[0]).toHaveStyleRule("background-color", "#474747")
  fireEvent.click(gridItens[0])

  expect(gridItens[0]).toHaveStyleRule("background-color", "#eb37bc")

  expect(gridItens[9]).toHaveStyleRule("background-color", "#474747")
  fireEvent.click(gridItens[9])

  expect(gridItens[9]).toHaveStyleRule("background-color", "#3aa4ff")

  expect(gridItens[17]).toHaveStyleRule("background-color", "#474747")
  fireEvent.click(gridItens[17])

  expect(gridItens[17]).toHaveStyleRule("background-color", "#fff")

  expect(gridItens[24]).toHaveStyleRule("background-color", "#474747")
  fireEvent.click(gridItens[24])

  expect(gridItens[24]).toHaveStyleRule("background-color", "#121212")
})
test("click on card expect to change color and if click again expect to stay with the same color", () => {
  render(<OfflineGamePage wordList={gameMockData} />)

  const gridItens = screen.getAllByTestId("gridCell")

  expect(gridItens[0]).toHaveStyleRule("background-color", "#474747")
  fireEvent.click(gridItens[0])

  expect(gridItens[0]).toHaveStyleRule("background-color", "#eb37bc")
  fireEvent.click(gridItens[0])

  expect(gridItens[0]).toHaveStyleRule("background-color", "#eb37bc")
})

test("click on turn button and expect to change to other team turn", () => {
  render(<OfflineGamePage wordList={gameMockData} />)

  const turnButton = screen.getByRole("button", { name: "Passar Turno" })

  expect(turnButton).toHaveStyleRule("background-color", "#eb37bc")

  fireEvent.click(turnButton)

  expect(turnButton).toHaveStyleRule("background-color", "#3aa4ff")
})

test("click on white card or another team card and expect to change to other team turn", () => {
  render(<OfflineGamePage wordList={gameMockData} />)

  const gridItens = screen.getAllByTestId("gridCell")

  const turnButton = screen.getByRole("button", { name: "Passar Turno" })

  expect(turnButton).toHaveStyleRule("background-color", "#eb37bc")

  fireEvent.click(gridItens[17])

  expect(turnButton).toHaveStyleRule("background-color", "#3aa4ff")

  fireEvent.click(gridItens[0])

  expect(turnButton).toHaveStyleRule("background-color", "#eb37bc")
})
