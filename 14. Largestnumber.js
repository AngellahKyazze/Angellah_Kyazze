function findLargestNumber(arr) {
    return Math.max(...arr);
}

let numbers = [1, 3, 5, 7, 2, 4, 6];
console.log(findLargestNumber(numbers)); // Output: 7