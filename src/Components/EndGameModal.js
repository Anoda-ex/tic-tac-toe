import React from 'react'
import StartGameButton from './StartGameButton'
import Modal from "./Modal"
export default function EndGameModal(props) {
    let modalText=null
    switch (props.endGameResult) {
        case 1:
            modalText=props.players[0].name+" win!!!"
            break;
        case 2:
            modalText=props.players[1].name+" win!!!"
            break;
        case 3:
            modalText="Draw!!!"
            break;
        default:
            break;
    }
    return (
        <Modal show={props.endGameResult} close={props.startGame}>
            <div className="end-game-modal">
                <div className="end-game-modal__text">{modalText}</div>
                <StartGameButton startGame={props.startGame}></StartGameButton>
            </div>
        </Modal>
    )
}
