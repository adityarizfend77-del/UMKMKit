// Menunggu sampai seluruh konten halaman HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Mengambil elemen-elemen HTML yang kita butuhkan dari caption.html
    const form = document.getElementById('caption-form');
    const hasilContainer = document.getElementById('hasil-caption');

    // Menjalankan fungsi ini ketika tombol 'Buat Caption' di-klik
    form.addEventListener('submit', (event) => {
        // Mencegah halaman refresh saat tombol diklik
        event.preventDefault();

        // 1. Mengambil semua nilai dari setiap kolom input
        const namaProduk = document.getElementById('nama_produk').value;
        const kategori = document.getElementById('kategori').value;
        const harga = document.getElementById('harga').value;
        const usp = document.getElementById('usp').value;
        const targetAudiens = document.getElementById('target_audiens').value;
        const tone = document.getElementById('tone').value;
        const cta = document.getElementById('cta').value;

        // 2. Membuat prompt sesuai template dari dokumen PDF Anda (BAB 1 Generator Caption)
        const promptUntukAI = `Buat 3 varian caption Instagram untuk produk berikut:
- Nama: ${namaProduk}
- Kategori: ${kategori}
- Harga: ${harga}
- USP: ${usp}
- Target: ${targetAudiens}
- Tone: ${tone}
- CTA: ${cta}

Aturan:
- Tiap varian 25-40 kata.
- Maksimal 2 emoji per caption.
- Akhiri dengan 3 hashtag relevan per varian.
- Format: Varian 1:, Varian 2:, Varian 3:.`;

        // --- PENTING ---
        // Sekali lagi, kita SIMULASIKAN jawaban AI agar fungsionalitasnya terlihat.
        // Jawaban simulasi ini meniru format output yang kita harapkan dari AI.
        const jawabanSimulasi = `
            <p><strong>Varian 1:</strong> Tampil beda dengan ${namaProduk} kami! Dibuat dengan ${usp}, produk ini cocok banget untuk kamu para ${targetAudiens}. Harganya cuma ${harga}, lho! ✨ ${cta}.<br>#${kategori.replace(' ', '')} #ProdukKeren #GayaMasaKini</p>
            <p><strong>Varian 2:</strong> Cari produk kategori ${kategori}? Coba ${namaProduk} kami! Dengan gaya yang ${tone} dan kualitas terbaik, ini pilihan tepat. Yuk, ${cta} sekarang juga! 😉<br>#${namaProduk.replace(' ', '')} #PromoSpesial #BestSeller</p>
            <p><strong>Varian 3:</strong> Perhatian, ${targetAudiens}! ${namaProduk} ini punya keunggulan ${usp} yang nggak ada duanya. Dapatkan segera dengan harga ${harga}. Jangan sampai kehabisan, ${cta}!<br>#FashionIndonesia #OOTD #MustHave</p>
        `;

        // 3. Menampilkan hasil (jawaban simulasi) di halaman web
        hasilContainer.innerHTML = jawabanSimulasi;
    });

});