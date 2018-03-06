const SeriesSum = (n) => {
  let iterations = n;
  let total = 0;
  while (iterations !== 0) {
    iterations -= 1;
    total += 100 / ((n * 3) + 1) / 100;
  }
  return total.toFixed(2);
};

module.exports = SeriesSum;
