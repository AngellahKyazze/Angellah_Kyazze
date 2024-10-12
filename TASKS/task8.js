//random population figure
let nationalPopulation = 45741000;  

function cityPopulation(cityName) {
    // variable containing the population of a specific city
    let cityPopulation;

    // Assigning population values based on the city name
    if (cityName === "Kampala") {
        cityPopulation = 2500000;  
    } else if (cityName === "Entebbe") {
        cityPopulation = 80000;  
    } else {
        cityPopulation = 40000;  
    }

    console.log(`The population of ${cityName} is ${cityPopulation}.`);
    console.log(`The national population of Uganda is ${nationalPopulation}.`);
}

// Example usage:
cityPopulation("Kampala");
cityPopulation("Entebbe");
