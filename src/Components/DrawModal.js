import React from 'react'
import StartGameButton from './StartGameButton'

export default function DrawModal(props) {
    return (
        <div className="draw-modal">
            <div className="draw-modal__text">Draw!!</div>
            <StartGameButton startGame={()=>{props.close();props.startGame()}}></StartGameButton>
        </div>
    )
}
