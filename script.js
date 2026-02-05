document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');

    musicBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicBtn.innerText = "⏸ Pause Music";
        } else {
            music.pause();
            musicBtn.innerText = "🎵 Play Music";
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(s => observer.observe(s));
});
