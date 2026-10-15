// A mock asynchronous function mimicking a standard backend API interface
const queryServerDatabase = (recordId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (recordId === 777) {
                resolve({ id: 777, name: "Premium Enterprise Subscription" });
            } else {
                reject(new Error("Record database entity not found."));
            }
        }, 1000);
    });
};

// Application Controller managing the asynchronous transaction
async function processRecordController(id) {
    try {
        console.log("Opening connection pool...");

        // Pauses execution here until the server response evaluates
        const record = await queryServerDatabase(id);
        console.log("Success! Extracted Record:", record.name);

    } catch (error) {
        // Automatically traps rejections from the awaited database promise
        console.error(`[Data Transaction Error]: ${error.message}`);

    } finally {
        // Executes cleanly regardless of success or failure outcomes
        console.log("Closing connection pool. Transaction ended.");
    }
}

// Test Run 1: Valid ID
processRecordController(777);

// Test Run 2: Invalid ID (Triggers the catch block safely)
processRecordController(101);
