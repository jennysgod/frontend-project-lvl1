import randomNum from '../math.js';

const generateProgression = (firstNum, progStep, progLength) => {
  const prog = [];
  for (let i = 0; i < progLength; i += 1) {
    prog.push(firstNum + progStep * i);
  }
  return prog;
};

const rule = 'What number is missing in the progression?';

const game = () => {
  const firstNum = randomNum(1, 20);
  const progStep = randomNum(1, 10);
  const progLength = randomNum(5, 10);

  const progression = generateProgression(firstNum, progStep, progLength);
  const randomIndex = randomNum(0, progLength - 1);

  const rightAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, rightAnswer];
};

export { rule, game };
