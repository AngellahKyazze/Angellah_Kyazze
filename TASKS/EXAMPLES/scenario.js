///Scenario: You are developing an application for a boda-boda rider to calculate the total income
///from daily trips in Kampala. The rider earns UGX 2,000 per kilometer. Write a function
///calculateIncome that takes the number of kilometers traveled per day and returns the total
///income for the day.
function calculateIncome(kilometers) {
let incomePerKm = 2000;
return kilometers * incomePerKm;
}
let kilometersTraveled = 50; // Kilometers traveled in a day
let dailyIncome = calculateIncome(kilometersTraveled);
console.log(`The total income for the day is UGX ${dailyIncome}`);