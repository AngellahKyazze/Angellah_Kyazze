//Example 8: Local and Global Scope
let globalVar = "I'm a global variable";
function testScope() {
let localVar = "I'm a local variable";
console.log(globalVar); // Accessible inside the function
console.log(localVar); // Accessible inside the function
}
testScope();
console.log(globalVar);
// console.log(localVar);
//Task 8:
// Accessible outside the function
// Error: localVar is not defined