const readline = require('readline-sync');

// r = rock, p = paper, s1 = scissors, l = lizard, s2 = spock
const VALID_CHOICES = ['r', 'p', 's1', 'l', 's2'];

function prompt(message) {
  console.log(`=> ${message}`);
}


function playerWins(choice, computerChoice) {
  return ((choice === 'r' && computerChoice === 's1') || (choice === 'p' && computerChoice === 'r') ||
  (choice === 's1' && computerChoice === 'p') || (choice === 'r' && computerChoice === 'l') ||
  (choice === 'l' && computerChoice === 's2') || (choice === 's2' && computerChoice === 's1') ||
  (choice === 's1' && computerChoice === 'l') || (choice === 'l' && computerChoice === 'p') ||
  (choice === 'p' && computerChoice === 's2') || (choice === 's2' && computerChoice === 'r'));
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
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

while (true) {
  prompt(`Choose one from ${VALID_CHOICES.join(', ')}, where r = rock, p = paper, s1 = scissors, l = lizard, s2 = spock`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let finalResult = displayWinner(choice, computerChoice);
  prompt(finalResult);

  if (playerWins(choice, computerChoice)) {
    myCount += 1;
  } else if (finalResult === 'Computer wins!') {
    computerCount += 1;
  }

  if (myCount === 3) {
    prompt('You are grand winner!');
    break;
  } else if ( computerCount === 3) {
    prompt('Computer is grand winner!');
    break;
  }
  prompt("Do you want to continue? (y/n)");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt ('Please enter "y" or "n"');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] === 'n') break;
}