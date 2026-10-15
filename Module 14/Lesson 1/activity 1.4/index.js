const min = 1;
const max = 100;
const count = 5; // How many numbers you want

let i = 0;
const randomNumbers = [];

while (i < count) {
    // Generate a random integer between 1 and 100
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    randomNumbers.push(randomNum);
    i++; // Increment the counter to eventually break the loop
}

console.log("Generated numbers:", randomNumbers);
// Output example: [42, 7, 89, 23, 56]
