// Data kata-kata manis untuk Mulan
const kataMulan = {
    cantik: {
        title: "Kamu Cantik ❤️",
        text: "Kecantikanmu itu abadi, Mulan. Bukan cuma soal apa yang terlihat, tapi soal caramu tersenyum dan memperlakukan orang lain dengan tulus."
    },
    pinter: {
        title: "Kamu Pinter 🧠",
        text: "Pikiranmu adalah aset yang luar biasa. Aku selalu kagum melihat betapa cerdasnya kamu dalam memahami banyak hal."
    },
    gemesin: {
        title: "Kamu Gemesin 🎀",
        text: "Gak ada obat! Tingkah lakumu selalu sukses bikin hari-hari jadi lebih berwarna. Tetaplah jadi Mulan yang ceria ya!"
    },
    independent: {
        title: "Kamu Independent 💪",
        text: "Kamu adalah definisi wanita kuat masa kini. Mandiri, punya prinsip, dan gak gampang menyerah. Keren banget!"
    }
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

// Kontrol Musik
document.addEventListener('DOMContentLoaded', () => {
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
});
