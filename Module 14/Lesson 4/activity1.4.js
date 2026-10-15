try {
    let user = { name: "Alex" };
    // This will crash because 'email' does not exist under 'user'
    console.log(user.profile.email);
} catch (error) {
    console.error("An error occurred!");
    console.error(`Error Message: ${error.message}`); // The human-readable error text
    console.error(`Error Name: ${error.name}`);       // TypeError, ReferenceError, etc.
} finally {
    console.log("Cleanup actions executed here.");
}
