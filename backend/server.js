const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Yahi main fix hai - ek folder peeche jake frontend dikhao
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server chal gaya: http://localhost:${PORT}`);
});
