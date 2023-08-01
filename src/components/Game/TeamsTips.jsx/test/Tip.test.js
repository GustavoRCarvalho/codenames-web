import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { TipsOffline } from "../TipsOffiline"

test("input is showing and starts with focus.", () => {
  render(<TipsOffline turn={false} color={"#eb37bc"} rest={9} />)

  const inputTip = screen.getByPlaceholderText("Insira a dica...")
  expect(inputTip).toHaveStyleRule("visibility", "hidden")
  // expect(inputTip).toHaveFocus()
})

test("when typing: 'word 1' and pressing enter on tip input, expect clean input.", () => {
  render(<TipsOffline turn={true} color={"#eb37bc"} rest={9} />)

  const inputTip = screen.getByPlaceholderText("Insira a dica...")

  fireEvent.change(inputTip, { target: { value: "word 1" } })
  expect(inputTip.value).toBe("word 1")

  fireEvent.keyDown(inputTip, { key: "Enter", code: "Enter", charCode: 13 })
  expect(inputTip.value).toBe("")
})

test("when typing: 'word 1' and pressing enter on tip input, expect to add tip to list on the format: 'WORD - 1'.", () => {
  render(<TipsOffline turn={true} color={"#eb37bc"} rest={9} />)

  const inputTip = screen.getByPlaceholderText("Insira a dica...")

  fireEvent.change(inputTip, { target: { value: "word 1" } })
  expect(inputTip.value).toBe("word 1")

  fireEvent.keyDown(inputTip, { key: "Enter", code: "Enter", charCode: 13 })

  const listTips = screen.getByRole("list", { name: /tips/i })
  expect(listTips.children).toHaveLength(1)

  const tipLabel = screen.getAllByRole("listitem")
  expect(tipLabel).toHaveLength(1)
  expect(tipLabel[0]).toHaveTextContent(/word - 1/i)
})
