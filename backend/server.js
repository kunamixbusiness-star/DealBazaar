const express = require('express');
const path = require('path');
const app = express();
<<<<<<< HEAD

app.use(express.json());

// Yahi main fix hai - ek folder peeche jake frontend dikhao
=======
>>>>>>> a1a181073be21c14b123dd4aa29fd4e9298f988e
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});
<<<<<<< HEAD

=======
>>>>>>> a1a181073be21c14b123dd4aa29fd4e9298f988e
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server chal gaya`);
});
