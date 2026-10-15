// Converting Strings to Numbers
let strNum = "42";
let convertedNum = Number(strNum);
console.log(convertedNum); // 42
console.log(typeof convertedNum); // "number"

// Parsing text strings
console.log(parseInt("10.55px")); // 10 (ignores everything after the integer)
console.log(parseFloat("10.55px")); // 10.55 (keeps decimal precision)

// Booleans to Numbers
console.log(Number(true));  // 1
console.log(Number(false)); // 0

// Invalid Conversions yield NaN (Not a Number)
console.log(Number("Hello")); // NaN
