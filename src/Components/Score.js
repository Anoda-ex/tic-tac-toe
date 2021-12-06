import React from 'react'

export default function Score(props) {
    return (
        <div className="score">
            <h1 className="score__title">Score</h1>
            {props.players.map((player,playerIndex)=>{
                let classList=["score__data"]
                if(playerIndex==props.activePlayer){
                    classList.push("score__data--active")
                }
                return  <div key={playerIndex} className={classList.join(" ")}>{player.name}: {player.score}</div>
            })}
        </div>
    )
}
