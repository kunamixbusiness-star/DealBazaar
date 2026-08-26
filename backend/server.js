const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const frontendPath = path.join(__dirname, '../frontend');
console.log('Checking frontend path:', frontendPath);
console.log('Files:', fs.existsSync(frontendPath) ? fs.readdirSync(frontendPath) : 'NOT FOUND');

app.use(express.static(frontendPath));

app.get('/', (req, res) => {
  const indexFile = path.join(frontendPath, 'index.html');
  if (fs.existsSync(indexFile)) {
    res.sendFile(indexFile);
  } else {
    res.send('<h1>DealBazaar is Live!</h1><p>Server is running but index.html not found at ' + indexFile + '</p>');
  }
});

app.get('*', (req, res) => {
  res.redirect('/');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
