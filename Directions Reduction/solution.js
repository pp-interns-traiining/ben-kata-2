const dirReduc = arr => {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		switch (true) {
			case arr[i] == "NORTH" && arr[i + 1] == "SOUTH":
				i++;
				break;
			case arr[i] == "SOUTH" && arr[i + 1] == "NORTH":
				i++;
				break;
			case arr[i] == "WEST" && arr[i + 1] == "EAST":
				i++;
				break;
			case arr[i] == "EAST" && arr[i + 1] == "WEST":
				i++;
				break;
			default:
				newArr.push(arr[i]);
		}
		console.log(newArr);
	}
	if (newArr.join() == arr.join()) {
		return arr;
	} else {
		return dirReduc(newArr);
	}
};
