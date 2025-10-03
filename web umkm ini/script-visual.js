// Menunggu sampai seluruh konten halaman HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Mengambil elemen-elemen HTML yang kita butuhkan dari visual.html
    const form = document.getElementById('visual-form');
    const fileInput = document.getElementById('foto-produk');
    const imagePreview = document.getElementById('image-preview');
    const previewText = document.getElementById('preview-text');
    const hasilContainer = document.getElementById('hasil-visual');

    // --- BAGIAN 1: MENAMPILKAN PRATINJAU GAMBAR ---
    // Fungsi ini berjalan setiap kali pengguna memilih file baru
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0]; // Ambil file gambar yang dipilih

        if (file) {
            // Jika ada file, buat URL sementara untuk gambar tersebut
            const reader = new FileReader();
            reader.onload = (event) => {
                imagePreview.src = event.target.result; // Tampilkan gambar di elemen <img>
                imagePreview.style.display = 'block'; // Tampilkan elemen gambar
                previewText.style.display = 'none'; // Sembunyikan teks placeholder
            };
            reader.readAsDataURL(file);
        }
    });

    // --- BAGIAN 2: MENANGANI SUBMIT FORM ---
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah halaman refresh

        // Ambil data dari form
        const kategori = document.getElementById('kategori').value;
        const file = fileInput.files[0];

        if (!file) {
            alert('Mohon pilih sebuah foto terlebih dahulu.');
            return;
        }

        // Membuat prompt teks sesuai template dari dokumen PDF Anda
        const promptTeks = `Analisis foto produk: Kategori=${kategori}. Beri 3 rekomendasi praktis: (1) Komposisi & angle, (2) Pencahayaan, (3) Properti & latar. Saran mudah diterapkan.`;

        console.log("Prompt teks yang akan dikirim:", promptTeks);
        console.log("File gambar yang akan dikirim:", file.name);

        // --- PENTING ---
        // Karena kita tidak bisa menganalisis gambar asli di sini, kita hanya
        // akan menampilkan jawaban simulasi yang statis.
        const jawabanSimulasi = `
            <p><strong>1. Komposisi & Angle:</strong> (Jawaban Simulasi) Coba ambil foto dari sudut yang sedikit lebih rendah (low angle) untuk membuat produk terlihat lebih megah. Pastikan produk berada di tengah frame (rule of thirds).</p>
            <p><strong>2. Pencahayaan:</strong> (Jawaban Simulasi) Gunakan pencahayaan alami dari jendela di pagi atau sore hari. Hindari penggunaan flash langsung yang dapat menciptakan bayangan keras.</p>
            <p><strong>3. Properti & Latar:</strong> (Jawaban Simulasi) Gunakan latar belakang yang bersih dan tidak terlalu ramai agar fokus tetap pada produk. Tambahkan 1-2 properti kecil yang relevan dengan ${kategori} untuk mempercantik foto.</p>
        `;

        // Tampilkan hasil simulasi di halaman
        hasilContainer.innerHTML = jawabanSimulasi;
    });

});