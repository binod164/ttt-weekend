/*-------------------------------- Constants --------------------------------*/
const winningCombinations = [[0,1,2],
                             [3,4,5],
                             [6,7,8],
                             [0,3,6],
                             [1,4,7],
                             [2,5,8],
                             [0,4,8],
                             [2,4,6]]

/*---------------------------- Variables (state) ----------------------------*/
let boardArray
let turn
let winner




/*------------------------ Cached Element References ------------------------*/

const squares = document.querySelectorAll(".sq")

const gameStatus = document.querySelector("#message")

const resetBtn = document.querySelector(".reset")

/*----------------------------- Event Listeners -----------------------------*/

squares.forEach(square => square.addEventListener('click', handleClick))

resetBtn.addEventListener('click', init)


// /*-------------------------------- Functions --------------------------------*/

init();

function init(){
  gameStatus.className = ""
  boardArray = [null,null,null,null,null,null,null,null,null]
  turn = 1
  winner = null
  render()
}

function render(){
  boardArray.forEach(function(sqr,idx){
    if(sqr === 1){
      squares[idx].innerText = 'X'
    }else if(sqr === -1){
      squares[idx].innerText = 'O'
    }else if(sqr === null){
      squares[idx].innerText = ''
    }
  })
    if(winner === 1){
      gameStatus.className = "animate__animated animate__tada"
      gameStatus.innerText = `PlayerX wins!`
      confetti.start(2000)
    }else if(winner === -1){
      gameStatus.className = "animate__animated animate__tada"
      gameStatus.innerText = `PlayerO wins!`
      confetti.start(2000)
    }else if(winner === "T"){
      gameStatus.innerText = `It is a tie!`
      gameStatus.className = "animate__animated animate__backInDown"
    }else{
      gameStatus.innerText = `It is ${turn === 1? "PlayerX" : "PlayerO"}'s turn!`
    }
  }

function handleClick(evt){
  let clickedIdx = parseInt(evt.target.id.split('').splice(2))
  if(boardArray[clickedIdx]!==null || winner!==null){
    return
  }
  boardArray[clickedIdx] = turn;
  turn = turn * -1
  winner = getWinner()
  render()
  
}

function getWinner(){
  if(Math.abs(boardArray[0] + boardArray[1] + boardArray[2]) === 3){
    return boardArray[0];
  }
  if(Math.abs(boardArray[3] + boardArray[4] + boardArray[5]) === 3){
    return boardArray[3]
  }
  if(Math.abs(boardArray[6] + boardArray[7] + boardArray[8]) === 3){ 
    return boardArray[6]
  }
  if(Math.abs(boardArray[0] + boardArray[3] + boardArray[6]) === 3){ 
    return boardArray[0]
  }
  if(Math.abs(boardArray[1] + boardArray[4] + boardArray[7]) === 3){ 
    return boardArray[1]
  }
  if(Math.abs(boardArray[2] + boardArray[5] + boardArray[8]) === 3){ 
    return boardArray[2]
  }
  if(Math.abs(boardArray[0] + boardArray[4] + boardArray[8]) === 3){ 
    return boardArray[0]
  }
  if(Math.abs(boardArray[2] + boardArray[4] + boardArray[6]) === 3){
    return boardArray[2]
  }
  if (boardArray.includes(null)) {
    return null
  }else{
    return "T"
  }

}