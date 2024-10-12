//Example 5: Calculate Revenue for a Farmer
function calculateRevenue(pricePerBunch, numberOfBunches) {
return pricePerBunch * numberOfBunches;
}
let pricePerBunch = 15000; // UGX
let bunchesSold = 30; // Number of bunches sold
let revenue = calculateRevenue(pricePerBunch, bunchesSold);
console.log(`Total revenue for selling matooke is UGX ${revenue}`);