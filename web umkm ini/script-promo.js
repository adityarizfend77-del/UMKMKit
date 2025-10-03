// Menunggu sampai seluruh konten halaman HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Mengambil elemen-elemen HTML yang kita butuhkan dari promo.html
    const form = document.getElementById('promo-form');
    const hasilContainer = document.getElementById('hasil-promo');

    // Menjalankan fungsi ini ketika tombol 'Buat Rencana' di-klik
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah halaman refresh

        // 1. Mengambil semua nilai dari setiap kolom input
        const produk = document.getElementById('produk').value;
        const tujuan = document.getElementById('tujuan').value;
        const budget = document.getElementById('budget').value;
        const platform = document.getElementById('platform').value;

        // 2. Membuat prompt sesuai template dari dokumen PDF Anda (BAB 2 Rencana Promo Mingguan)
        const promptUntukAI = `Buat rencana promosi 5 hari (Senin-Jumat) untuk Produk=${produk}, Tujuan=${tujuan}, Budget=${budget}, Platform utama=${platform}. Untuk tiap hari tulis: Jenis konten - Fokus pesan - Aksi singkat.`;
        
        console.log("Prompt yang akan dikirim ke AI:", promptUntukAI);

        // --- PENTING ---
        // Jawaban di bawah ini adalah SIMULASI yang meniru output AI yang terstruktur.
        const jawabanSimulasi = `
            <div class="rencana-harian">
                <p><strong>Senin:</strong></p>
                <p><strong>Jenis Konten:</strong> Postingan Perkenalan Produk.<br>
                   <strong>Fokus Pesan:</strong> Menyoroti keunggulan utama dari ${produk}.<br>
                   <strong>Aksi Singkat:</strong> Ajak audiens untuk memberikan komentar tentang kesan pertama mereka.</p>
            </div>
            <div class="rencana-harian">
                <p><strong>Selasa:</strong></p>
                <p><strong>Jenis Konten:</strong> Konten Edukasi/Behind the Scene.<br>
                   <strong>Fokus Pesan:</strong> Proses pembuatan atau manfaat detail dari ${produk}.<br>
                   <strong>Aksi Singkat:</strong> Adakan sesi Q&A (Tanya Jawab) di ${platform} Stories.</p>
            </div>
            <div class="rencana-harian">
                <p><strong>Rabu:</strong></p>
                <p><strong>Jenis Konten:</strong> Postingan Interaktif (Polling/Kuis).<br>
                   <strong>Fokus Pesan:</strong> Melibatkan audiens secara langsung.<br>
                   <strong>Aksi Singkat:</strong> Buat polling terkait varian ${produk} yang paling disukai.</p>
            </div>
            <div class="rencana-harian">
                <p><strong>Kamis:</strong></p>
                <p><strong>Jenis Konten:</strong> Testimoni atau User-Generated Content (UGC).<br>
                   <strong>Fokus Pesan:</strong> Bukti sosial dan kepuasan pelanggan.<br>
                   <strong>Aksi Singkat:</strong> Repost postingan pelanggan terbaik dan beri mereka apresiasi.</p>
            </div>
            <div class="rencana-harian">
                <p><strong>Jumat:</strong></p>
                <p><strong>Jenis Konten:</strong> Penawaran Spesial/Soft Selling.<br>
                   <strong>Fokus Pesan:</strong> Menciptakan urgensi untuk mencapai tujuan: ${tujuan}.<br>
                   <strong>Aksi Singkat:</strong> Umumkan diskon akhir pekan atau promo 'Beli 1 Gratis 1' yang terbatas.</p>
            </div>
        `;

        // 3. Menampilkan hasil (jawaban simulasi) di halaman web
        hasilContainer.innerHTML = jawabanSimulasi;
    });

});