import './App.css';
import React,{useState,useEffect} from "react"
import GameArena from './Components/GameArena';
import Score from './Components/Score';
import StartGameModal from './Components/StartGameModal';
import DrawModal from './Components/EndGameModal';
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
  const [startModal,setStartModal]=useState(false)
  //1-first player, 2 - second player, 3-draw
  const [endGameResult,setEndGameResult]=useState(0)
  useEffect(() => {
    setStartModal(true)
  }, [])


  let moveHandler=(row,column)=>{
    let updateGameArena=[[...gameArena[0]],[...gameArena[1]],[...gameArena[2]]]
    while(!updateGameArena[row][column] && !endGameResult){
      updateGameArena[row][column]=playersCellTypes[activePlayer]
      let winData=checkGameStatus(updateGameArena,playersCellTypes[activePlayer])
      if(winData){
        let updatePlayerData=[...players]
        updatePlayerData[activePlayer].score+=1
        setWinLinePosition(winData)
        setPlayers(updatePlayerData)
        setGameArena(updateGameArena)
        setEndGameResult(activePlayer+1)
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
          setEndGameResult(3)
        }
        setGameArena(updateGameArena)
      }
      setActivePlayer(activePlayer?0:1)

    }

  }
  let startGame=()=>{
    setGameArena(initGameArena)
    let newPlayersCellTypes=[...playersCellTypes].reverse()
    setPlayersCellTypes(newPlayersCellTypes)
    setActivePlayer(newPlayersCellTypes[0]==1?0:1)
    setEndGameResult(0)
    setWinLinePosition(null)
  }

  return (
    <div className="App">
      <GameArena gameArena={gameArena} moveHandler={moveHandler} winLinePosition={winLinePosition}></GameArena>
      <Score players={players} activePlayer={activePlayer}></Score>
      <StartGameModal
        name1={players[0].name}
        name2={players[1].name}
        setPlayerNames={(name1,name2)=>{setPlayers([{name:name1,score:0},{name:name2,score:0}])}}
        startGame={startGame}
        show={startModal}
        close={()=>{setStartModal(false)}}>
      </StartGameModal>
      <DrawModal
        endGameResult={endGameResult}
        startGame={startGame}
        players={players}>
      </DrawModal>
    </div>
  );
}

export default App;
