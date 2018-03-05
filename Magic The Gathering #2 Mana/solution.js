function canCast(mana) {
	let failState = false;
	const numbersEnd = mana.search(/\D/);
	let colourless =
		numbersEnd > 0 ? mana.slice(0, numbersEnd) : numbersEnd == -1 ? mana : 0;
	let colours = mana.slice(numbersEnd);

	for (let i = 1; i < arguments.length; i++) {
		let spellNumbersEnd = arguments[i].search(/\D/);
		let spellColourless =
			spellNumbersEnd > 0	? arguments[i].slice(0, spellNumbersEnd) : numbersEnd == -1 ? arguments[i] : 0;
		let currentSpell = arguments[i].slice(spellNumbersEnd).split("");

		colourless -= spellColourless;

		currentSpell.map(item => {
			let colourSearch = colours.search(item);
			if (item.match(/\D/)) {
				if (colourSearch >= 0) {
					colours = [
						...colours.slice(0, colourSearch),
						colours.slice(colourSearch + 1),
					].join("");
				} else {
					failState = true;
				}
			}
		});
		while (colourless < 0) {
			if (colours.length == 0) {
				return false;
			}
			colours = colours.slice(1);
			colourless++;
		}
	}
	if (failState) {
		return false;
	}
	return true;
}
