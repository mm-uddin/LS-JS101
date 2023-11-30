/*

Problem: Build a mortgage calculator (or car payment calculator)

You will need three pieces of information:
-the loan amount
-the Annual Percentage Rate (APR)
-the loan duration

From the above, you will need to calculate the following two things:
-monthly interest rate
-loan duration in months

You can use the following formula:

M = P (J / 1 - (1 + J)**N)

In JavaScript: let m = p * (j / (1 - Math.pow((1 + j), (-n))));

Here
m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months
*/

let loanAmount;
let annualPercentageRate;
let monthlyInterestRate;
let loanDurationYear;
let loanDurationMonth;

let readLine = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function inValidNumber (number) {
  // return number.trimStart() === '' || isNaN(Number(number));
  return number.trimStart() === ''  || Number.isNaN (Number(number));
}

prompt("What is the total loan amount? ");
loanAmount = readLine.question();

while (inValidNumber(loanAmount)) {
  prompt("That does not seem a valid loan amount, please re-enter");
  loanAmount = readLine.question();
}

prompt("What is the loan duration in years? ");
loanDurationYear = readLine.question();


while (inValidNumber(loanDurationYear)) {
  prompt("That does not seem a valid year, please re-enter");
  loanDurationYear = Number(readLine.question());

}

prompt("What is the yearly interest rate? ");
annualPercentageRate = readLine.question();


while (inValidNumber(annualPercentageRate)) {
  prompt("That does not seem a valid interest rate, please re-enter");
  annualPercentageRate = readLine.question();

}

loanAmount = parseInt(loanAmount, 10);
loanDurationMonth = parseInt((loanDurationYear * 12), 10);
monthlyInterestRate = parseFloat((annualPercentageRate / 100) / 12);

let monthlyPayment = loanAmount * (monthlyInterestRate
/ (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonth))));

console.log(`Monthly payment is: $${monthlyPayment.toFixed(2)}`);