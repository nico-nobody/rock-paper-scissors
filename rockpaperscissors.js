// Rock Paper Scissors against Computer

// 1: Get random choice for computer
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

// 2: Prompt user for their choice
function getPlayerChoice() {
  let choice;
  do {
    let input = prompt('Choose: Rock, Paper, or Scissors?');
    choice = input.toLowerCase();
  } while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors');
  return choice;
}

// 3: Compare choices and display winner
// Rock > Scissors
// Paper > Rock
// Scissors > Paper
function playRound(playerSelection, computerSelection) {
  let outcome;
  
  if (playerSelection === computerSelection) {
    outcome = 'draw';
  } else if (playerSelection === 'rock') {
    outcome = computerSelection === 'scissors' ? 'player' : 'computer';
  } else if (playerSelection === 'paper') {
    outcome = computerSelection === 'rock' ? 'player' : 'computer';
  } else if (playerSelection === 'scissors') {
    outcome = computerSelection === 'paper' ? 'player' : 'computer';
  }

  return outcome;
}

//4: Play a game comprised of 5 rounds
function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    let winner = playRound(playerSelection, computerSelection);
    if (winner === 'player') playerPoints++;
    else if (winner === 'computer') computerPoints++;
    console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
  }
  return `Game. Player: ${playerPoints}, Computer: ${computerPoints}`;
}