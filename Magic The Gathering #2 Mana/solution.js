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

const canCast = (mana) => {
  const args = [...arguments].slice(1);
  console.log(args);
  let cannotCast = false;
  const numbersEnd = mana.search(/\D/);
  let colourless = 0;
  if (numbersEnd > 0) {
    colourless = mana.slice(0, numbersEnd);
  } else if (numbersEnd === -1) {
    colourless = mana;
  }
  console.log('Colourless mana:', colourless);
  let colours = mana.slice(numbersEnd);
  console.log('Coloured mana:', colours);
  for (let i = 0; i < args.length; i += 1) {
    console.log(`Spell ${i}:`, args[i]);
    const spellNumbersEnd = args[i].search(/\D/);
    let spellColourless = 0;
    if (spellNumbersEnd > 0) {
      spellColourless = args[i].slice(0, spellNumbersEnd);
    } else if (spellNumbersEnd === -1) {
      spellColourless = args[i];
    }
    const currentSpell = args[i].slice(spellNumbersEnd).split('');

    colourless -= spellColourless;

    if (spellNumbersEnd !== -1) {
      currentSpell.map((item) => {
        const searchMana = colours.search(item);
        if (searchMana >= 0) {
          colours = [...colours.slice(0, searchMana), ...colours.slice(searchMana + 1)].join('');
        } else {
          console.log("can't cast");
          cannotCast = true;
        }
      });
    }
    while (colourless < 0) {
      if (colours.length === 0) {
        console.log("can't cast");
        cannotCast = true;
      }
      console.log('Before:', colours, colourless);
      colours.shift();
      colourless += 1;
      console.log('After:', colours, colourless);
    }
  }
  console.log(cannotCast);
  if (cannotCast) {
    return false;
  }
  return true;
};

module.exports = canCast;
