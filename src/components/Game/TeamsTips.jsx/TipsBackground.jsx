import { styled } from "styled-components"

export const TipsBackground = ({ color, rest, children }) => {
  return (
    <TipsContainer>
      <Title $color={color}>FALTAM: {rest}</Title>
      <Background $backgroundcolor={color}>
        <TipsListTitle id="tips">DICAS: </TipsListTitle>
        {children}
      </Background>
    </TipsContainer>
  )
}

const TipsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`

const Title = styled.h2`
  color: ${(props) => props.$color ?? "#fff"};
  margin: 0.9em;
  font-size: 1.4em;

  width: max-content;
`
const TipsListTitle = styled.label`
  color: #fff;
  margin: 0.9em;
  font-size: 1.4em;
  font-weight: bold;

  width: max-content;
`

const Background = styled.label`
  background-color: ${(props) => props.$backgroundcolor ?? "#474747"};
  width: 90%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0.5em;

  margin-inline: 1em;
`
