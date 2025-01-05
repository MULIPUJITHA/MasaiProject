const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const products = [
    { id: 1, name: 'T-shirt', price: '20', image: 'path/to/image1' },
    { id: 2, name: 'Shoes', price: '50', image: 'path/to/image2' },
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
