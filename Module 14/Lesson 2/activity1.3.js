// Parent Class (Base)
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    // Base method available to all users
    login() {
        return `${this.username} has logged in.`;
    }
}

// Child Class (Subclass)
class Admin extends User {
    constructor(username, email, accessLevel) {
        // super() executes the parent's constructor to set username and email
        super(username, email);
        this.accessLevel = accessLevel;
    }

    // Method exclusive to Admins
    deleteUser(targetUser) {
        return `Admin ${this.username} deleted account: ${targetUser}.`;
    }

    // Method Overriding: Modifies the parent's login behavior
    login() {
        // Calls the original parent login logic, then appends custom text
        return `${super.login()} (Access Level: ${this.accessLevel})`;
    }
}

// --- Instantiation & Usage ---

const regularUser = new User("JohnDoe", "john@example.com");
const systemAdmin = new Admin("AliceManager", "alice@example.com", "SuperAdmin");

console.log(regularUser.login());
// Output: JohnDoe has logged in.

console.log(systemAdmin.login());
// Output: AliceManager has logged in. (Access Level: SuperAdmin)

console.log(systemAdmin.deleteUser("JohnDoe"));
// Output: Admin AliceManager deleted account: JohnDoe.
