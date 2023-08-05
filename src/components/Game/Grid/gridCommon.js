export function column({ wordList }) {
  let columnsNumber = Math.sqrt(wordList.length)
  if (Number.isInteger(columnsNumber)) {
    let columnslabel = ""
    for (var i = 0; i < columnsNumber; i++) {
      columnslabel += "10em "
    }
    return columnslabel
  }
  return "12em 12em 12em 12em 12em"
}

export function handleClickCard({
  active,
  teamColor,
  turn,
  setShowAll = () => {},
  method = () => {},
  handleChangeTurn = () => {},
}) {
  if (!active) {
    method()
  }
  if (teamColor === "white") {
    handleChangeTurn()
  } else if (teamColor === "blue" && turn) {
    handleChangeTurn()
  } else if (teamColor === "pink" && !turn) {
    handleChangeTurn()
  } else if (teamColor === "black") {
    setShowAll(true)
  }
}
