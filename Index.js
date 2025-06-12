const express = require('express');
const path = require('path');
const app = express();

// Menyajikan file statis dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// Rute utama mengarah ke index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Gunakan PORT dari Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
