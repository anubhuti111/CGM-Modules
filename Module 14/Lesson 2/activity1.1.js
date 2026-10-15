const user = {
    name: "Anubhuti",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

user.greet(); // Logs: "Hello, my name is Alex" (this = user)
