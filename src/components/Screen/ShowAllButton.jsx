import { styled } from "styled-components"

export const ShowAllButton = ({ showAll, setShowAll }) => {
  function handleClickShow() {
    setShowAll((value) => !value)
  }

  return (
    <Button type="button" onClick={handleClickShow}>
      {showAll ? "ESCONDER TODOS" : "MOSTRAR TODOS"}
    </Button>
  )
}

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  margin: 1em;

  &:hover {
    border-color: #646cff;
  }
`
