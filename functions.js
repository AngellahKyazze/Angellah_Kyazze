

var num=23;


var num_two=2;
var sum = num+num_two;
console.log("sum:",sum);

var num_three = 40;
var num_four=4;

var sum_of = num_three+num_four;
console.log("sum two: ",sum_of)

//functions usage without parameters or arguments
//Void function
function summation(){
var num_five = 40;
var num_six = 34;

var sum_three = num_five + num_six;
console.log("sum three: ",sum_three)


}
summation();


//Returning function
function summation_two(){
    var num_five = 40;
    var num_six = 34;
    
    var sum_three = num_five + num_six;
    return sum_three;   
}

//use it by printing th valiue directly
console.log("sum four:",summation_two())

//Assigning the value a variable
var sum_four = summation_two();


//this will bring undefined since it aint a returning function
//assigning void functions to variables hence in the terminal brings back "undefined"
//since they dont return values as aint returning functions
var sum_five = summation();
console.log(sum_five)


//Parameters usage with functions
//when using this it shortens the code of summation compared to code used in 1
//voidfunctions usage with paprmeters
function summation_three(num_five,num_six){
    var sum_six = num_five + num_six;
    console.log("sum six",sum_six);
}
//calling back a function
//as long as you specify the sumation you need it can go ahead to carry out the summation duee to the 
//parameters and you didnt give it specific numbers to sum up
summation_three(34,23)


//hence dont be shocked it can still sum up these values
summation_three(32,20)

///Returning functions with parameters
function summation_four(num_five,num_six){
    var sum_six = num_five + num_six;
    
    return sum_six;

}

 ///you can just use instead of line73
 return num_five + num_six

 //use it by printing the value directly on the terminal
 console.log ("sum_five:",summation_four(23,5));

 //assigning the value to a variable
 var sum_five = summation_four(263,45);

//Num 1
 ///Function that texts my name en greets in luganda
 function  named(Angellah){
console.log('gyebaleko',Angellah)

 }
 named('Angellah')

 


 ////Using return function
 function calculateProfit(sellingPrice, costPrice, unit_price) {
    if (sellingPrice < 0 || costPrice < 0 || unitsSold < 0) {
      return "Invalid input: Prices and units sold should be non-negative values.";
    }
    
    const profit = (sellingPrice - costPrice) * unitsSold;
    return profit;
  }
  
  // Example usage:
  const sellingPrice = 20;  // Selling price per unit
  const costPrice = 15;     // Cost price per unit
  const unitsSold = 500;    // Total units sold
  
  console.log(Total Profit:{calculateProfit(sellingPrice, costPrice, unitsSold)});

  ///NUM2
function profit_calculation(cost_price,selling_price,unit_price){
var cost_price = 100;
var selling_price = 23;
var unit_price = 32;
var profit = selling_price - cost_price;
console.log("profit",profit);
return profit;
}
profit_calculation();


/////EXERCISE
  function calculate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;   
  
      case "/":
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  // Num 3
  
  let num1 = 15;
  let num2 = 4;
  
  let result = calculate(num1, num2, "+");
  console.log(result); 
  
  result = calculate(num1, num2, "-");
  console.log(result); 
  
  result = calculate(num1, num2, "*");
  console.log(result); 
  
  result = calculate(num1, num2, "/");
  console.log(result);
  