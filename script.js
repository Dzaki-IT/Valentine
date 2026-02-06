const kataMulan = {
    beautiful: { title: "Beautiful ❤️", text: "Kecantikanmu abadi, memancar dari hati yang tulus." },
    smart: { title: "Smart 🧠", text: "Aku selalu kagum dengan caramu memahami banyak hal." },
    adorable: { title: "Adorable 🎀", text: "Tingkahmu selalu sukses bikin hari-hari lebih ceria!" },
    independent: { title: "Independent 💪", text: "Wanita kuat yang punya prinsip. Keren banget!" },
    disciplined: { title: "Disciplined ⏳", text: "Kamu sangat menghargai waktu dan konsisten. Hebat!" },
    thrifty: { title: "Thrifty 💰", text: "Bijak dalam mengelola apa yang kamu miliki untuk masa depan." },
    kindhearted: { title: "Kindhearted ✨", text: "Kebaikan hatimu membuat orang di sekitarmu merasa nyaman." },
    caring: { title: "Caring 🌸", text: "Kamu sangat perhatian dengan hal-hal kecil sekalipun." }
};

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

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');
    if (musicBtn) {
        musicBtn.addEventListener('click', () => {
            if (music.paused) { music.play(); musicBtn.innerText = "⏸ Pause Music"; }
            else { music.pause(); musicBtn.innerText = "🎵 Play Music"; }
        });
    }

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
        frame.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
    });
});
