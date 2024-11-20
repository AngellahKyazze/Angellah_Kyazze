function commonElements(arr1, arr2, arr3) {
    return arr1.filter(value => arr2.includes(value) && arr3.includes(value));
}

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let array3 = [4, 5, 6, 7];
console.log(commonElements(array1, array2, array3)); // Output: [4]
