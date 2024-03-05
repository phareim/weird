const sorted = [];

function sleepSort(arr) {
    arr.forEach((value) => {
        // Setter en timeout basert på verdien
        setTimeout(() => {
            console.log(value + '\r');
            sorted.push(value);
        }, value * 1000); // Multiplikasjonsfaktoren kan justeres
    });
}

// Eksempel på bruk
// Generate an array of the specified length with random elements
const length = process.argv[2] || 5;
const maxSize = process.argv[3] || 10;
const arr = Array.from({ length }, () => Math.floor(Math.random() * maxSize));

console.log("Original Array: ", arr);
process.stdout.write("Sorted Array: ");
sleepSort(arr);
console.log("Sorting...");