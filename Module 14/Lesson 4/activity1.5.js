// 1. Standard Multi-line Function
// Requires curly braces and an explicit 'return' statement
const calculateTotal = (price, tax) => {
    const total = price + (price * tax);
    return total;
};

// 2. Single-line Expression (Implicit Return)
// Omitting curly braces means the expression is returned automatically
const add = (a, b) => a + b;
console.log(add(5, 10)); // 15

// 3. Single Parameter (Optional Parentheses)
// If there is exactly one parameter, you can drop the parentheses
const double = x => x * 2;

// 4. No Parameters
// Empty parentheses are required if there are no parameters
const sayHello = () => "Hello World!";
