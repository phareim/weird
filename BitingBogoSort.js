// Function to check if array is sorted
function isSorted(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true;
}

// Function to generate a permutation of the array
function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}

// Recursive BogoSort function
function bogoSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	let min = Math.min(...arr);
	let max = Math.max(...arr);

	if (arr[0] === min && arr[arr.length - 1] === max) {
		return [min, ...bogoSort(arr.slice(1, -1)), max];
	} else {
		shuffle(arr);
		return bogoSort(arr);
	}
}

// Generate an array of the specified length with random elements
let length = process.argv[2] || 5;
let maxSize = process.argv[3] || 10;
let arr = Array.from({ length }, () => Math.floor(Math.random() * maxSize));

console.log("Original Array: ", arr);
console.time("BogoSort Time");
let sortedArr = bogoSort(arr);
console.timeEnd("BogoSort Time");
console.log("Sorted Array: ", sortedArr);