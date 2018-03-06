// const checkMana = (item) => {
//   const colourSearch = colours.search(item);
//   if (item.match(/\D/)) {
//     if (colourSearch >= 0) {
//       colours = [...colours.slice(0, colourSearch), colours.slice(colourSearch + 1)].join('');
//     } else {
//       cannotCast = true;
//     }
//   }
// };

const canCast = (mana, ...spells) => {
  let cannotCast = false;
  const numbersEnd = mana.search(/\D/);
  let colourless = 0;
  if (numbersEnd > 0) {
    colourless = mana.slice(0, numbersEnd);
  } else if (numbersEnd === -1) {
    colourless = mana;
  }
  let colours = mana.slice(numbersEnd);
  for (let i = 0; i < spells.length; i += 1) {
    const spellNumbersEnd = spells[i].search(/\D/);
    let spellColourless = 0;
    if (spellNumbersEnd > 0) {
      spellColourless = spells[i].slice(0, spellNumbersEnd);
    } else if (spellNumbersEnd === -1) {
      spellColourless = spells[i];
    }
    const currentSpell = spells[i].slice(spellNumbersEnd).split('');

    colourless -= spellColourless;

    if (spellNumbersEnd !== -1) {
      currentSpell.map((item) => {
        const searchMana = colours.search(item);
        if (searchMana >= 0) {
          colours = [...colours.slice(0, searchMana), ...colours.slice(searchMana + 1)].join('');
        } else {
          cannotCast = true;
        }
      });
    }
    while (colourless < 0) {
      if (colours.length === 0) {
        cannotCast = true;
      }
      colours = colours.slice(1);
      colourless += 1;
    }
  }
  if (cannotCast) {
    return false;
  }
  return true;
};

module.exports = canCast;
