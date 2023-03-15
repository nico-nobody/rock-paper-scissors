// Rock Paper Scissors against Computer

// 1: Get playerSelection from their button choice and initiate round.
let playerChoice;
const buttons = document.querySelectorAll('#weapons-container > button')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.id;
  })
})
const playBtn = document.querySelector('#play-rnd')
playBtn.addEventListener('click', () => {
  playRound(playerChoice);
})

// 2: Begin round with initializing computerSelection then compare selections, returning winner as outcome.
// Rock > Scissors
// Paper > Rock
// Scissors > Paper
function playRound(playerSelection) {
  let outcome;
  let computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    outcome = 'draw';
  } else if (playerSelection === 'rock') {
    outcome = computerSelection === 'scissors' ? 'player' : 'computer';
  } else if (playerSelection === 'paper') {
    outcome = computerSelection === 'rock' ? 'player' : 'computer';
  } else if (playerSelection === 'scissors') {
    outcome = computerSelection === 'paper' ? 'player' : 'computer';
  }
  const results = document.querySelector('#results');
  results.innerText = `Player: ${playerSelection}, Computer: ${computerSelection}\nRound: ${outcome}`;
  updateTotals(outcome);
}
function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

// 3: Add to each players win total.
// Over when first player to 5 points
let playerTotal = 0;
let computerTotal = 0;
function updateTotals(winner) {
  if (winner === 'player') playerTotal++;
  else if (winner === 'computer') computerTotal++;
  const totals = document.querySelector('#total-wins');
  totals.innerText = `Total wins:\nPlayer: ${playerTotal}, Computer: ${computerTotal}`;
}