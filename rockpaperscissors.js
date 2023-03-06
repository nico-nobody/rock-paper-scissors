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
// 3: Compare choices and decide winner
// 4: Display winner and results