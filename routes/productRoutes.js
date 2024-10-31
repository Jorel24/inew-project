const express = require('express');
const router = express.Router();
const Product = require('../model/product');

//Get all products. This is used in the homepage through angular
router.get('/', async (req, res) => {
    try {
        const products = await Product.getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//Create a new product
router.post('/', async (req, res) => {
    const {name, file, rating, oldprice, newprice} = req.body;
    const product = new Product(null, name, file, rating, oldprice, newprice);
    try {
        await product.addProduct();
        res.status(201).send('Product created successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//Get a product by ID
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const product = await Product.getProductById(id);
        res.json(product);
    } catch (err) {
        res.status(404).send(err);
    }
});

//Update a product
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {name, file, rating, oldprice, newprice } = req.body;
    const product = new Product(id, name, file, rating, oldprice, newprice);
    try {
        await product.updateProduct();
        res.send('Product updated successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//Delete a product
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await Product.deleteProduct(id);
        res.send('Product deleted successfully');
    } catch (err) {
        res.status(404).send(err);
    }
});

module.exports = router;