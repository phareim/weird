// Function to generate a permutation of the array
function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}

// Trampoline function to manage recursion
function trampoline(fn) {
	return function trampolined(...args) {
		let result = fn(...args);

		while (typeof result === 'function') {
			result = result();
		}

		return result;
	};
}

// Recursive BogoSort function
function bogoSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	let min = Math.min(...arr);
	let max = Math.max(...arr);

	if (arr[0] === min && arr[arr.length - 1] === max) {
		let sortedSubArray = trampoline(bogoSort)(arr.slice(1, -1));
		return [min, ...sortedSubArray, max];
	} else {
		shuffle(arr);
		return () => bogoSort(arr);
	}
}

// Generate an array of the specified length with random elements
let length = process.argv[2] || 5;
let maxSize = process.argv[3] || 10;
let arr = Array.from({ length }, () => Math.floor(Math.random() * maxSize));

console.log("Original Array: ", arr);
console.time("BogoSort Time");
let sortedArr = trampoline(bogoSort)(arr);
console.timeEnd("BogoSort Time");
console.log("Sorted Array: ", sortedArr);