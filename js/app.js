/*-------------------------------- Constants --------------------------------*/
// const winningCombinations = [[sq0,sq1,sq2],
//                              [sq3,sq4,sq5],
//                              [sq6,sq7,sq8],
//                              [sq0,sq3,sq6],
//                              [sq1,sq4,sq7],
//                              [sq2,sq5,sq8],
//                              [sq0,sq4,sq8],
//                              [sq2,sq4,sq6]]

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


/*-------------------------------- Functions --------------------------------*/

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
      gameStatus.innerText = `The winner is PlayerX!`
      confetti.start(3000)
    }else if(winner === -1){
      gameStatus.className = "animate__animated animate__tada"
      gameStatus.innerText = `The winner is PlayerO!`
      confetti.start(3000)
    }else if(winner === "T"){
      gameStatus.innerText = `It is a tie!`
      gameStatus.className = "animate__animated animate__backInDown"
    }else{
      gameStatus.innerText = `It is ${turn === 1? "PlayerX" : "PlayerO"}'s turn!`
    }
}

function handleClick(evt){
  let clickedIdx = parseInt(evt.target.id.split('').splice(2))
  if(boardArray[clickedIdx]|| winner){
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