import React from 'react'

export default function Modal(props) {
    let modalClassList=["modal"]
    if(props.show){
        modalClassList.push("modal--active")
    }
    return (
        <React.Fragment>  
            {props.show&&<div className="backdrop" onClick={props.close}></div>}
            <div className={modalClassList.join(" ")}>
                {props.children}
            </div>
        </React.Fragment>
    )
}
