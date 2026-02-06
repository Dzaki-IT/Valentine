const kataMulan = {
    // Who is Mulan
    beautiful: { title: "Beautiful ❤️", text: "Kecantikanmu abadi, memancar dari hati yang tulus." },
    smart: { title: "Smart 🧠", text: "Aku selalu kagum dengan caramu memahami banyak hal." },
    adorable: { title: "Adorable 🎀", text: "Tingkahmu selalu sukses bikin hari-hari lebih ceria!" },
    independent: { title: "Independent 💪", text: "Wanita hebat yang punya prinsip. Keren banget!" },
    disciplined: { title: "Disciplined ⏳", text: "Kamu sangat menghargai waktu dan konsisten. Hebat!" },
    thrifty: { title: "Thrifty 💰", text: "Bijak dalam mengelola apa yang kamu miliki untuk masa depan." },
    kindhearted: { title: "Kindhearted ✨", text: "Kebaikan hatimu membuat orang di sekitarmu merasa nyaman." },
    caring: { title: "Caring 🌸", text: "Kamu sangat perhatian dengan hal-hal kecil sekalipun." },

    // Mulan's Favorites
    dzaki: { title: "Dzaki", text: "Dzaki itu orang yang paling spesial buat Mulan." },
    hongtang: { title: "Hong Tang", text: "Dessert favorit yang gak pernah gagal bikin mood balik!" },
    horror: { title: "Horror Movie", text: "Nonton film horror sambil sembunyi di balik bantal." },
    money: { title: "Money", text: "Masa depan cerah dimulai dari rajin menabung!" },
    travel: { title: "Travel", text: "Healing terbaik adalah melihat dunia luar." },
    mercy: { title: "Mercy G Class", text: "Mobil impian Mulan, semoga segera terwujud!" },
    donut: { title: "Donut", text: "Donut paling enak sejagat raya!" },
    baking: { title: "Baking", text: "Kue bikinan Mulan selalu yang termanis." }
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
});
