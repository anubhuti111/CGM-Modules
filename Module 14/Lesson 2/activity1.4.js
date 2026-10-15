class Calculator {
    // Static property (shared across the class)
    static description = "A simple math utility class";

    // Static method
    static add(a, b) {
        return a + b;
    }

    // Another static method
    static multiply(a, b) {
        return a * b;
    }
}

// 1. Calling static methods directly on the class
console.log(Calculator.description); // Output: A simple math utility class
console.log(Calculator.add(5, 10));     // Output: 15
console.log(Calculator.multiply(4, 3)); // Output: 12

// 2. What happens if you try to call it on an instance?
const calcInstance = new Calculator();
// calcInstance.add(5, 10); // Throws TypeError: calcInstance.add is not a function
