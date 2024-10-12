function calculateInternetCost(bundles, bundlePrice = 50000) {

    // Calculating the total cost
    let totalCost = bundles * bundlePrice;
    return totalCost;
}


let bundles = 5;  

let totalCost = calculateInternetCost(bundles);
console.log(`The total cost for ${bundles} bundles is: UGX ${totalCost}`);
