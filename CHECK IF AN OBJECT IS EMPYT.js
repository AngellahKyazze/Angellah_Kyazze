function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

let obj1 = {};
let obj2 = { name: "Alice" };
console.log(isEmpty(obj1)); // Output: true
console.log(isEmpty(obj2)); // Output: false
