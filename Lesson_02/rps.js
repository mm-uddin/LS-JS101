const readline = require('readline-sync');
const fs = require('fs');


// r = rock, p = paper, s1 = scissors, l = lizard, s2 = spock
const VALID_CHOICES = ['r', 'p', 's1', 'l', 's2'];
const MAX_WIN_NUMBER = 3;

function loadMessages(filePath) {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}
const messages = loadMessages('./messages.json');

function prompt(text) {
  console.log(`=> ${text}`);
}

function continueGamePlay() {
  prompt(messages.continue);
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt (messages.enter);
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
    result = messages.myWin;
  } else if ((choice === computerChoice) ) {
    result = messages.tie;
  } else {
    result = messages.compWin;
  }
  return result;
}


let myCount = 0;
let computerCount = 0;
let gameRound = 0;

while (true) {
  prompt(messages.welcome);
  prompt (messages.rule);

  prompt(`Choose one from ${VALID_CHOICES.join(', ')}, where r = rock, p = paper, s1 = scissors, l = lizard, s2 = spock`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(messages.notValid);
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
  } else if (finalResult === messages.compWin) {
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