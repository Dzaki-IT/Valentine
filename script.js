// Tunggu hingga dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Kontrol Musik
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');

    if (musicBtn) {
        musicBtn.addEventListener('click', () => {
            if (music.paused) {
                music.play();
                musicBtn.innerText = "⏸ Pause Music";
            } else {
                music.pause();
                musicBtn.innerText = "🎵 Play Music";
            }
        });
    }

    // 2. Animasi Fade-in saat Scroll (Opsional untuk estetika tambahan)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

});