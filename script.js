document.addEventListener('DOMContentLoaded', () => {
    // Kontrol Musik
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

    // Animasi muncul saat scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease-out";
        observer.observe(section);
    });
});
