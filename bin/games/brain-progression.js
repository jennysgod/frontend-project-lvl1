#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomNum from '../../src/math.js';

function progressionGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  const maxRounds = 3;
  const rule = 'What number is missing in the progression?';
  console.log(`${rule}`);
  let res = 0;
  while (res !== maxRounds) {
    let num = randomNum(1, 20);
    let prog = '';
    const progStep = randomNum(1, 10);
    const progLength = randomNum(6, 11);
    const randomIndex = randomNum(1, progLength);
    let rightAnswer;
    for (let i = 1; i <= progLength; i += 1) {
      if (i === randomIndex) {
        rightAnswer = String(num + progStep);
        num += progStep;
        prog += ' ..';
      } else {
        num += progStep;
        prog += ` ${num}`;
      }
    }
    const question = prog;
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
progressionGame();
