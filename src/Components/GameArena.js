import React from 'react'
import Cell from './Cell'
import WinLine from './WinLine'

export default function GameArena(props) {
    return (
        <div className="game-arena__wrapper">
            <WinLine winLinePosition={props.winLinePosition}></WinLine>
            <div className="game-arena">

                {props.gameArena.map((row,rowIndex)=>{
                    return <div key={rowIndex} className="row">
                        {row.map((cell,columnIndex)=>{
                            return <Cell key={columnIndex} cell={cell} rowIndex={rowIndex} columnIndex={columnIndex} moveHandler={props.moveHandler}></Cell>
                        })}
                        </div>
                })}
            </div>
                

        </div>
    )
}
