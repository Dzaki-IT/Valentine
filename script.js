// ==========================================
// 1. DATA MASTER (Main, Movies, & Roblox)
// ==========================================
const kataMulan = {
    // Who Is Mulan
    beautiful: { title: "Beautiful ❤️", text: "Kecantikanmu abadi, memancar dari hati yang tulus." },
    smart: { title: "Smart 🧠", text: "Aku selalu kagum dengan caramu memahami banyak hal." },
    adorable: { title: "Adorable 🎀", text: "Tingkahmu selalu sukses bikin hari-hari lebih ceria!" },
    independent: { title: "Independent 💪", text: "Wanita hebat yang punya prinsip. Keren banget!" },
    disciplined: { title: "Disciplined ⏳", text: "Kamu sangat menghargai waktu dan konsisten. Hebat!" },
    thrifty: { title: "Thrifty 💰", text: "Bijak dalam mengelola apa yang kamu miliki untuk masa depan." },
    kindhearted: { title: "Kindhearted ✨", text: "Kebaikan hatimu membuat orang di sekitarmu merasa nyaman." },
    caring: { title: "Caring 🌸", text: "Kamu sangat perhatian dengan hal-hal kecil sekalipun." },

    // Favorites & Movies (Tetap pakai master ini)
    dzaki: { title: "Dzaki", text: "Dzaki itu orang yang paling spesial buat Mulan.", link: "" },
    hongtang: { title: "Hong Tang", text: "Dessert favorit yang gak pernah gagal bikin mood balik!", link: "" },
    horror: { title: "Horror Movie", text: "Nonton film horror sambil sembunyi di balik bantal.", link: "" },
    money: { title: "Money", text: "Masa depan cerah dimulai dari rajin menabung!", link: "" },
    travel: { title: "Travel", text: "Healing terbaik adalah melihat dunia luar.", link: "" },
    mercy: { title: "Mercy G Class", text: "Mobil impian Mulan, semoga segera terwujud!", link: "" },
    donut: { title: "Donut", text: "Donut paling enak sejagat raya!", link: "" },
    baking: { title: "Baking", text: "Kue bikinan Mulan selalu yang termanis.", link: "" },

    // Movie 1-51 & Roblox 1-25 (Silakan isi deskripsi sendiri)
    movie1: { title: "Movie 1", text: "Isi ceritamu di sini...", link: "" },
    // ... teruskan sampai movie51
    roblox1: { title: "Roblox 1", text: "Momen seru main Roblox!", link: "" },
    // ... teruskan sampai roblox25
};

// ==========================================
// 2. DATA PAP GEMOY (Video)
// ==========================================
const kataGemoy = {
    gemoy1: { text: "Senyum kamu candu.", video: "gemoy_video1.mp4" },
    gemoy2: { text: "Lucu banget!", video: "gemoy_video2.mp4" },
    // ... teruskan sampai gemoy20
};

// ==========================================
// 3. FUNGSI POP-UP STANDAR (Index, Movies, Roblox)
// ==========================================
function openPopup(key) {
    const modal = document.getElementById("myModal");
    const title = document.getElementById("popup-title");
    const text = document.getElementById("popup-text");
    const linkBtn = document.getElementById("popup-link");

    if (kataMulan[key] && modal) {
        if (title) title.innerText = kataMulan[key].title;
        if (text) text.innerText = kataMulan[key].text;
        
        if (linkBtn) {
            if (kataMulan[key].link && kataMulan[key].link !== "") {
                linkBtn.href = kataMulan[key].link;
                linkBtn.style.display = "inline-block";
            } else {
                linkBtn.style.display = "none";
            }
        }
        modal.style.display = "block"; // Pakai block/flex sesuai CSS kamu
    }
}

function closePopup() {
    const modal = document.getElementById("myModal");
    if (modal) modal.style.display = "none";
}

// ==========================================
// 4. FUNGSI POP-UP VIDEO (Pap Gemoy)
// ==========================================
function openGemoyPopup(key) {
    const modal = document.getElementById("gemoyModal");
    const videoContainer = document.getElementById("gemoy-video-container");
    const popupText = document.getElementById("gemoy-popup-text");

    if (kataGemoy[key] && modal) {
        if (popupText) popupText.innerText = kataGemoy[key].text;
        if (videoContainer) {
            videoContainer.innerHTML = `
                <video controls autoplay muted playsinline>
                    <source src="${kataGemoy[key].video}" type="video/mp4">
                </video>`;
        }
        modal.style.display = "block";
    }
}

function closeGemoyPopup() {
    const modal = document.getElementById("gemoyModal");
    const videoContainer = document.getElementById("gemoy-video-container");
    if (videoContainer) videoContainer.innerHTML = ''; 
    if (modal) modal.style.display = "none";
}

// ==========================================
// 5. PENUTUP MODAL & MUSIC
// ==========================================
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    const gemoyModal = document.getElementById("gemoyModal");
    if (event.target == modal) closePopup();
    if (event.target == gemoyModal) closeGemoyPopup();
}

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');
    if (musicBtn && music) {
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
