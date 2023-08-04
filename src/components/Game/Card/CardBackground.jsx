import { styled } from "styled-components"
import { handleClickCard } from "../Grid/gridCommon"

export const CardBackground = ({
  label,
  active,
  teamColor,
  turn,
  method,
  handleChangeTurn,
}) => {
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

  return (
    <Background
      data-testid={"gridCell"}
      $active={active}
      $color={color().color}
      onClick={() =>
        handleClickCard({
          active,
          teamColor,
          turn,
          method,
          handleChangeTurn,
        })
      }
    >
      <CardInside $active={active} $bordercolor={color().bordercolor}>
        <CardLabel>{label}</CardLabel>
      </CardInside>
    </Background>
  )
}

const Background = styled.div`
  background-color: ${(props) => (props.$active ? props.$color : "#474747")};
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5em;
  color: ${(props) =>
    props.$color === "#fff" && props.$active ? "#000" : "#fff"};

  cursor: pointer;

  @media (prefers-color-scheme: light) {
    background-color: ${(props) => (props.$active ? props.$color : "#ffdece")};
    color: ${(props) =>
      props.$color === "#fff" && props.$active
        ? "#000"
        : props.$active
        ? "#eeeeee"
        : "#000"};
  }
`

const CardInside = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  padding: 0.8em;
  margin: 0.8em;
  border-radius: 0.25em;

  background-color: #0002;
  border: 1px ${(props) => (props.$active ? props.$bordercolor : "#505050")}
    solid;
`

const CardLabel = styled.p`
  width: max-content;

  padding: 0;
  margin: 0;

  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`
