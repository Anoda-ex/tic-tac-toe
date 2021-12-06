import './App.css';
import React,{useState,useEffect} from "react"
import GameArena from './Components/GameArena';
import Score from './Components/Score';
import Modal from "./Components/Modal"
import StartModalContent from './Components/StartModalContent';
import DrawModal from './Components/DrawModal';
const initGameArena=[
  [0,0,0],
  [0,0,0],
  [0,0,0]
]
let checkGameStatus=(gameArena,playerCellType)=>{
  for(let i=0;i<3;i++){
    let checkPlayerWin=true
    let j;
    for(j=0;j<3;j++){
      checkPlayerWin=checkPlayerWin*(gameArena[i][j]==playerCellType)
    }
    if(checkPlayerWin){
      return ["row",i]
    }
  } 
  for(let i=0;i<3;i++){
    let checkPlayerWin=true
    let j;
    for(j=0;j<3;j++){
      checkPlayerWin=checkPlayerWin*(gameArena[j][i]==playerCellType)
    }
    if(checkPlayerWin){
      return ["column",i]
    }
  }
  let checkPlayerWin=true
  for(let i=0;i<3;i++){
    checkPlayerWin=checkPlayerWin*(gameArena[i][i]==playerCellType)
  }
  if(checkPlayerWin){
    return ["main-diagonal"]
  }
  checkPlayerWin=true
  for(let i=0;i<3;i++){
    checkPlayerWin=checkPlayerWin*(gameArena[2-i][i]==playerCellType)
  }
  if(checkPlayerWin){
    return ["reverse-diagonal"]
  }
}


function App() {
  const [gameArena,setGameArena] = useState(initGameArena)
  const [players,setPlayers] = useState([{name:"player1",score:0},{name:"player2",score:0}])
  const [playersCellTypes,setPlayersCellTypes] = useState([1,2])
  const [activePlayer,setActivePlayer] = useState(0)
  const [winLinePosition,setWinLinePosition] = useState(null)
  const [stopGame,setStopGame]=useState(false)
  const [startModal,setStartModal]=useState(false)
  const [gameDraw,setGameDraw]=useState(false)
  useEffect(() => {
    setStartModal(true)
  }, [])


  let moveHandler=(row,column)=>{
    let updateGameArena=[[...gameArena[0]],[...gameArena[1]],[...gameArena[2]]]
    while(!updateGameArena[row][column] && !stopGame){
      updateGameArena[row][column]=playersCellTypes[activePlayer]
      let winData=checkGameStatus(updateGameArena,playersCellTypes[activePlayer])
      if(winData){
        let updatePlayerData=[...players]
        updatePlayerData[activePlayer].score+=1
        setWinLinePosition(winData)
        setPlayers(updatePlayerData)
        setGameArena(updateGameArena)
        setActivePlayer(activePlayer?0:1)
        setStopGame(true)
      }else{
        let isCanContinueGame=false
        for(let i of updateGameArena){
          for(let j of i){
            if(!j){
              isCanContinueGame=true
            }
          }
        }
        if(!isCanContinueGame){
          setGameDraw(true)
        }
        if(updateGameArena)
        setGameArena(updateGameArena)
        setActivePlayer(activePlayer?0:1)
      }


    }

  }
  let startGame=()=>{
    setGameArena(initGameArena)
    setPlayersCellTypes([...playersCellTypes].reverse())
    setActivePlayer(activePlayer?0:1)
    setStopGame(false)
  }

  return (
    <div className="App">
      <GameArena gameArena={gameArena} moveHandler={moveHandler} winLinePosition={winLinePosition}></GameArena>
      <Score players={players} activePlayer={activePlayer}></Score>
      <Modal show={startModal} close={()=>{setStartModal(false)}}>
          <StartModalContent
            name1={players[0].name}
            name2={players[1].name}
            setPlayerNames={(name1,name2)=>{setPlayers([{name:name1,score:0},{name:name2,score:0}])}}
            startGame={startGame}
            close={()=>{setStartModal(false)}}>
            
          </StartModalContent>
      </Modal>
      <Modal show={gameDraw} close={()=>{setGameDraw(false)}}>
          <DrawModal
            close={()=>{setGameDraw(false)}}
            startGame={startGame}  >
          </DrawModal>
      </Modal>
    </div>
  );
}

export default App;
