const separateLiquids = (glass) => {
  if (glass.length === 0) {
    return [];
  }

  let concatGlass = [];
  const width = glass[0].length;
  const sortedGlass = [];

  concatGlass = concatGlass.concat(...glass).join('');
  concatGlass = concatGlass
    .replace(/O/gi, 'B')
    .replace(/A/gi, 'C')
    .replace(/W/gi, 'D')
    .replace(/H/gi, 'E')
    .split('')
    .sort();
  concatGlass = concatGlass
    .join('')
    .replace(/B/gi, 'O')
    .replace(/C/gi, 'A')
    .replace(/D/gi, 'W')
    .replace(/E/gi, 'H')
    .split('');

  for (let i = 0; i < concatGlass.length; i += width) {
    sortedGlass.push(concatGlass.slice(i, width + i));
  }
  return sortedGlass;
};

module.exports = separateLiquids;
