// Menambahkan event listener untuk ikon pencarian
document.getElementById('search-icon').addEventListener('click', function() {
    const searchBox = document.getElementById('search-box');
    searchBox.classList.toggle('active'); // Toggle untuk menampilkan/menyembunyikan search box
});

// Fungsi pencarian produk
function searchProduct(event) {
    // Cek apakah tombol yang ditekan adalah Enter (key code 13)
    if (event.key === "Enter") {
        var searchQuery = document.getElementById('search-input').value.toLowerCase(); // Ambil kata kunci pencarian

        // Ambil semua elemen produk
        var products = document.querySelectorAll('.box');
        var found = false;

        // Loop untuk mengecek setiap produk
        products.forEach(function(product) {
            var productName = product.querySelector('.content h3').innerText.toLowerCase(); // Ambil nama produk

            product.classList.remove('highlight'); // Hapus highlight sebelumnya

            // Jika nama produk mengandung kata kunci pencarian
            if (productName.includes(searchQuery)) {
                product.classList.add('highlight'); // Tambahkan highlight pada produk yang cocok
                product.scrollIntoView({ behavior: "smooth" }); // Scroll ke produk yang ditemukan
                found = true;
            } else {
                product.style.display = "none"; // Sembunyikan produk yang tidak sesuai
            }
        });

        // Menampilkan atau menyembunyikan notifikasi jika produk tidak ditemukan
        var notification = document.getElementById('notification');
        var noProductMessage = document.getElementById('no-product-message');
        
        // Menampilkan notifikasi dan paragraf "Barang tidak tersedia"
        if (!found && searchQuery !== "") {
            notification.style.display = "block"; // Tampilkan notifikasi
            noProductMessage.style.display = "block"; // Tampilkan pesan "Barang tidak tersedia"
        } else {
            notification.style.display = "none"; // Sembunyikan notifikasi
            noProductMessage.style.display = "none"; // Sembunyikan pesan "Barang tidak tersedia"
        }
    }
}
