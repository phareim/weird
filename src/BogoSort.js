// BogoSort Algorithm in JavaScript

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

// BogoSort function
function bogoSort(arr) {
	while (!isSorted(arr)) {
		shuffle(arr);
	}
	return arr;
}

// Generate an array of the specified length with random elements
let length = process.argv[2] || 8;
let maxSize = process.argv[3] || 10;
let arr = Array.from({ length }, () => Math.floor(Math.random() * maxSize));

console.log("Original Array: \n", arr);
console.time("BogoSort Time");
let sortedArr = bogoSort(arr);
console.timeEnd("BogoSort Time");
console.log("Sorted Array: \n", sortedArr);