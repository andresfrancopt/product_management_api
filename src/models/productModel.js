class Product {
    constructor(name, price, description) {
        this.name = name; // Name of the product
        this.price = price; // Price of the product
        this.description = description; // Description of the product
    }

    // Method to save the product (simulated)
    save() {
        // Logic to save the product to a database would go here
        console.log(`Product ${this.name} saved.`);
    }

    // Method to update the product (simulated)
    update(updatedData) {
        // Logic to update the product in the database would go here
        Object.assign(this, updatedData);
        console.log(`Product ${this.name} updated.`);
    }

    // Method to delete the product (simulated)
    delete() {
        // Logic to delete the product from the database would go here
        console.log(`Product ${this.name} deleted.`);
    }

    // Static method to get all products (simulated)
    static getAll() {
        // Logic to retrieve all products from the database would go here
        console.log('Retrieving all products.');
        return []; // Return an empty array for simulation
    }
}

module.exports = Product; // Export the Product class for use in other files