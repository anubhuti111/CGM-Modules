// A simple function to be used as a callback
const displayOutput = (value) => console.log(`Result calculation: ${value}`);

// Higher-Order Function that accepts a callback function as its third argument
function computeSum(num1, num2, callback) {
    const total = num1 + num2;
    callback(total); // Invoking the callback function
}

computeSum(25, 15, displayOutput); // Output: Result calculation: 40
