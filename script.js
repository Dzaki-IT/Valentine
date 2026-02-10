// ==========================================
// 1. DATA HALAMAN UTAMA (Who Is Mulan & Favorites)
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

    // Mulan's Favorites
    dzaki: { title: "Dzaki", text: "Dzaki itu orang yang paling spesial buat Mulan.", link: "" },
    hongtang: { title: "Hong Tang", text: "Dessert favorit yang gak pernah gagal bikin mood balik!", link: "" },
    horror: { title: "Horror Movie", text: "Nonton film horror sambil sembunyi di balik bantal.", link: "" },
    money: { title: "Money", text: "Masa depan cerah dimulai dari rajin menabung!", link: "" },
    travel: { title: "Travel", text: "Healing terbaik adalah melihat dunia luar.", link: "" },
    mercy: { title: "Mercy G Class", text: "Mobil impian Mulan, semoga segera terwujud!", link: "" },
    donut: { title: "Donut", text: "Donut paling enak sejagat raya!", link: "" },
    baking: { title: "Baking", text: "Kue bikinan Mulan selalu yang termanis.", link: "" },

    // ==========================================
    // 2. DATA MOVIES (1 - 51)
    // ==========================================
    movie1: { title: "Movie 1", text: "Kenangan film pertama kita.", link: "" },
    movie2: { title: "Movie 2", text: "Pesan manis untuk film kedua...", link: "" },
    movie3: { title: "Movie 3", text: "Deskripsi film ketiga...", link: "" },
    movie4: { title: "Movie 4", text: "Deskripsi film keempat...", link: "" },
    movie5: { title: "Movie 5", text: "Deskripsi film kelima...", link: "" },
    movie6: { title: "Movie 6", text: "Deskripsi film keenam...", link: "" },
    movie7: { title: "Movie 7", text: "Deskripsi film ketujuh...", link: "" },
    movie8: { title: "Movie 8", text: "Deskripsi film kedelapan...", link: "" },
    movie9: { title: "Movie 9", text: "Deskripsi film kesembilan...", link: "" },
    movie10: { title: "Movie 10", text: "Deskripsi film kesepuluh...", link: "" },
    movie11: { title: "Movie 11", text: "Deskripsi film ke-11...", link: "" },
    movie12: { title: "Movie 12", text: "Deskripsi film ke-12...", link: "" },
    movie13: { title: "Movie 13", text: "Deskripsi film ke-13...", link: "" },
    movie14: { title: "Movie 14", text: "Deskripsi film ke-14...", link: "" },
    movie15: { title: "Movie 15", text: "Deskripsi film ke-15...", link: "" },
    movie16: { title: "Movie 16", text: "Deskripsi film ke-16...", link: "" },
    movie17: { title: "Movie 17", text: "Deskripsi film ke-17...", link: "" },
    movie18: { title: "Movie 18", text: "Deskripsi film ke-18...", link: "" },
    movie19: { title: "Movie 19", text: "Deskripsi film ke-19...", link: "" },
    movie20: { title: "Movie 20", text: "Deskripsi film ke-20...", link: "" },
    movie21: { title: "Movie 21", text: "Deskripsi film ke-21...", link: "" },
    movie22: { title: "Movie 22", text: "Deskripsi film ke-22...", link: "" },
    movie23: { title: "Movie 23", text: "Deskripsi film ke-23...", link: "" },
    movie24: { title: "Movie 24", text: "Deskripsi film ke-24...", link: "" },
    movie25: { title: "Movie 25", text: "Deskripsi film ke-25...", link: "" },
    movie26: { title: "Movie 26", text: "Deskripsi film ke-26...", link: "" },
    movie27: { title: "Movie 27", text: "Deskripsi film ke-27...", link: "" },
    movie28: { title: "Movie 28", text: "Deskripsi film ke-28...", link: "" },
    movie29: { title: "Movie 29", text: "Deskripsi film ke-29...", link: "" },
    movie30: { title: "Movie 30", text: "Deskripsi film ke-30...", link: "" },
    movie31: { title: "Movie 31", text: "Deskripsi film ke-31...", link: "" },
    movie32: { title: "Movie 32", text: "Deskripsi film ke-32...", link: "" },
    movie33: { title: "Movie 33", text: "Deskripsi film ke-33...", link: "" },
    movie34: { title: "Movie 34", text: "Deskripsi film ke-34...", link: "" },
    movie35: { title: "Movie 35", text: "Deskripsi film ke-35...", link: "" },
    movie36: { title: "Movie 36", text: "Deskripsi film ke-36...", link: "" },
    movie37: { title: "Movie 37", text: "Deskripsi film ke-37...", link: "" },
    movie38: { title: "Movie 38", text: "Deskripsi film ke-38...", link: "" },
    movie39: { title: "Movie 39", text: "Deskripsi film ke-39...", link: "" },
    movie40: { title: "Movie 40", text: "Deskripsi film ke-40...", link: "" },
    movie41: { title: "Movie 41", text: "Deskripsi film ke-41...", link: "" },
    movie42: { title: "Movie 42", text: "Deskripsi film ke-42...", link: "" },
    movie43: { title: "Movie 43", text: "Deskripsi film ke-43...", link: "" },
    movie44: { title: "Movie 44", text: "Deskripsi film ke-44...", link: "" },
    movie45: { title: "Movie 45", text: "Deskripsi film ke-45...", link: "" },
    movie46: { title: "Movie 46", text: "Deskripsi film ke-46...", link: "" },
    movie47: { title: "Movie 47", text: "Deskripsi film ke-47...", link: "" },
    movie48: { title: "Movie 48", text: "Deskripsi film ke-48...", link: "" },
    movie49: { title: "Movie 49", text: "Deskripsi film ke-49...", link: "" },
    movie50: { title: "Movie 50", text: "Deskripsi film ke-50...", link: "" },
    movie51: { title: "Movie 51", text: "Kenangan film terakhir yang paling berkesan.", link: "" }
};

// ==========================================
// 3. DATA PAP GEMOY (1 - 20)
// ==========================================
const kataGemoy = {
    gemoy1: { text: "Senyum kamu itu candu.", video: "gemoy_video1.mp4" },
    gemoy2: { text: "Gemoy banget pas lagi begini!", video: "gemoy_video2.mp4" },
    gemoy3: { text: "Jangan capek-capek ya cantik.", video: "gemoy_video3.mp4" },
    gemoy4: { text: "Si paling lucu sejagat raya.", video: "gemoy_video4.mp4" },
    gemoy5: { text: "Momen paling favorit aku.", video: "gemoy_video5.mp4" },
    gemoy6: { text: "Gemesnya nggak ada obat!", video: "gemoy_video6.mp4" },
    gemoy7: { text: "Pipinya minta dicubit banget.", video: "gemoy_video7.mp4" },
    gemoy8: { text: "Semangat terus ya harinya!", video: "gemoy_video8.mp4" },
    gemoy9: { text: "Tingkahmu selalu bikin ketawa.", video: "gemoy_video9.mp4" },
    gemoy10: { text: "Definisi bidadari lagi main HP.", video: "gemoy_video10.mp4" },
    gemoy11: { text: "Kenapa bisa segemoy ini sih?", video: "gemoy_video11.mp4" },
    gemoy12: { text: "Mood booster aku tiap hari.", video: "gemoy_video12.mp4" },
    gemoy13: { text: "Stay happy and healthy, Mulan.", video: "gemoy_video13.mp4" },
    gemoy14: { text: "Muka ngantuknya aja gemoy.", video: "gemoy_video14.mp4" },
    gemoy15: { text: "Tertawalah terus biar dunia indah.", video: "gemoy_video15.mp4" },
    gemoy16: { text: "Cantik luar dalam, itu kamu.", video: "gemoy_video16.mp4" },
    gemoy17: { text: "Momen yang nggak akan terlupakan.", video: "gemoy_video17.mp4" },
    gemoy18: { text: "You look so perfect to me.", video: "gemoy_video18.mp4" },
    gemoy19: { text: "Always proud of you!", video: "gemoy_video19.mp4" },
    gemoy20: { text: "Love you more than anything.", video: "gemoy_video20.mp4" }
};

    // DATA ROBLOX (1 - 25)
    roblox1: { title: "Roblox 1", text: "Momen seru pas main bareng Mulan!", link: "" },
    roblox2: { title: "Roblox 2", text: "Kenangan di map ini paling lucu.", link: "" },
    roblox3: { title: "Roblox 3", text: "Deskripsi Roblox 3...", link: "" },
    roblox4: { title: "Roblox 4", text: "Deskripsi Roblox 4...", link: "" },
    roblox5: { title: "Roblox 5", text: "Deskripsi Roblox 5...", link: "" },
    roblox6: { title: "Roblox 6", text: "Deskripsi Roblox 6...", link: "" },
    roblox7: { title: "Roblox 7", text: "Deskripsi Roblox 7...", link: "" },
    roblox8: { title: "Roblox 8", text: "Deskripsi Roblox 8...", link: "" },
    roblox9: { title: "Roblox 9", text: "Deskripsi Roblox 9...", link: "" },
    roblox10: { title: "Roblox 10", text: "Deskripsi Roblox 10...", link: "" },
    roblox11: { title: "Roblox 11", text: "Deskripsi Roblox 11...", link: "" },
    roblox12: { title: "Roblox 12", text: "Deskripsi Roblox 12...", link: "" },
    roblox13: { title: "Roblox 13", text: "Deskripsi Roblox 13...", link: "" },
    roblox14: { title: "Roblox 14", text: "Deskripsi Roblox 14...", link: "" },
    roblox15: { title: "Roblox 15", text: "Deskripsi Roblox 15...", link: "" },
    roblox16: { title: "Roblox 16", text: "Deskripsi Roblox 16...", link: "" },
    roblox17: { title: "Roblox 17", text: "Deskripsi Roblox 17...", link: "" },
    roblox18: { title: "Roblox 18", text: "Deskripsi Roblox 18...", link: "" },
    roblox19: { title: "Roblox 19", text: "Deskripsi Roblox 19...", link: "" },
    roblox20: { title: "Roblox 20", text: "Deskripsi Roblox 20...", link: "" },
    roblox21: { title: "Roblox 21", text: "Deskripsi Roblox 21...", link: "" },
    roblox22: { title: "Roblox 22", text: "Deskripsi Roblox 22...", link: "" },
    roblox23: { title: "Roblox 23", text: "Deskripsi Roblox 23...", link: "" },
    roblox24: { title: "Roblox 24", text: "Deskripsi Roblox 24...", link: "" },
    roblox25: { title: "Roblox 25", text: "Kenangan terakhir di Roblox yang paling GG!", link: "" }

// ==========================================
// 4. LOGIKA POP-UP STANDAR (Main & Movies)
// ==========================================
function openPopup(key) {
    const modal = document.getElementById("myModal");
    const linkBtn = document.getElementById("popup-link");
    
    if (kataMulan[key]) {
        document.getElementById("popup-title").innerText = kataMulan[key].title;
        document.getElementById("popup-text").innerText = kataMulan[key].text;
        
        // Munculkan tombol trailer hanya jika ada linknya
        if (linkBtn) {
            if (kataMulan[key].link && kataMulan[key].link !== "") {
                linkBtn.href = kataMulan[key].link;
                linkBtn.style.display = "inline-block";
            } else {
                linkBtn.style.display = "none";
            }
        }
        
        modal.style.display = "block";
    }
}

function closePopup() {
    document.getElementById("myModal").style.display = "none";
}

// ==========================================
// 5. LOGIKA POP-UP VIDEO (Pap Gemoy)
// ==========================================
function openGemoyPopup(key) {
    const modal = document.getElementById("gemoyModal");
    const videoContainer = document.getElementById("gemoy-video-container");
    const popupText = document.getElementById("gemoy-popup-text");

    if (kataGemoy[key]) {
        if (popupText) popupText.innerText = kataGemoy[key].text;
        
        if (videoContainer) {
            videoContainer.innerHTML = `
                <video controls autoplay muted playsinline>
                    <source src="${kataGemoy[key].video}" type="video/mp4">
                    Browser kamu tidak mendukung video.
                </video>
            `;
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
// 6. GLOBAL EVENT LISTENER
// ==========================================
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    const gemoyModal = document.getElementById("gemoyModal");
    
    if (event.target == modal) closePopup();
    if (event.target == gemoyModal) closeGemoyPopup();
}

// Music Player Logic
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

