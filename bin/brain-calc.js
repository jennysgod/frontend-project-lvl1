#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomNum from '../src/math.js';

function calcGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  const maxRounds = 3;
  const rule = 'What is the result of the expression?';
  console.log(`${rule}`);
  let res = 0;
  const calc = (num1, num2, randomSym) => {
    let calcRes;
    if (randomSym === '+') {
      calcRes = num1 + num2;
    }
    if (randomSym === '-') {
      calcRes = (num1 - num2);
    }
    if (randomSym === '*') {
      calcRes = (num1 * num2);
    }
    return calcRes;
  };
  while (res !== maxRounds) {
    const num1 = randomNum();
    const num2 = randomNum();
    const sym = ['+', '-', '*'];
    const randomSym = sym[Math.floor(Math.random() * sym.length)];
    const question = `${num1} ${randomSym} ${num2}`;
    const rightAnswer = String(calc(num1, num2, randomSym));
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      res += 1;
    }
    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
calcGame();
