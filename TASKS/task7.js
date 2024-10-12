function countdown(number) {
    
    if (number < 0) {
        return;
    }
    // recusive Printing the current number
    console.log(number);
    // calling with the next number
    countdown(number - 1);
}


let startNumber = 10;  
countdown(startNumber);
