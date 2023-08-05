import { styled } from "styled-components"
import { ContentContainer } from "../../common/ContentLimit"

import cronometroImage from "../../../assets/images/cronometroImage.png"
import dicasImage from "../../../assets/images/dicasImage.png"
import gameImage from "../../../assets/images/gameImage.png"
import gamePlayed from "../../../assets/images/gamePlayed.png"

export const Help = () => {
  return (
    <HelpContainer>
      <HelpTitle>Guess the Word?</HelpTitle>
      <HelpParagraph>
        Guess the Word é uma experiência divertida de adivinhação, ideal para
        jogar em grupo! Nele, dois jogadores formam equipes para dar dicas sobre
        25 (vinte e cinco) palavras, com o objetivo de ajudar seus companheiros
        a acertarem as palavras da equipe. Prepare-se para momentos emocionantes
        e muita diversão garantida!
      </HelpParagraph>
      <HelpTitle>Como Jogar?</HelpTitle>
      <HelpParagraph>
        - Pimeiramente, o grupo deve eleger 2 (dois) jogadores para serem os
        Word Masters, responsáveis por desempenharem o papel crucial de dar as
        dicas.
      </HelpParagraph>
      <HelpParagraph>
        - Fique de olho no cronometro! Pois ele indica o tempo restante para
        cara time dar as dicas e chutar as palavras. Ao final do tempo, o
        cronometro reinicia e o turno passa para outra equipe.
      </HelpParagraph>
      <HelpParagraph>
        - O Word Master do time rosa, que é o primeiro time a jogar, tem a
        tarefa de escrever uma dica para um grupo de palavras, enquanto sua
        equipe se dedica a adivinhá-las.
      </HelpParagraph>
      <RulesWrapper>
        <RulesLabels>
          <HelpTitle>Regras:</HelpTitle>
          <RulesHelpParagraph>
            1. Número de jogadores: No mínimo 4 (quatro);
          </RulesHelpParagraph>
          <RulesHelpParagraph>
            2. Cada time tem 4 (quatro) minutos por turno;
          </RulesHelpParagraph>
          <RulesHelpParagraph>
            3. Cada time deve dar apenas 1 (uma) dica por rodada;
          </RulesHelpParagraph>
          <RulesHelpParagraph>
            4. Os times podem chutar quantas palavras quiserem na sua rodada;
          </RulesHelpParagraph>
          <RulesHelpParagraph>
            5. Caso seja selecionada uma carta branca ou uma carta do time
            adversário, será considerado um erro, e o turno será automaticamente
            passado;
          </RulesHelpParagraph>
          <RulesHelpParagraph>
            6. A carta preta não pode ser selecionada, caso seja, o time
            adversário vencerá;
          </RulesHelpParagraph>
        </RulesLabels>
        <RulesImages>
          <RuleBlock src={gameImage} />
          <RuleBlock src={gamePlayed} />
          <RuleBlock src={dicasImage} />
          <RuleBlock src={cronometroImage} />
        </RulesImages>
      </RulesWrapper>
    </HelpContainer>
  )
}

const RuleBlock = styled.img`
  width: 100%;
  background: linear-gradient(
    to right,
    var(--bg-color-pink),
    var(--bg-color-blue)
  );

  border: 1px solid transparent;
  border-radius: 0.5em;

  @media screen and (max-width: 1024px) {
    width: 70vw;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`

const RulesLabels = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`

const RulesImages = styled.div`
  display: grid;

  gap: 1em;

  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

const RulesWrapper = styled.div`
  display: grid;
  width: 80%;

  grid-template-columns: 50% 50%;

  @media screen and (max-width: 1024px) {
    width: auto;
    display: flex;

    flex-direction: column;
  }
`

const HelpTitle = styled.h1`
  margin: 0;
  font-size: 3em;

  background: linear-gradient(
    to right,
    var(--bg-color-pink),
    var(--bg-color-blue)
  );
  -webkit-background-clip: text;

  color: transparent;
`

const HelpParagraph = styled.p`
  margin: 0;
  margin-block: 1em;

  width: 70%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

const RulesHelpParagraph = styled(HelpParagraph)`
  text-align: start;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`

const HelpContainer = styled(ContentContainer)`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 1em;
  margin-bottom: 3em;
`
