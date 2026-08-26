const express = require('express');
const app = express();
app.get('/', (req,res)=>{ res.send('<h1 style=\"text-align:center;margin-top:100px;color:#ff6a00;font-family:Arial;\">DealBazaar is LIVE! 🎉</h1><p style=\"text-align:center;\">Finally working after 2 months!</p>'); });
const PORT = process.env.PORT || 10000;
app.listen(PORT, ()=> console.log('Live on ' + PORT));
