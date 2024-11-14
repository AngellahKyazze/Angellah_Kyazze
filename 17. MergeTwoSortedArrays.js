function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

let array1 = [1, 3, 5];
let array2 = [2, 4, 6];
console.log(mergeSortedArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]
