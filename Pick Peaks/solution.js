const pickPeaks = (arr) => {
  const position = [];
  const peak = [];
  arr.forEach((item, index) => {
    if (item > arr[index - 1] && item >= arr[index + 1]) {
      for (let i = index; item >= arr[i]; i += 1) {
        if (item > arr[i]) {
          position.push(index);
          peak.push(item);
          return;
        }
      }
    }
  });
  return { pos: position, peaks: peak };
};

module.exports = pickPeaks;
