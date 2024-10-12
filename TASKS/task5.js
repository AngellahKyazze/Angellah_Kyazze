function calculateProfit(sellingPrice, costPrice, unitsSold) {

    // Calculating the profit per unit
    let profitPerUnit = sellingPrice - costPrice;

    // Calculating the total profit
    let totalProfit = profitPerUnit * unitsSold;
    
    return totalProfit;
}


let sellingPrice = 50.0;  
let costPrice = 30.0;     
let unitsSold = 100;     

let profit = calculateProfit(sellingPrice, costPrice, unitsSold);
console.log(`The total profit is: ${profit.toFixed(2)}`);
