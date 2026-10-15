const scores = [5, 1, 100, 25, 40, 10];

// The compare function ensures proper numeric evaluation
scores.sort((a, b) => a - b);

console.log(scores); // Output: [1, 5, 10, 25, 40, 100]

const prices = [5, 1, 100, 25, 40, 10];

prices.sort((a, b) => b - a);

console.log(prices); // Output: [100, 40, 25, 10, 5, 1]