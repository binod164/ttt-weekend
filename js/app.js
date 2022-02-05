/*-------------------------------- Constants --------------------------------*/
// const winningCombinations = [[sq0,sq1,sq2],
//                              [sq3,sq4,sq5],
//                              [sq6,sq7,sq8],
//                              [sq0,sq1,sq2],
//                              [sq0,sq1,sq2],
//                              [sq0,sq1,sq2],
//                              [sq0,sq1,sq2],
//                              [sq0,sq1,sq2]]

// console.log(winningCombinations)
/*---------------------------- Variables (state) ----------------------------*/
let boardArray, turn, winner;




/*------------------------ Cached Element References ------------------------*/

const squares = document.querySelectorAll(".sq");

const gameStatus = document.querySelector("#message");

const resetBtn = document.querySelector(".reset");

/*----------------------------- Event Listeners -----------------------------*/

squares.forEach(square => square.addEventListener('click', handleClick))
resetBtn.addEventListener('click', init);



/*-------------------------------- Functions --------------------------------*/

init()

function init(){
  boardArray = [null,null,null,null,null,null,null,null,null];
  turn = 1;
  winner = null;
  render();
  
}

function render(){
  boardArray.forEach(function(sqr,idx){
  if(sqr === 1){
    squares[idx].innerText = 'X';
  }else if(sqr === -1){
    squares[idx].innerText = 'O';
  }else if(sqr === null){
    squares[idx].innerText = '';
  }
  
})

  if (winner !== true) {
		gameStatus.innerText = `It is ${turn === 1? "PlayerX" : "PlayerO"}'s turn!`;
	}else if (winner === 'T') {
		gameStatus.innerText = `It is a tie!`;
	}else {
    gameStatus.innerText = `The winner is ${winner === 1 ? "PlayerX" : "PlayerO"}!`;
  }
}
