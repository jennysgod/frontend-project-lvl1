import randomNum from '../math.js';

const rule = 'What number is missing in the progression?';
const game = () => {
  let num = randomNum(1, 20);
  let prog = '';
  const progStep = randomNum(1, 10);
  const progLength = randomNum(5, 10);
  const randomIndex = randomNum(1, progLength);
  let rightAnswer;
  for (let i = 0; i <= progLength; i += 1) {
    if (i === randomIndex) {
      rightAnswer = String(num + progStep);
      num += progStep;
      prog += ' ..';
    }
    if (i === 0) {
      prog = num;
    } else {
      num += progStep;
      prog += ` ${num}`;
    }
  }
  const question = prog;
  return [question, rightAnswer];
};

export { rule, game };
