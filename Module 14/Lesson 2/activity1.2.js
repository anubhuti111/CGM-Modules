// 1. Defining the Base Class
class Vehicle {
    // The constructor runs automatically when creating a new instance
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    // A standard method shared by all instances
    displayInfo() {
        return `This is a ${this.brand} ${this.model}.`;
    }
}

// 2. Extending the Class (Inheritance)
class ElectricVehicle extends Vehicle {
    constructor(brand, model, batteryCapacity) {
        // super() calls the constructor of the parent class (Vehicle)
        super(brand, model);
        this.batteryCapacity = batteryCapacity;
    }

    // Method overriding: replacing the parent's method
    displayInfo() {
        return `${super.displayInfo()} It has a ${this.batteryCapacity} kWh battery.`;
    }

    // A unique method specific only to ElectricVehicle
    charge() {
        return `Charging the ${this.model}...`;
    }
}

// 3. Creating Instances (Instantiation)
const myCar = new Vehicle("Toyota", "Corolla");
const myEV = new ElectricVehicle("Tesla", "Model 3", 75);

// 4. Using the Objects
console.log(myCar.displayInfo());
// Output: This is a Toyota Corolla.

console.log(myEV.displayInfo());
// Output: This is a Tesla Model 3. It has a 75 kWh battery.

console.log(myEV.charge());
// Output: Charging the Model 3...
