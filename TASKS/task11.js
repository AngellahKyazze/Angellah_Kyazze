function calculateIncome(kilometers, startTime) {
    const incomePerKm = 2000;
    const rushHourBonus = 10000; 
    const rushHourStart = 7; 
    const rushHourEnd = 9; 
    const eveningRushHourStart = 17; 
    const eveningRushHourEnd = 19; 

    let income = kilometers * incomePerKm;

    
    if (startTime >= rushHourStart && startTime < rushHourEnd) {
        income += rushHourBonus;
    }

    
    if (startTime >= eveningRushHourStart && startTime < eveningRushHourEnd) {
        income += rushHourBonus;
    }

    return income;
}


let kilometersTraveled = 50; // Kilometers traveled in a day
let startTime = 8; // Start time of the trip (8 AM)
let dailyIncome = calculateIncome(kilometersTraveled, startTime);
console.log(`The total income for the day is UGX ${dailyIncome}`);
