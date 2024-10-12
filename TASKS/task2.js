function calculateFoodExpense(numberOfMeals, costPerMeal) {
    let totalExpense = numberOfMeals * costPerMeal;
    return totalExpense;
}
//inserting numbers to variables
let meals = 5;
let cost = 20.30;
console.log("Total food expense:", calculateFoodExpense(meals, cost));
