const readline = require('readline-sync');
const fs = require('fs');

// r = rock, p = paper, s1 = scissors, l = lizard, s2 = spock
const VALID_CHOICES = ['r', 'p', 's1', 'l', 's2'];
const MAX_WIN_NUMBER = 3;

let playerWinCount = 0;
let computerWinCount = 0;
let playerChoice = '';
let computerChoice = '';
let finalResult = '';
let gameRound = 0;
let playerDecision = '';

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

function playerWins(playerChoice, computerChoice) {
  return ((playerChoice === 'r' && computerChoice === 's1') || (playerChoice === 'p' && computerChoice === 'r') ||
  (playerChoice === 's1' && computerChoice === 'p') || (playerChoice === 'r' && computerChoice === 'l') ||
  (playerChoice === 'l' && computerChoice === 's2') || (playerChoice === 's2' && computerChoice === 's1') ||
  (playerChoice === 's1' && computerChoice === 'l') || (playerChoice === 'l' && computerChoice === 'p') ||
  (playerChoice === 'p' && computerChoice === 's2') || (playerChoice === 's2' && computerChoice === 'r'));
}

function displayWinner(playerChoice, computerChoice) {
  if (playerWins(playerChoice, computerChoice)) {
    return messages.myWin;
  } else if ((playerChoice === computerChoice) ) {
    return messages.tie;
  } else {
    return messages.compWin;
  }
}

function finalDecision() {
  let gameDecision;
  if (playerWinCount === MAX_WIN_NUMBER) {
    prompt('You are grand-winner!');
    gameDecision = continueGamePlay();
    playerWinCount = 0;
    computerWinCount = 0;
  } else if (computerWinCount === MAX_WIN_NUMBER) {
    prompt('Computer is grand-winner!');
    gameDecision = continueGamePlay();
    playerWinCount = 0;
    computerWinCount = 0;
  }
  return gameDecision;
}

function winnerCount() {
  if (playerWins(playerChoice, computerChoice)) {
    playerWinCount += 1;
  } else if (finalResult === messages.compWin) {
    computerWinCount += 1;
  }
}

function displayResults() {
  prompt(`You chose ${playerChoice}, computer chose ${computerChoice} and ${finalResult}`);
  prompt(`Current game round is: ${gameRound}`);
  prompt(`You have won ${playerWinCount} time/s and Computer has won ${computerWinCount} time/s`);
}

function welcomeMessages() {
  prompt(messages.welcome);
  prompt (messages.rule);
  prompt(`Choose one from ${VALID_CHOICES.join(', ')}, where r = rock, p = paper, s1 = scissors, l = lizard, s2 = spock`);
}

function runProgram() {
  while (true) {
    welcomeMessages();
    playerChoice = readline.question().toLowerCase();
    while (!VALID_CHOICES.includes(playerChoice)) {
      prompt(messages.notValid);
      playerChoice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);

    computerChoice = VALID_CHOICES[randomIndex];
    finalResult = displayWinner(playerChoice, computerChoice);
    console.clear();
    gameRound += 1;
    winnerCount();
    displayResults();
    playerDecision = finalDecision();
    if (playerDecision === 'n') break;
  }
}

runProgram();