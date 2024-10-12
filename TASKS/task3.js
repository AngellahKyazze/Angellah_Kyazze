function calculateWaterUsage(dailyUsage) {
   
    if (!Array.isArray(dailyUsage) || dailyUsage.length !== 7) {
        throw new Error("Please provide an array with 7 elements representing daily water usage.");
    }

    // Calculating the total water usage for the week
    let totalUsage = dailyUsage.reduce((total, usage) => total + usage, 0);

    // Calculating the average daily water usage
    let averageUsage = totalUsage / dailyUsage.length;

    return averageUsage;
}

// Example usage:
let weeklyUsage = [150, 160, 170, 180, 190, 200, 210]; // Example daily water usage in liters
console.log("Average daily water usage:", calculateWaterUsage(weeklyUsage));
