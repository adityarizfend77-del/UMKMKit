// Menunggu sampai seluruh konten halaman HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Mengambil elemen-elemen HTML yang kita butuhkan
    const form = document.getElementById('deskripsi-form');
    const hasilParagraf = document.getElementById('hasil-deskripsi');

    // Menjalankan fungsi ini ketika tombol 'Buat Deskripsi' di-klik
    form.addEventListener('submit', (event) => {
        // Mencegah halaman refresh saat tombol diklik
        event.preventDefault();

        // 1. Mengambil semua nilai dari setiap kolom input
        const namaProduk = document.getElementById('nama_produk').value;
        const kategori = document.getElementById('kategori').value;
        const bahan = document.getElementById('bahan').value;
        const keunggulan = document.getElementById('keunggulan').value;
        const cocokUntuk = document.getElementById('cocok_untuk').value;

        [cite_start]// 2. Membuat prompt sesuai template dari dokumen PDF Anda [cite: 37]
        const promptUntukAI = `Buat 1 paragraf deskripsi produk (maks 40 kata) untuk marketplace dengan data: Nama=${namaProduk}, Kategori=${kategori}, Bahan=${bahan}, Keunggulan=${keunggulan}, Cocok untuk=${cocokUntuk}. Fokus pada manfaat pembeli. Tidak perlu hashtag.`;

        // --- PENTING ---
        // Di aplikasi nyata, prompt di atas akan dikirim ke AI (seperti GPT atau Gemini).
        // Untuk sekarang, kita SIMULASIKAN jawabannya agar fungsionalitasnya terlihat.
        const jawabanSimulasi = `Inilah ${namaProduk} dari bahan ${bahan} yang punya keunggulan ${keunggulan}. Sangat cocok untuk ${cocokUntuk}, produk ini akan menjadi pilihan tepat bagi Anda.`;

        // 3. Menampilkan hasil (jawaban simulasi) di halaman web
        hasilParagraf.textContent = jawabanSimulasi;
        hasilParagraf.style.fontStyle = 'normal'; // Menghilangkan gaya italic
    });

});