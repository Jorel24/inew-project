const express = require('express');
const path = require('path');
const app = express();
const productRouter = require('./routes/productRoutes');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'it-next')));

app.use('/products', productRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'it-next', 'html', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});