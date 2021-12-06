import React from 'react'

export default function Cell(props) {
    let cellType=null
    if(props.cell==1){
        cellType=<span>&#10006;</span>
    }
    if(props.cell==2){
        cellType=<span>&#9675;</span>
    }
    return (
        <div className="cell" onClick={()=>{props.moveHandler(props.rowIndex,props.columnIndex)}}>
            {cellType}
        </div>
    )
}
