#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function brainEven() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const isEven = () => {
    let res = 0;
    while (res !== 3) {
      const i = Math.floor(Math.random() * 101);
      const a = 'yes';
      const b = 'no';
      console.log(`Question: ${i}`);
      const answer = readlineSync.question('Your answer: ');
      if (i % 2 === 0 && answer === a) {
        res += 1;
        console.log('Correct!');
      }
      if (i % 2 !== 0 && answer === b) {
        res += 1;
        console.log('Correct!');
      }
      if (i % 2 !== 0 && answer === a) {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
        res = 0;
      }
      if (i % 2 === 0 && answer === b) {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
        res = 0;
      }
      if (answer !== a && answer !== b) {
        console.log(`${answer} is wrong answer ;(. Let's try again, ${userName}!`);
        res = 0;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };
  isEven();
}
brainEven();
