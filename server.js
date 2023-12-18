const express = require('express');
const app = express();
const port = 3000;

app.get('/read-book', (req, res) => {
    const releaseDate = new Date('2023-01-01T00:00:00Z');
    const currentDate = new Date();

    if (currentDate < releaseDate) {
        res.status(403).send('Buku belum dirilis. Akses ditolak.');
    } else {
        res.send('Selamat membaca buku!');
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});