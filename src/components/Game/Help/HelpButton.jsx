import { useState } from "react"
import { styled } from "styled-components"
import { Help } from "./Help"
import { ToolTipCustom } from "../../common/ToolTipCustom"

export const HelpButton = () => {
  const [modal, setModal] = useState(false)
  const [helpToolTip, setHelpToolTip] = useState(true)

  const handleClickClose = () => {
    setModal(false)
  }

  return (
    <>
      {!modal && (
        <Button
          onMouseOver={() => setHelpToolTip(true)}
          onMouseLeave={() => setHelpToolTip(false)}
          data-tooltip-id="HelpButton"
          onClick={() => setModal(true)}
        >
          i
        </Button>
      )}
      <ToolTipCustom
        isOpen={helpToolTip}
        id="HelpButton"
        place="left"
        content={"Precisa de ajuda?"}
      />
      <Modal $show={modal}>
        {modal && <Button onClick={handleClickClose}>X</Button>}
        <Help />
      </Modal>
    </>
  )
}

const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;

  background-color: #350039;
  right: 2.5%;
  top: 5%;
  overflow-y: auto;
  overflow-x: hidden;

  border-radius: ${(props) => (props.$show ? "1em" : "50%")};

  width: ${(props) => (props.$show ? "95%" : "0px")};
  height: ${(props) => (props.$show ? "90%" : "0px")};
  z-index: 1;

  transform: ${(props) => (props.$show ? "translate(0,0%)" : "translate(0,0)")};

  transition: transform 500ms ease, width 500ms ease, height 500ms ease,
    border-radius 500ms ease;

  &::-webkit-scrollbar {
    width: 0px;
  }
  @media (prefers-color-scheme: light) {
    background-color: #fde5ff;
  }
`

const Button = styled.button`
  position: absolute;
  z-index: 1;

  background-color: var(--bg-color-button-dark);

  right: 2em;
  top: 2em;

  width: 2.5em;
  height: 2.5em;

  border-radius: 50%;

  border: 1px solid transparent;
  cursor: pointer;
  padding: 0;
  transition: box-shadow 200ms;

  &:hover {
    box-shadow: ${(props) =>
      props.disabled
        ? "transparent"
        : "0px 0px 20px 5px var(--border-color-button-dark)"};
  }

  @media (prefers-color-scheme: light) {
    color: var(--color-button-light);
    background-color: var(--bg-color-button-light);

    &:hover {
      box-shadow: ${(props) =>
        props.disabled
          ? "transparent"
          : "0px 0px 20px 5px var(--border-color-button-light)"};
    }
  }
`
