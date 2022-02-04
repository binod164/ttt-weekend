/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let boardArray, turn, winner;




/*------------------------ Cached Element References ------------------------*/
const squares = document.querySelectorAll(".sq")
// console.log(squares)

const gameStatus = document.querySelectorAll("#game-message")
// console.log(gameStatus)

// let reset = document.querySelector(".reset")
// console.log(reset)


/*----------------------------- Event Listeners -----------------------------*/
// squares.addEventListener("click",init)

// squares.addEventListener("click",function(evt){
// squares.innerHTML = "X"
// })

// reset.addEventListener("click",init){
// squares.innerHTML = ""
// }



/*-------------------------------- Functions --------------------------------*/
init()
// console.log(init())

function init(){
  boardArray = [null,null,null,null,null,null,null,null,null]
  playerX = 1;
  playerO = -1;
  winner = null;
  render();
}

function render(){
  boardArray.forEach(function(square){

  })
