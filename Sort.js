function sort(arr) {
	sorted = [];
	for (let i = 0; i < arr.length; i++) {
		let j = 0;
		while (j < sorted.length && arr[i] > sorted[j]) {
			j++;
		}
		sorted.splice(j, 0, arr[i]);
	}
	return sorted;
}

// Generate an array of the specified length with random elements
const length = process.argv[2] || 5;
const maxSize = process.argv[3] || 10;
const arr = Array.from({ length }, () => Math.floor(Math.random() * maxSize));

console.log("Original Array: ", arr);
console.time("Sort Time");
const sortedArr = sort(arr);
console.timeEnd("Sort Time");
console.log("Sorted Array: ", sortedArr);