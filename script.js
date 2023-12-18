// Menggunakan date-fns untuk menghitung waktu relatif
const { formatDistanceToNow } = require('date-fns');

// Contoh objek model
const contohObjek = {
    created_at: new Date("2023-07-21T12:00:00"),
    updated_at: new Date("2023-07-21T12:00:01") // Tambah satu detik
};

// Menampilkan waktu relatif
const updatedAtElement = document.getElementById('updatedAt');
const relativeTime = formatDistanceToNow(contohObjek.updated_at, { addSuffix: true, locale: require('date-fns/locale/id') });
updatedAtElement.textContent = "Updated " + relativeTime;