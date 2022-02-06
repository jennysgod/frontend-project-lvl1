function randomNum(min = 0, max = 100) {
  const random = min + Math.random() * (max - min) + min;
  return Math.floor(random);
}
export default randomNum;
