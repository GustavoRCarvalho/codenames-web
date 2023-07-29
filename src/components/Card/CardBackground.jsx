import { styled } from "styled-components"
import { CardLabel } from "./CardLabel"

export const CardBackground = ({
  label,
  showAll,
  color,
  bordercolor,
  selected,
  setSelected,
}) => {
  const active = showAll ? true : selected.find((value) => value === label)

  function handleCardClick() {
    if (active) {
      console.log("click")
    } else {
      setSelected((values) => {
        return [...values, label]
      })
    }
  }

  return (
    <Background $active={active} $color={color} onClick={handleCardClick}>
      <CardInside $active={active} $bordercolor={bordercolor}>
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

  border: 1px ${(props) => (props.$active ? props.$bordercolor : "#505050")}
    solid;
`
