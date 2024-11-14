function mostFrequent(arr) {
    let frequency = {};
    let max = 0;
    let result;
    
    for (let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
        if (frequency[item] > max) {
            max = frequency[item];
            result = item;
        }
    }
    
    return result;
}

let numbers = [1, 2, 3, 2, 4, 1, 2];
console.log(mostFrequent(numbers)); // Output: 2
