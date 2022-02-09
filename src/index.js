import readlineSync from 'readline-sync';

export default function gameEngine(rule, question, rightAnswer) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  const maxRounds = 3;
  console.log(`${rule}`);
  let res = 0;
  while (res !== maxRounds) {
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
