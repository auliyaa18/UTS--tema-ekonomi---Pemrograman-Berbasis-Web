document.addEventListener('DOMContentLoaded', () => {
    // Fungsionalitas Navigasi Mobile (Hamburger Menu)
    const navToggle = document.querySelector('.nav-toggle');
    const secondaryNav = document.querySelector('.secondary-nav'); // Target secondary-nav

    if (navToggle && secondaryNav) {
        navToggle.addEventListener('click', () => {
            secondaryNav.classList.toggle('active');
            navToggle.classList.toggle('active'); // Untuk animasi ikon hamburger
        });

        // Menutup navigasi saat item diklik (untuk mobile)
        document.querySelectorAll('.secondary-nav ul li a').forEach(item => { // Tautan di secondary-nav
            item.addEventListener('click', () => {
                if (secondaryNav.classList.contains('active')) {
                    secondaryNav.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });

        // Menutup navigasi saat area di luar menu diklik (di mobile)
        secondaryNav.addEventListener('click', (e) => {
            if (e.target === secondaryNav) { // Hanya jika mengklik area background overlay
                secondaryNav.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Fungsionalitas Modal Gambar Produk (Hanya aktif di halaman produk.html)
    const productThumbnails = document.querySelectorAll('.product-thumbnail');
    const modal = document.getElementById('product-modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close-button');

    if (productThumbnails.length > 0 && modal && modalImage && closeButton) { // Pastikan elemen ada
        productThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                modal.style.display = 'block';
                modalImage.src = thumbnail.src;
                modalImage.alt = thumbnail.alt;
            });
        });

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Fungsionalitas Jadwal Live TikTok (Hanya aktif di halaman pemesanan.html)
    const liveTimeElement = document.getElementById('live-time');
    if (liveTimeElement) { // Pastikan elemen ada
        const now = new Date();
        const day = now.getDay(); // 0 = Minggu, 1 = Senin, dst.
        const hour = now.getHours();

        let liveScheduleText = "Tidak ada jadwal live saat ini.";

        // Contoh jadwal: Senin, Rabu, Jumat pukul 19:00 - 21:00 WIB
        if ((day === 1 || day === 2 || day === 3 || day == 4 || day == 5 || day == 6) && (hour >= 19 && hour < 2)) {
            liveScheduleText = "Live Sekarang! Pukul 19:00 - 21:00 WIB";
        } else if (day === 1 || day === 3 || day === 5) {
            liveScheduleText = `Akan Live Pukul 19:00 - 1:00 WIB`;
        } else {
            liveScheduleText = "Akan Live Setiap Senin, selasa, rabu, kamis, jumat, sabtu Pukul 19:00 - 1:00 WIB";
        }
        liveTimeElement.textContent = liveScheduleText;
    }

    // Menandai menu navigasi yang aktif berdasarkan halaman saat ini
    const currentPath = window.location.pathname.split('/').pop(); // Ambil nama file HTML saat ini (e.g., "index.html")
    const navLinks = document.querySelectorAll('.secondary-nav ul li a'); // Target tautan di secondary-nav

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href'); // Ambil href dari tautan (e.g., "index.html")

        // Jika linkPath sama dengan currentPath, atau jika currentPath kosong (berarti index.html)
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active'); // Tambahkan kelas 'active'
        } else {
            link.classList.remove('active'); // Pastikan tautan lain tidak memiliki kelas 'active'
        }
    });
});