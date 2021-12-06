import React from 'react'

export default function WinLine(props) {
    let winLinePosition=props.winLinePosition;
    if(!winLinePosition){
        return null
    }
    if(winLinePosition[0]=="main-diagonal"||winLinePosition[0]=="reverse-diagonal"){
        return<div className={"win-line__"+winLinePosition[0]}></div>
    }
    if(winLinePosition[0]=="row"){
        return<div style={{top:(41+winLinePosition[1]*86    )+"px"}} className="win-line__row"></div>
    }
    if(winLinePosition[0]=="column"){
        return<div style={{left:(35+winLinePosition[1]*83    )+"px"}} className="win-line__column"></div>
    }
}
