const Product = require('../models/productModel');

class ProductController {
    constructor() {
        this.products = []; // In-memory storage
    }

    // Method to create a new product
    createProduct(req, res) {
        const { name, price, description } = req.body;
        const newProduct = new Product(name, price, description);
        newProduct.id = Date.now().toString(); // Add unique ID
        newProduct.save();
        
        // Add debugging logs
        console.log('Created product with ID:', newProduct.id);
        console.log('Full product object:', newProduct);
        
        // Add the new product to the products array
        this.products.push(newProduct);
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    }

    // Method to get all products
    getProducts(req, res) {
        try {
            // Add console.log for debugging
            console.log('Getting all products:', this.products);
            res.json(this.products);
        } catch (error) {
            console.error('Error getting products:', error);
            res.status(500).json({ error: 'Failed to get products' });
        }
    }

    // Method to update an existing product
    updateProduct(req, res) {
        const productId = req.params.id;
        const updatedData = req.body;
        
        const productIndex = this.products.findIndex(p => p.id === productId);
        if (productIndex === -1) {
            return res.status(404).json({ error: 'Product not found' });
        }
        
        this.products[productIndex].update(updatedData);
        res.status(200).json({ 
            message: 'Product updated successfully', 
            product: this.products[productIndex] 
        });
    }

    // Method to delete a product
    deleteProduct(req, res) {
        const productId = req.params.id;
        
        const productIndex = this.products.findIndex(p => p.id === productId);
        if (productIndex === -1) {
            return res.status(404).json({ error: 'Product not found' });
        }
        
        const deletedProduct = this.products[productIndex];
        this.products.splice(productIndex, 1);
        deletedProduct.delete();
        
        res.status(200).json({ 
            message: 'Product deleted successfully', 
            productId 
        });
    }
}

// Export the ProductController instance
module.exports = new ProductController();