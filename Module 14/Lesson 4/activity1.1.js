// 1. Variable Declarations
const pi = 3.14159;   // Block-scoped, read-only constant
let age = 25;         // Block-scoped, re-assignable variable
age = 26;             // Allowed

// 2. Primitive Data Types
let stringType = "Hello World"; // String
let numberType = 42;            // Number (integers & floats)
let booleanType = true;         // Boolean (true/false)
let undefinedType;              // Undefined (declared but unassigned)
let nullType = null;            // Null (intentional absence of value)
let symbolType = Symbol('id');  // Symbol (unique identifier)
let bigIntType = 9007199254740991n; // BigInt for huge integers

// 3. Structural Data Types
let arrayType = [1, 2, 3];      // Array
let objectType = {              // Object
    name: "Alice",
    role: "Developer"
};
