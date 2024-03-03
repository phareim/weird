function sleepSort(arr) {
    arr.forEach(value => {
        // Setter en timeout basert på verdien
        setTimeout(() => {
            console.log(value);
        }, value * 10); // Multiplikasjonsfaktoren kan justeres
    });
}

// Eksempel på bruk
let arr = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original Array: ", arr);
console.log("Sorted Array: ");
sleepSort(arr);