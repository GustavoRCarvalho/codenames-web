import { fireEvent, render, screen } from "@testing-library/react"
import { gridMockData } from "../../../../assets/gridMockData"
import { GridOffline } from "../GridOffline"

test("grid is showing 25 childrens cards", () => {
  render(
    <GridOffline
      wordList={gridMockData}
      selected={[]}
      setSelected={() => {}}
      turn={true}
      handleChangeTurn={() => {}}
    />
  )

  const grid = screen.getByTestId("grid")

  expect(grid.children.length).toBe(25)
})

test("if click button 'MOSTRAR TODOS' show all cards colors and if click again all card back to base color", () => {
  render(
    <GridOffline
      wordList={gridMockData}
      selected={[]}
      setSelected={() => {}}
      turn={true}
      handleChangeTurn={() => {}}
    />
  )

  const gridItens = screen.getAllByTestId("gridCell")
  expect(gridItens[0]).toHaveStyleRule("background-color", "#474747")

  const buttonShowAll = screen.getByRole("button", {
    name: "MOSTRAR TODOS",
  })

  fireEvent.click(buttonShowAll)

  expect(buttonShowAll).toHaveTextContent("ESCONDER TODOS")
  expect(gridItens[0]).not.toHaveStyleRule("background-color", "#474747")

  fireEvent.click(buttonShowAll)

  expect(buttonShowAll).toHaveTextContent("MOSTRAR TODOS")
  expect(gridItens[0]).toHaveStyleRule("background-color", "#474747")
})

test("click button 'MOSTRAR TODOS' to show all cards colors and check the quantity of colors are pink = 9, blue = 8, white = 7 and black = 1", () => {
  render(
    <GridOffline
      wordList={gridMockData}
      selected={[]}
      setSelected={() => {}}
      turn={true}
      handleChangeTurn={() => {}}
    />
  )

  const buttonShowAll = screen.getByRole("button", {
    name: "MOSTRAR TODOS",
  })

  fireEvent.click(buttonShowAll)

  const gridItens = screen.getAllByTestId("gridCell")
  gridItens.forEach((element, index) => {
    if (index < 9) {
      expect(element).toHaveStyleRule(
        "background-color",
        "var(--bg-color-pink)"
      )
    } else if (index < 17) {
      expect(element).toHaveStyleRule(
        "background-color",
        "var(--bg-color-blue)"
      )
    } else if (index < 24) {
      expect(element).toHaveStyleRule(
        "background-color",
        "var(--bg-color-white)"
      )
    } else {
      expect(element).toHaveStyleRule(
        "background-color",
        "var(--bg-color-black)"
      )
    }
  })
})
