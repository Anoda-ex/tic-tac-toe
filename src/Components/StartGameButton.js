import React from 'react'

export default function StartGameButton(props) {
    return (
        <button className="start-game-button" onClick={props.startGame}>  
            Start game!
        </button>
    )
}
