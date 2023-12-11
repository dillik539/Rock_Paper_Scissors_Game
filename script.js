

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
    *  and returns the score based on these picks.
 */

function getResult(playerChoice, computerChoice) {
  let score;
  if(playerChoice === computerChoice){
    score = 0
  }else if(playerChoice === 'Scissors' && computerChoice === 'Rock'){
    score = -1
  }else if(playerChoice === 'Paper' && computerChoice === 'Scissors'){
    score = -1
  }else if(playerChoice === 'Rock' && computerChoice === 'Paper'){
    score = -1
  }else{
    score = 1
  }
  return score
}

//showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice
/**
 * 
 * @param {*} score 
 * @param {*} playerChoice 
 * @param {*} computerChoice 
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
  playerScoreDiv.innerText = `${Number(playerScoreDiv.innerText) + score}`
  handsDiv.innerText = `Human: ${playerChoice} vs Computer: ${computerChoice}`
}

// Calculate who won and show it on the screen
function onClickRPS(playerChoice) {
  console.log({playerChoice})
  const computerChoice = getComputerChoice()
  console.log({computerChoice})
  const score = getResult(playerChoice.value, computerChoice)
  totalScores['player'] += score
  showResult(score,playerChoice.value, computerChoice)
}


// Make the buttons actively listen for a click and do something once a click is detected
function playGame() {
  // use querySelector to select all RPS Buttons
    const rpsBtns = document.querySelectorAll('.rpsButton')
    rpsBtns.forEach(btn =>{
        btn.onclick = () => onClickRPS(btn)
    })
 
  //Add a click listener to the end game button that runs the endGame() function on click
  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}

//endGame function clears all the text on the Screen
function endGame() {
    let resultDiv = document.getElementById('result')
    let handsDiv = document.getElementById('hands')
    let playerScoreDiv = document.getElementById('player-score')
    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
  
}

playGame()
