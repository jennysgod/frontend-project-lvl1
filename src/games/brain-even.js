import randomNum from '../math.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const game = () => {
  const question = randomNum();
  const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export { rule, game };
