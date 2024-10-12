//A function can accept parameters (arguments) to work with dynamic inputs. Let’s calculate the
//total cost of a taxi ride in Kampala.
//Example 2: Calculate Taxi Fare
function calculateTaxiFare(distance, farePerKm) {
return distance * farePerKm;
}
let distanceToWandegeya = 13; // Distance in kilometers
let farePerKm = 6000; // UGX
let totalFare = calculateTaxiFare(distanceToWandegeya, farePerKm);
console.log(`Total taxi fare to Wandegeya is UGX ${totalFare}`);