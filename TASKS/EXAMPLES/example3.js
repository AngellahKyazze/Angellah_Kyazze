//Example 3: Calculating the Average Score of Students
 //Imagine you are marking exams in a Ugandan school and need to calculate the average score.
 function calculateAverage(scores) {
 let total = 0;
 for (let i = 0; i < scores.length; i++) {
 total += scores[i];
 }
 return total / scores.length;
 }
let studentScores = [85, 78, 92, 67, 88];
 let averageScore = calculateAverage(studentScores);
 console.log(`The average score is ${averageScore}`);