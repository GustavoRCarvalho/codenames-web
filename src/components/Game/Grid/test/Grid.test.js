import { fireEvent, render, screen } from "@testing-library/react"
import { gridMockData } from "../../../../assets/gridMockData"
import { GridOffline } from "../GridOffline"

test("grid is showing 25 childrens cards", async () => {
  render(
    <GridOffline
      wordList={gridMockData}
      selected={[]}
      setSelected={() => {}}
      turn={true}
      handleChangeTurn={() => {}}
    />
  )

  const grid = await screen.findByTestId("grid")

  expect(grid.children.length).toBe(25)
})

test("if click button 'MOSTRAR TODOS' show all cards colors and if click again all card back to base color", async () => {
  render(
    <GridOffline
      wordList={gridMockData}
      selected={[]}
      setSelected={() => {}}
      turn={true}
      handleChangeTurn={() => {}}
    />
  )

  const gridItens = await screen.findAllByTestId("gridCell")
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

test("click button 'MOSTRAR TODOS' to show all cards colors and check the quantity of colors are pink = 9, blue = 8, white = 7 and black = 1", async () => {
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

  const gridItens = await screen.findAllByTestId("gridCell")
  gridItens.forEach((element, index) => {
    if (index < 9) {
      expect(element).toHaveStyleRule("background-color", "#eb37bc")
    } else if (index < 17) {
      expect(element).toHaveStyleRule("background-color", "#3aa4ff")
    } else if (index < 24) {
      expect(element).toHaveStyleRule("background-color", "#fff")
    } else {
      expect(element).toHaveStyleRule("background-color", "#121212")
    }
  })
})

test("click on card and expect to ", async () => {
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

  const gridItens = await screen.findAllByTestId("gridCell")
  gridItens.forEach((element, index) => {
    if (index < 9) {
      expect(element).toHaveStyleRule("background-color", "#eb37bc")
    } else if (index < 17) {
      expect(element).toHaveStyleRule("background-color", "#3aa4ff")
    } else if (index < 24) {
      expect(element).toHaveStyleRule("background-color", "#fff")
    } else {
      expect(element).toHaveStyleRule("background-color", "#121212")
    }
  })
})
