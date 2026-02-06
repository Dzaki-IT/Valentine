// 1. Data Kata-kata Pop-up (Who is Mulan)
const kataMulan = {
    cantik: { title: "Kamu Cantik ❤️", text: "Kecantikanmu abadi, memancar dari hati yang tulus." },
    pinter: { title: "Kamu Pinter 🧠", text: "Aku selalu kagum dengan caramu memahami banyak hal." },
    gemesin: { title: "Kamu Gemesin 🎀", text: "Tingkahmu selalu sukses bikin hari-hari lebih ceria!" },
    independent: { title: "Kamu Independent 💪", text: "Wanita hebat yang punya prinsip. Keren banget!" }
};

function openPopup(key) {
    const modal = document.getElementById("myModal");
    if(modal) {
        document.getElementById("popup-title").innerText = kataMulan[key].title;
        document.getElementById("popup-text").innerText = kataMulan[key].text;
        modal.style.display = "block";
    }
}

function closePopup() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) { modal.style.display = "none"; }
}

// --- LOGIKA MUSIK BERLANJUT & TOOLTIP ---
document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');

    // Cek status musik dari halaman sebelumnya
    const isPlaying = localStorage.getItem('musicPlaying') === 'true';
    const lastTime = localStorage.getItem('musicTime');

    if (lastTime) {
        music.currentTime = parseFloat(lastTime);
    }

    if (isPlaying) {
        // Browser butuh interaksi user dulu sebelum autoplay, 
        // jadi kita coba putar otomatis, jika gagal tombol tetap Play.
        music.play().then(() => {
            musicBtn.innerText = "⏸ Pause Music";
        }).catch(() => {
            localStorage.setItem('musicPlaying', 'false');
        });
    }

    // Update waktu musik setiap detik ke localStorage
    setInterval(() => {
        if (!music.paused) {
            localStorage.setItem('musicTime', music.currentTime);
        }
    }, 1000);

    if (musicBtn) {
        musicBtn.addEventListener('click', () => {
            if (music.paused) {
                music.play();
                musicBtn.innerText = "⏸ Pause Music";
                localStorage.setItem('musicPlaying', 'true');
            } else {
                music.pause();
                musicBtn.innerText = "🎵 Play Music";
                localStorage.setItem('musicPlaying', 'false');
            }
        });
    }

    // --- DESKRIPSI MELAYANG (TOOLTIP) ---
    const tooltip = document.createElement('div');
    tooltip.id = 'tooltip';
    document.body.appendChild(tooltip);

    const frames = document.querySelectorAll('.photo-frame');
    frames.forEach(frame => {
        frame.addEventListener('mousemove', (e) => {
            tooltip.innerText = frame.getAttribute('data-desc');
            tooltip.style.display = 'block';
            tooltip.style.left = e.clientX + 15 + 'px';
            tooltip.style.top = e.clientY + 15 + 'px';
        });
        frame.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
});
