// 1. Producing the Promise
const checkInventory = (itemCount) => {
    return new Promise((resolve, reject) => {
        console.log("Checking stock status...");

        setTimeout(() => {
            if (itemCount > 0) {
                resolve("Item is in stock! Order placed."); // Transitions to Fulfilled
            } else {
                reject(new Error("Out of stock. Transaction cancelled.")); // Transitions to Rejected
            }
        }, 1500);
    });
};

// 2. Consuming the Promise using .then() and .catch()
checkInventory(5)
    .then((successMessage) => {
        console.log(`Success: ${successMessage}`);
    })
    .catch((errorMessage) => {
        console.error(`Failure: ${errorMessage.message}`);
    })
    .finally(() => {
        console.log("Inventory check sequence completed."); // Always runs
    });
