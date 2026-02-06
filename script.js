// 1. Data Kata-kata Pop-up
const kataMulan = {
    cantik: { title: "Kamu Cantik ❤️", text: "Kecantikanmu abadi, memancar dari hati yang tulus." },
    pinter: { title: "Kamu Pinter 🧠", text: "Aku selalu kagum dengan caramu memahami banyak hal." },
    gemesin: { title: "Kamu Gemesin 🎀", text: "Tingkahmu selalu sukses bikin hari-hari lebih ceria!" },
    independent: { title: "Kamu Independent 💪", text: "Wanita kuat yang punya prinsip. Keren banget!" }
};

// 2. Fungsi Pop-up
function openPopup(key) {
    const modal = document.getElementById("myModal");
    document.getElementById("popup-title").innerText = kataMulan[key].title;
    document.getElementById("popup-text").innerText = kataMulan[key].text;
    modal.style.display = "block";
}

function closePopup() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) { modal.style.display = "none"; }
}

// 3. Musik Control
document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');
    if (musicBtn) {
        musicBtn.addEventListener('click', () => {
            if (music.paused) { music.play(); musicBtn.innerText = "⏸ Pause Music"; }
            else { music.pause(); musicBtn.innerText = "🎵 Play Music"; }
        });
    }

    // 4. Deskripsi Melayang (Tooltip)
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
