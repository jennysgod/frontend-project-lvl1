import randomNum from '../math.js';

const rule = 'Find the greatest common divisor of given numbers.';
const game = () => {
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
  return [question, rightAnswer];
};

export { rule, game };
