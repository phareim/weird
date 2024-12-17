function cocktailShakerSort(arr) {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
		if (!swapped) {
			break;
		}
		swapped = false;
		for (let i = arr.length - 1; i > 0; i--) {
			if (arr[i] < arr[i - 1]) {
				let temp = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
}

// Generate an array of the specified length with random elements
let length = process.argv[2] || 5;
let maxSize = process.argv[3] || 10;
let arr = Array.from({ length }, () => Math.floor(Math.random() * maxSize));

console.log("Original Array: ", arr);
console.time("CocktailShakerSort Time");
let sortedArr = cocktailShakerSort(arr);
console.timeEnd("CocktailShakerSort Time");
console.log("Sorted Array: ", sortedArr);