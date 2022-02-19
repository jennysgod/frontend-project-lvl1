import randomNum from '../math.js';

const calc = (num1, num2, randomSym) => {
  switch (randomSym) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      throw new Error('Unknown operator');
  }
};

const rule = 'What is the result of the expression?';
const game = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const sym = ['+', '-', '*'];
  const randomSym = sym[randomNum(0, sym.length - 1)];

  const question = `${num1} ${randomSym} ${num2}`;
  const rightAnswer = String(calc(num1, num2, randomSym));

  return [question, rightAnswer];
};

export { rule, game };
