import { styled } from "styled-components"
import { CardLabel } from "./CardLabel"

export const CardBackground = ({
  label,
  showAll,
  teamColor,
  selected,
  setSelected,
}) => {
  const active = showAll ? true : selected.find((value) => value === label)
  const color = () => {
    switch (teamColor) {
      case "pink":
        return {
          color: "#eb37bc",
          bordercolor: "#b4298f",
        }
      case "blue":
        return {
          color: "#3aa4ff",
          bordercolor: "#2967b4",
        }
      case "white":
        return {
          color: "#fff",
          bordercolor: "#2c2c2c",
        }
      default:
        return {
          color: "#121212",
          bordercolor: "#ffeb00",
        }
    }
  }

  function handleCardClick() {
    if (!active) {
      setSelected((values) => {
        return [...values, label]
      })
    }
  }

  return (
    <Background
      $active={active}
      $color={color().color}
      onClick={handleCardClick}
    >
      <CardInside $active={active} $bordercolor={color().bordercolor}>
        <CardLabel>{label}</CardLabel>
      </CardInside>
    </Background>
  )
}

const Background = styled.div`
  background-color: ${(props) => (props.$active ? props.$color : "#474747")};
  flex: 1;

  padding: 1em;
  border-radius: 0.5em;
  color: ${(props) =>
    props.$color === "#fff" && props.$active ? "#000" : "#fff"};

  cursor: pointer;
`

const CardInside = styled.div`
  flex: 1;

  padding: 1em;
  border-radius: 0.25em;

  background-color: #0002;
  border: 1px ${(props) => (props.$active ? props.$bordercolor : "#505050")}
    solid;
`
