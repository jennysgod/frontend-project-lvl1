#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomNum from '../../src/math.js';

function primeGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  const maxRounds = 3;
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(`${rule}`);
  let res = 0;
  const isPrime = (x) => {
    if (x < 2) {
      return false;
    }
    for (let i = 2; i <= x / 2; i += 1) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  };
  while (res !== maxRounds) {
    const question = randomNum();
    const rightAnswer = (isPrime(question) === true) ? 'yes' : 'no';
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
primeGame();
