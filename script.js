
/**
 * This holds the total scores of both the player and the computer.
 */
 const totalScores = {computer: 0, player: 0}

/**
 * This function gets the random choice of the computer and returns one of the choices
 * of "Rock", "Paper", or "Scissors"
 */
function getComputerChoice(){
  const choice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return choice[randomNumber]
}

/**
    * @param  playerChoice 
    * @param  computerChoice 
    * @returns - returns the result of -1, 0, or 1 based on who won or if it is a tie
    * 
    * This function compares the picks of Rock, Paper, or Scissors
    *  and returns the score based on these picks. Also updates the total scores.
 */

function getResult(playerChoice, computerChoice) {
  let score;
  if(playerChoice === computerChoice){
    score = 0
  }else if(playerChoice === 'Scissors' && computerChoice === 'Rock'){
    score = -1
    totalScores['computer']++
  }else if(playerChoice === 'Paper' && computerChoice === 'Scissors'){
    score = -1
    totalScores['computer']++
  }else if(playerChoice === 'Rock' && computerChoice === 'Paper'){
    score = -1
    totalScores['computer']++
  }else{
    score = 1
    totalScores['player']++
  }
  return score
}

/**
 * 
 * @param score - instant score
 * @param  playerChoice - It could one of Rock, Paper, or Scissors
 * @param  computerChoice - It could also be one of Rock, Paper, or Scissors
 * 
 * This function takes instant score, player's choice, and the computer's choice and
 * shows if it is a draw, win, or loss based on the score. If score = -1, it is a loss.
 * If it is 1, it is a win, and if 0 it is a tie.
 */
function showResult(score, playerChoice, computerChoice) {

  let resultDiv = document.getElementById('result')
  let handsDiv = document.getElementById('hands')
  let playerScoreDiv = document.getElementById('player-score')
  if(score === -1){
    resultDiv.innerText = 'You Lose!'
  }else if(score === 0){
    resultDiv.innerText = 'Its a tie'
  }else{
    resultDiv.innerText = 'You Won!'
  }
  playerScoreDiv.innerText = `Human Score: ${totalScores['player']} Computer Score: ${totalScores['computer']}`
  handsDiv.innerText = `Human: ${playerChoice} vs Computer: ${computerChoice}`
}

/**
 * 
 * @param playerChoice 
 * This function displays the result based on which button is clicked.
 */
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)
  showResult(score,playerChoice.value, computerChoice)
}

/**
 * This function listens for the click from the user and performed associated tasks once
 * the click is detected.
 */
function playGame() {
  //This selects all of the three buttons
    const rpsBtns = document.querySelectorAll('.rpsButton')
    rpsBtns.forEach(btn =>{
        btn.onclick = () => onClickRPS(btn)
    })

  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}

/**
 * This function clears all the text and scores from the screen
 */
function endGame() {
    let resultDiv = document.getElementById('result')
    let handsDiv = document.getElementById('hands')
    let playerScoreDiv = document.getElementById('player-score')
    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
  
}

playGame()
