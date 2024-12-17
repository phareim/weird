function stalinSort(arr) {
    if (arr.length === 0) return [];

    let sortedArr = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= sortedArr[sortedArr.length - 1]) {
            sortedArr.push(arr[i]);
        }
    }

    return sortedArr;
}

// Example usage:
// Generate an array of the specified length with random elements
let length = process.argv[2] || 5;
let maxSize = process.argv[3] || 10;
let arr = Array.from({ length }, () => Math.floor(Math.random() * maxSize));
console.log("Original: \n", arr);
const sortedArray = stalinSort(arr);
console.log("Sorted: \n",sortedArray); // Output: [4, 5, 6, 7]