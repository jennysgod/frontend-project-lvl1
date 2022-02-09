#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomNum from '../../src/math.js';

function gcdGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  const maxRounds = 3;
  const rule = 'Find the greatest common divisor of given numbers.';
  console.log(`${rule}`);
  let res = 0;
  while (res !== maxRounds) {
    const num1 = randomNum();
    const num2 = randomNum();
    const question = `${num1} ${num2}`;
    const gcd = () => {
      const div = 1;
      const smallerNum = () => {
        if (num1 > num2) {
          return num2;
        }
        return num1;
      };
      for (let i = smallerNum(); i > 1; i -= 1) {
        if (num1 % i === 0 && num2 % i === 0) {
          return i;
        }
      }
      return div;
    };
    const rightAnswer = String(gcd());
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
gcdGame();
