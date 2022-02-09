#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomNum from '../../src/math.js';

function evenGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  const maxRounds = 3;
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(`${rule}`);
  let res = 0;
  while (res !== maxRounds) {
    const question = randomNum();
    const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() === rightAnswer) {
      console.log('Correct!');
      res += 1;
    }
    if (answer.toLowerCase() !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
evenGame();
