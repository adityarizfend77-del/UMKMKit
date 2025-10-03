// Menunggu sampai seluruh konten halaman HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Mengambil elemen-elemen HTML yang kita butuhkan dari harga.html
    const form = document.getElementById('harga-form');
    const hasilContainer = document.getElementById('hasil-harga');

    // Menjalankan fungsi ini ketika tombol 'Dapatkan Rekomendasi' di-klik
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah halaman refresh

        // 1. Mengambil semua nilai dari setiap kolom input
        const produk = document.getElementById('produk').value;
        const biayaProduksi = parseFloat(document.getElementById('biaya-produksi').value);
        const hargaPasar = parseFloat(document.getElementById('harga-pasar').value);

        // Validasi sederhana jika input bukan angka
        if (isNaN(biayaProduksi) || isNaN(hargaPasar)) {
            hasilContainer.innerHTML = '<p style="color: red;">Biaya produksi dan harga pasar harus berupa angka.</p>';
            return;
        }

        // 2. Membuat prompt sesuai template dari dokumen PDF Anda (BAB 3 Rekomendasi Harga)
        const promptUntukAI = `Produk=${produk}, Biaya produksi=${biayaProduksi}, Harga pasar rata-rata=${hargaPasar}. Tugas: Beri 2 rekomendasi harga: (A) Harga normal untuk profit, (B) Harga promo untuk menarik pelanggan. Singkat <50 kata.`;
        
        console.log("Prompt yang akan dikirim ke AI:", promptUntukAI);

        // --- PENTING ---
        // Kita SIMULASIKAN jawaban AI dengan perhitungan sederhana.
        // A. Harga Normal: Kita ambil margin keuntungan sekitar 70-80% dari biaya produksi.
        const hargaNormal = Math.ceil((biayaProduksi * 1.8) / 500) * 500; // Pembulatan ke atas ke 500 terdekat
        // B. Harga Promo: Kita ambil margin keuntungan sekitar 30-40% dari biaya produksi.
        const hargaPromo = Math.ceil((biayaProduksi * 1.4) / 500) * 500;

        const jawabanSimulasi = `
            <p><strong>(A) Harga Normal:</strong> Untuk profit yang sehat, jual ${produk} Anda di harga <strong>Rp ${hargaNormal.toLocaleString('id-ID')}</strong>. Harga ini kompetitif dengan harga pasar (Rp ${hargaPasar.toLocaleString('id-ID')}).</p>
            <p><strong>(B) Harga Promo:</strong> Untuk menarik pelanggan baru, tawarkan harga perkenalan spesial di <strong>Rp ${hargaPromo.toLocaleString('id-ID')}</strong> untuk waktu terbatas.</p>
        `;

        // 3. Menampilkan hasil (jawaban simulasi) di halaman web
        hasilContainer.innerHTML = jawabanSimulasi;
    });

});