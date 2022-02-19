import randomNum from '../math.js';

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

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const game = () => {
  const question = randomNum();
  const rightAnswer = (isPrime(question) === true) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export { rule, game };
