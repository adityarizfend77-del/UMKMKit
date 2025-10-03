// Menunggu sampai seluruh konten halaman HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Mengambil elemen-elemen HTML yang kita butuhkan dari chat.html
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');

    // Menjalankan fungsi ini ketika form chat di-submit (tombol kirim diklik)
    chatForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah halaman refresh

        const userMessageText = userInput.value.trim(); // Ambil teks dari input & hapus spasi

        if (userMessageText === '') {
            return; // Jika pesan kosong, jangan lakukan apa-apa
        }

        // 1. Tampilkan pesan pengguna di layar
        displayMessage(userMessageText, 'user-message');

        // Kosongkan kembali kolom input
        userInput.value = '';

        // 2. Tampilkan balasan (simulasi) dari Aksara setelah jeda singkat
        setTimeout(() => {
            getAksaraResponse(userMessageText);
        }, 1200); // Jeda 1.2 detik untuk simulasi berpikir
    });

    /**
     * Fungsi untuk menampilkan pesan baru di jendela chat
     * @param {string} text - Isi pesan
     * @param {string} className - class untuk styling ('user-message' atau 'aksara-message')
     */
    function displayMessage(text, className) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', className);

        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        
        messageDiv.appendChild(paragraph);
        chatWindow.appendChild(messageDiv);

        // Auto-scroll ke pesan paling bawah
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    /**
     * Fungsi untuk mensimulasikan balasan dari AI "Aksara"
     * @param {string} userMessageText - Pesan dari pengguna
     */
    function getAksaraResponse(userMessageText) {
        // Sesuai dokumen PDF Anda, kita akan "membungkus" pertanyaan user dengan konteks.
        // Kita anggap saja kategorinya F&B untuk simulasi ini.
        const kategori = "Makanan & Minuman";
        const promptUntukAI = `Konteks: Pemilik UMKM [Kategori: ${kategori}] bertanya. Pertanyaan Pengguna: "${userMessageText}"`;

        console.log("Prompt yang akan dikirim ke AI:", promptUntukAI);

        // --- PENTING ---
        // Jawaban di bawah ini HANYA SIMULASI. Di aplikasi nyata, 
        // kita akan mengirim 'promptUntukAI' ke server dan mendapatkan jawaban asli.
        const jawabanSimulasi = "Terima kasih atas pertanyaannya. Ini adalah jawaban simulasi dari Aksara. Dalam versi production, saya akan menjawab berdasarkan konteks pertanyaan Anda tentang '" + userMessageText + "' dengan saran yang praktis.";

        // Tampilkan jawaban simulasi di layar
        displayMessage(jawabanSimulasi, 'aksara-message');
    }
});