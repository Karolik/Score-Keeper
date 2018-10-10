//Define variables
const p1Button = document.querySelector(".p1");
const p2Button = document.querySelector(".p2");
const reset = document.querySelector(".reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;

//Click event for player 1 button
p1Button.addEventListener("click", function(){
  p1Score++;  //Increment the score
  console.log(p1Score);
  p1Display.textContent = p1Score;  //Display the score on the top
})

//Click event for player 2 button
p2Button.addEventListener("click", function(){
  p2Score++; //Increment the score
  console.log(p2Score);
  p2Display.textContent = p2Score;  //Display the score on the top
})

//Reset the game
reset.addEventListener("click", function(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
})
