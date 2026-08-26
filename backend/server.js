const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/deals', (req, res) => {
  res.json([
    { id: 1, title: "iPhone 15 Pro", price: 119900, image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg" },
    { id: 2, title: "Boat Headphones", price: 1299, image: "https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UF1000,1000_QL80_.jpg" },
    { id: 3, title: "Nike Air Max Shoes", price: 4999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
    { id: 4, title: "Test Deal", price: 1000, image: "" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server chal gaya: http://localhost:${PORT}`);
});
