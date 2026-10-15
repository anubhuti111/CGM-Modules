// 1. A raw text string formatted as JSON
// Note: JSON strings require strict double quotes ("") around both keys and values.
const jsonResponse = '{"id": 101, "username": "dev_alex", "isActive": true, "skills": ["JS", "Node"]}';

// 2. Parse the string into a real JavaScript object
const user = JSON.parse(jsonResponse);

// 3. You can now access properties normally using dot notation
console.log(user.username); // Output: "dev_alex"
console.log(user.skills[0]); // Output: "JS"
console.log(typeof user);    // Output: "object"
