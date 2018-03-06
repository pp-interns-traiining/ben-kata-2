const dirReduc = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    switch (true) {
      case arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH':
        i += 1;
        break;
      case arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH':
        i += 1;
        break;
      case arr[i] === 'WEST' && arr[i + 1] === 'EAST':
        i += 1;
        break;
      case arr[i] === 'EAST' && arr[i + 1] === 'WEST':
        i += 1;
        break;
      default:
        newArr.push(arr[i]);
    }
  }
  if (newArr.join() === arr.join()) {
    return arr;
  }
  return dirReduc(newArr);
};

module.exports = dirReduc;
