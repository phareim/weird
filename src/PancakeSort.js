function pancakeSort(arr) {
	for (let i = arr.length - 1; i >= 1; i--) {
		// Find the index of the largest pancake not yet sorted
		let maxIdx = 0;
		for (let j = 1; j <= i; j++) {
			if (arr[j] > arr[maxIdx]) {
				maxIdx = j;
			}
		}

		if (maxIdx !== i) {
			// Use the spatula to flip the largest pancake to the top
			if (maxIdx !== 0) {
				flip(arr, maxIdx);
			}

			// Now use the spatula to flip the largest pancake off the top to its place
			flip(arr, i);
		}
	}
	return arr;
}

function flip(arr, k) {
	let i = 0;
	while (i < k) {
		let temp = arr[i];
		arr[i] = arr[k];
		arr[k] = temp;
		i++;
		k--;
	}
}

// Generate an array of the specified length with random elements
let length = process.argv[2] || 5;
let maxSize = process.argv[3] || 10;
let arr = Array.from({ length }, () => Math.floor(Math.random() * maxSize));

console.log("Original Array: ", arr);
console.time("PancakeSort Time");
let sortedArr = pancakeSort(arr);
console.timeEnd("PancakeSort Time");
console.log("Sorted Array: ", sortedArr);