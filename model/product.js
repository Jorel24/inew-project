const db = require('../database');

class Product {
    constructor(id, name, file, rating, oldprice, newprice) {
        this.id = id;
        this.name = name;
        this.file = file;
        this.rating = rating;
        this.oldprice = oldprice;
        this.newprice = newprice;
    }

    static async getAllProducts() {
        const query = 'SELECT * FROM products';
        try {
            const [results] = await db.execute(query);
            return results;
        } catch (err) {
            throw err;
        }
    }

    async addProduct() {
        const { name, file, rating, oldprice, newprice } = this;
        const query = 'INSERT INTO products (name, file, rating, oldprice, newprice) VALUES (?, ?, ?, ?, ?)';
        try {
            await db.execute(query, [name, file, rating, oldprice, newprice]);
        } catch (err) {
            throw err;
        }
    }

    static async getProductById(id) {
        const query = 'SELECT * FROM products WHERE id = ?';
        try {
            const [results] = await db.execute(query, [id]);
            if (results.length === 0) {
                throw 'Product not found';
            }
            return results[0];
        } catch (err) {
            throw err;
        }
    }

    async updateProduct() {
        const { id, name, file, rating, oldprice, newprice } = this;
        const query = 'UPDATE products SET name = ?, file = ?, rating = ?, oldprice = ?, newprice = ? WHERE id = ?';
        try {
            const [results] = await db.execute(query, [name, file, rating, oldprice, newprice, id]);
            if (results.affectedRows === 0) {
                throw 'Product not found';
            }
        } catch (err) {
            throw err;
        }
    }

    static async deleteProduct(id) {
        const query = 'DELETE FROM products WHERE id = ?';
        try {
            const [results] = await db.execute(query, [id]);
            if (results.affectedRows === 0) {
                throw 'Product not found';
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Product;