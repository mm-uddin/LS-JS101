const readline = require('readline-sync');

// r = rock, p = paper, s1 = scissors, l = lizard, s2 = spock
const VALID_CHOICES = ['r', 'p', 's1', 'l', 's2'];
const MAX_WIN_NUMBER = 3;

function prompt(message) {
  console.log(`=> ${message}`);
}

function continueGamePlay() {
  prompt("Do you want to continue? (y/n)");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt ('Please enter "y" or "n"');
    answer = readline.question().toLowerCase();
  }
  return answer[0];
}

function playerWins(choice, computerChoice) {
  return ((choice === 'r' && computerChoice === 's1') || (choice === 'p' && computerChoice === 'r') ||
  (choice === 's1' && computerChoice === 'p') || (choice === 'r' && computerChoice === 'l') ||
  (choice === 'l' && computerChoice === 's2') || (choice === 's2' && computerChoice === 's1') ||
  (choice === 's1' && computerChoice === 'l') || (choice === 'l' && computerChoice === 'p') ||
  (choice === 'p' && computerChoice === 's2') || (choice === 's2' && computerChoice === 'r'));
}

function displayWinner(choice, computerChoice) {

  let result = '';
  if (playerWins(choice, computerChoice)) {
    result = "You win!";
  } else if ((choice === computerChoice) ) {
    result = "It's a tie";
  } else {
    result = "Computer wins!";
  }
  return result;
}


let myCount = 0;
let computerCount = 0;
let gameRound = 0;

while (true) {
  prompt("Welcome to rock-paper-scissor-lizard-spock game!");
  prompt (`Here is how the rule works- '->' means beats; scissor -> paper, paper -> rock, rock -> lizard 
    lizard -> spock, spock -> scissor, scissor -> lizard, lizard -> paper, paper -> spock, spock -> rock
    rock -> scissor`);

  prompt(`Choose one from ${VALID_CHOICES.join(', ')}, where r = rock, p = paper, s1 = scissors, l = lizard, s2 = spock`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let finalResult = displayWinner(choice, computerChoice);
  prompt(finalResult);
  console.clear();
  gameRound += 1;

  if (playerWins(choice, computerChoice)) {
    myCount += 1;
  } else if (finalResult === 'Computer wins!') {
    computerCount += 1;
  }
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  prompt(`Current game round is: ${gameRound}`);
  prompt(`You have won ${myCount} time/s and Computer has won ${computerCount} time/s`);

  if (myCount === MAX_WIN_NUMBER) {
    prompt('You are grand-winner!');
    let gameDecision = continueGamePlay();
    if (gameDecision === 'n') break;
  } else if (computerCount === MAX_WIN_NUMBER) {
    prompt('Computer is grand-winner!');
    let gameDecision = continueGamePlay();
    if (gameDecision === 'n') break;
  }
}