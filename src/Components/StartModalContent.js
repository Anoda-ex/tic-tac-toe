import React,{useRef,useEffect} from 'react'
import Modal from './Modal'
import StartGameButton from './StartGameButton'
export default function StartModalContent(props) {
    const name1 = useRef(null)
    const name2 = useRef(null)
    useEffect(() => {
       name1.current.value=props.name1
       name2.current.value=props.name2
    }, [])
    let startGame=()=>{
        props.setPlayerNames(name1.current.value,name2.current.value)
        props.close()
    }
    return (
        <div className="start-modal">
            <div className="start-modal__wrapper">
                Player1 name:<input className="start-modal__input" ref={name1}></input>
            </div> 
            <div className="start-modal__wrapper">
                Player2 name:<input className="start-modal__input" ref={name2}></input>
            </div> 
            <StartGameButton startGame={startGame}></StartGameButton>
        </div>
    )
}
