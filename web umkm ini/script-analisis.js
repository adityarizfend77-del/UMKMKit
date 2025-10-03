// Menunggu sampai seluruh konten halaman HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Mengambil elemen-elemen HTML yang kita butuhkan dari analisis.html
    const form = document.getElementById('analisis-form');
    const hasilContainer = document.getElementById('hasil-analisis');

    // Menjalankan fungsi ini ketika tombol 'Lakukan Analisis' di-klik
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah halaman refresh

        // 1. Mengambil semua nilai dari setiap kolom input
        const jenisUsaha = document.getElementById('jenis-usaha').value;
        const lokasi = document.getElementById('lokasi').value;
        const produk = document.getElementById('produk').value;

        // 2. Membuat prompt sesuai template dari dokumen PDF Anda (BAB 2 Analisis Pasar Mini)
        const promptUntukAI = `Analisis pasar singkat untuk: Jenis usaha=${jenisUsaha}, Lokasi=${lokasi}, Produk=${produk}. Beri 3 poin: (1) Tren/target audiens, (2) Persaingan singkat, (3) Saran positioning praktis.`; // [cite: 45]
        
        console.log("Prompt yang akan dikirim ke AI:", promptUntukAI);

        // --- PENTING ---
        // Jawaban di bawah ini adalah SIMULASI yang meniru format output dari AI.
        const jawabanSimulasi = `
            <p><strong>1. Tren & Target Audiens:</strong> Untuk ${jenisUsaha} di area ${lokasi}, tren saat ini mengarah pada produk yang otentik dan ramah lingkungan. Target audiens utama Anda kemungkinan adalah kalangan muda (18-35 tahun) yang aktif di media sosial dan mencari pengalaman baru.</p>
            <p><strong>2. Persaingan Singkat:</strong> Persaingan di ${lokasi} cukup ketat, dengan beberapa pemain besar dan banyak usaha kecil. Pembeda utama akan datang dari kualitas ${produk} Anda dan branding yang unik.</p>
            <p><strong>3. Saran Positioning Praktis:</strong> Posisikan usaha Anda sebagai pilihan premium namun terjangkau. Fokus pada cerita di balik ${produk} Anda dan bangun komunitas loyal melalui acara-acara kecil atau konten interaktif secara online.</p>
        `;

        // 3. Menampilkan hasil (jawaban simulasi) di halaman web
        hasilContainer.innerHTML = jawabanSimulasi;
    });

});