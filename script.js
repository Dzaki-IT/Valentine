// ==========================================
// 1. DATA MASTER (Main & Movies 1-51)
// ==========================================
const kataMulan = {
    beautiful: { title: "Beautiful ❤️", text: "Kenapa beautiful? YA KARENA MULAN ITU EMANG SECANTIK ITU WOIII, semua orang yg papasan dijalan sama di apasti langsung jatuh cinta semua karena emang dis ecantik itu melebihi artis manapun, bahkan han so hee aja kalah cantik bruh" },
    smart: { title: "Smart 🧠", text: "Kenapa dia smart? YA BAYANGIN AJA BRUH, dia selalu OSN dan selalu masuk tingkat provinsi, dan lagi dia utbk terus dapet di UNSRI im very proud of her " },
    adorable: { title: "Adorable 🎀", text: "Mulan tuh aslinya imuttt bangettt, kalau lagi diluar aja dia kayak cool gituuu, padhaal aslinya dia tuuu omaygattt gemesin bangettttt aaaa" },
    independent: { title: "Independent 💪", text: "Mulan orangnya tuh mandiri bangett, dia udah bisa ngekos sendiri dan selalu punya planning tanpa harus dibantu orang lain, dia keren banget uda bisa ngurus dirinya sendiri di luar provinsinya, wlau sekarang udah balik ke provinsinya lagi hahaha" },
    disciplined: { title: "Disciplined ⏳", text: "Mulan kalau udah soal fokus ke 1 hal dia pasti bakal tekun banget, tapi dia ngerendah terosss, contohnya aja pas mau ujian, dia selalu bilang ga belajar tapi nyatanya pas malam dia belajarnya serius dan lama banget dan akhirnya dia dapet ipk 4.00" },
    thrifty: { title: "Thrifty 💰", text: "emm.....kayanya kalo ini agaakk....ehehhe ytta deh" },
    kindhearted: { title: "Kindhearted ✨", text: "wuohhh kalo ini dia emang paling paling, sumpah banyak banget yg dia gasengaja cerita dan dia nganggap itu biasa aja, padahal itu yang dia lakuin tuh baik banget, itulah kenapa aku cinta banget sama mulan hihihihi" },
    caring: { title: "Caring 🌸", text: "Apalagi ini, dia selalu peduli ke orang sekitarnya dulu dibanding dia sendiri, kadang aga kesel kalau dia udah ga mikirin diri sendir,  pasti kalau mulan baca ini langsung sok mikir 'hah emang aku gitu'" },

    dzaki: { title: "Bang Zeker", text: "Bang zeker wajib jadi orang yang paling di favoritin sama mulann hehhehehe, sorry npd", link: "" },
    hongtang: { title: "Hong Tang", text: "Mulan gila banget sama hong tang gatau kenapa, jadi pengen nyobain ajaajjaakajka when yah", link: "" },
    horror: { title: "Horror Movie", text: "Nonton film horror sambil sembunyi di balik bantal.", link: "" },
    money: { title: "Money", text: "Masa depan cerah dimulai dari rajin menabung!", link: "" },
    travel: { title: "Travelling", text: "Healing terbaik adalah melihat dunia luar.", link: "" },
    mercy: { title: "Mercy G Class", text: "Mobil impian Mulan, semoga segera terwujud!", link: "" },
    donut: { title: "Durian", text: "Donut paling enak sejagat raya!", link: "" },
    baking: { title: "Baking", text: "Kue bikinan Mulan selalu yang termanis.", link: "" },

    movie1: { title: "Movie 1", text: "Kenangan film 1...", link: "" },
    movie2: { title: "Movie 2", text: "Kenangan film 2...", link: "" },
    movie3: { title: "Movie 3", text: "Kenangan film 3...", link: "" },
    movie4: { title: "Movie 4", text: "Kenangan film 4...", link: "" },
    movie5: { title: "Movie 5", text: "Kenangan film 5...", link: "" },
    movie6: { title: "Movie 6", text: "Kenangan film 6...", link: "" },
    movie7: { title: "Movie 7", text: "Kenangan film 7...", link: "" },
    movie8: { title: "Movie 8", text: "Kenangan film 8...", link: "" },
    movie9: { title: "Movie 9", text: "Kenangan film 9...", link: "" },
    movie10: { title: "Movie 10", text: "Kenangan film 10...", link: "" },
    movie11: { title: "Movie 11", text: "Kenangan film 11...", link: "" },
    movie12: { title: "Movie 12", text: "Kenangan film 12...", link: "" },
    movie13: { title: "Movie 13", text: "Kenangan film 13...", link: "" },
    movie14: { title: "Movie 14", text: "Kenangan film 14...", link: "" },
    movie15: { title: "Movie 15", text: "Kenangan film 15...", link: "" },
    movie16: { title: "Movie 16", text: "Kenangan film 16...", link: "" },
    movie17: { title: "Movie 17", text: "Kenangan film 17...", link: "" },
    movie18: { title: "Movie 18", text: "Kenangan film 18...", link: "" },
    movie19: { title: "Movie 19", text: "Kenangan film 19...", link: "" },
    movie20: { title: "Movie 20", text: "Kenangan film 20...", link: "" },
    movie21: { title: "Movie 21", text: "Kenangan film 21...", link: "" },
    movie22: { title: "Movie 22", text: "Kenangan film 22...", link: "" },
    movie23: { title: "Movie 23", text: "Kenangan film 23...", link: "" },
    movie24: { title: "Movie 24", text: "Kenangan film 24...", link: "" },
    movie25: { title: "Movie 25", text: "Kenangan film 25...", link: "" },
    movie26: { title: "Movie 26", text: "Kenangan film 26...", link: "" },
    movie27: { title: "Movie 27", text: "Kenangan film 27...", link: "" },
    movie28: { title: "Movie 28", text: "Kenangan film 28...", link: "" },
    movie29: { title: "Movie 29", text: "Kenangan film 29...", link: "" },
    movie30: { title: "Movie 30", text: "Kenangan film 30...", link: "" },
    movie31: { title: "Movie 31", text: "Kenangan film 31...", link: "" },
    movie32: { title: "Movie 32", text: "Kenangan film 32...", link: "" },
    movie33: { title: "Movie 33", text: "Kenangan film 33...", link: "" },
    movie34: { title: "Movie 34", text: "Kenangan film 34...", link: "" },
    movie35: { title: "Movie 35", text: "Kenangan film 35...", link: "" },
    movie36: { title: "Movie 36", text: "Kenangan film 36...", link: "" },
    movie37: { title: "Movie 37", text: "Kenangan film 37...", link: "" },
    movie38: { title: "Movie 38", text: "Kenangan film 38...", link: "" },
    movie39: { title: "Movie 39", text: "Kenangan film 39...", link: "" },
    movie40: { title: "Movie 40", text: "Kenangan film 40...", link: "" },
    movie41: { title: "Movie 41", text: "Kenangan film 41...", link: "" },
    movie42: { title: "Movie 42", text: "Kenangan film 42...", link: "" },
    movie43: { title: "Movie 43", text: "Kenangan film 43...", link: "" },
    movie44: { title: "Movie 44", text: "Kenangan film 44...", link: "" },
    movie45: { title: "Movie 45", text: "Kenangan film 45...", link: "" },
    movie46: { title: "Movie 46", text: "Kenangan film 46...", link: "" },
    movie47: { title: "Movie 47", text: "Kenangan film 47...", link: "" },
    movie48: { title: "Movie 48", text: "Kenangan film 48...", link: "" },
    movie49: { title: "Movie 49", text: "Kenangan film 49...", link: "" },
    movie50: { title: "Movie 50", text: "Kenangan film 50...", link: "" },
    movie51: { title: "Movie 51", text: "Kenangan film 51...", link: "" }
};

// ==========================================
// 2. DATA PAP GEMOY (1-20)
// ==========================================
const kataGemoy = {
    gemoy1: { text: "Senyum candu.", video: "gemoy_video1.mp4" },
    gemoy2: { text: "Gemoy banget!", video: "gemoy_video2.mp4" },
    gemoy3: { text: "Lucu!", video: "gemoy_video3.mp4" },
    gemoy4: { text: "Gemes!", video: "gemoy_video4.mp4" },
    gemoy5: { text: "Cantik!", video: "gemoy_video5.mp4" },
    gemoy6: { text: "Momen 6", video: "gemoy_video6.mp4" },
    gemoy7: { text: "Momen 7", video: "gemoy_video7.mp4" },
    gemoy8: { text: "Momen 8", video: "gemoy_video8.mp4" },
    gemoy9: { text: "Momen 9", video: "gemoy_video9.mp4" },
    gemoy10: { text: "Momen 10", video: "gemoy_video10.mp4" },
    gemoy11: { text: "Momen 11", video: "gemoy_video11.mp4" },
    gemoy12: { text: "Momen 12", video: "gemoy_video12.mp4" },
    gemoy13: { text: "Momen 13", video: "gemoy_video13.mp4" },
    gemoy14: { text: "Momen 14", video: "gemoy_video14.mp4" },
    gemoy15: { text: "Momen 15", video: "gemoy_video15.mp4" },
    gemoy16: { text: "Momen 16", video: "gemoy_video16.mp4" },
    gemoy17: { text: "Momen 17", video: "gemoy_video17.mp4" },
    gemoy18: { text: "Momen 18", video: "gemoy_video18.mp4" },
    gemoy19: { text: "Momen 19", video: "gemoy_video19.mp4" },
    gemoy20: { text: "Momen 20", video: "gemoy_video20.mp4" }
};

// ==========================================
// 3. FUNGSI UNTUK INDEX & MOVIES
// ==========================================
function openPopup(key) {
    const modal = document.getElementById("myModal");
    if (!modal) return;
    const title = document.getElementById("popup-title");
    const text = document.getElementById("popup-text");
    const linkBtn = document.getElementById("popup-link");

    if (kataMulan[key]) {
        if (title) title.innerText = kataMulan[key].title;
        if (text) text.innerText = kataMulan[key].text;
        if (linkBtn) {
            if (kataMulan[key].link && kataMulan[key].link !== "") {
                linkBtn.href = kataMulan[key].link;
                linkBtn.style.display = "inline-block";
            } else { linkBtn.style.display = "none"; }
        }
        modal.style.display = "block";
    }
}
function closePopup() { document.getElementById("myModal").style.display = "none"; }

// ==========================================
// 4. FUNGSI UNTUK PAP GEMOY (VIDEO)
// ==========================================
function openGemoyPopup(key) {
    const modal = document.getElementById("gemoyModal");
    if (!modal) return;
    const videoContainer = document.getElementById("gemoy-video-container");
    const popupText = document.getElementById("gemoy-popup-text");

    if (kataGemoy[key]) {
        if (popupText) popupText.innerText = kataGemoy[key].text;
        if (videoContainer) {
            videoContainer.innerHTML = `<video controls autoplay muted playsinline><source src="${kataGemoy[key].video}" type="video/mp4"></video>`;
        }
        modal.style.display = "block";
    }
}
function closeGemoyPopup() {
    const videoContainer = document.getElementById("gemoy-video-container");
    if (videoContainer) videoContainer.innerHTML = '';
    document.getElementById("gemoyModal").style.display = "none";
}

// ==========================================
// 5. FUNGSI UNTUK ROBLOX (PREVIEW GAMBAR)
// ==========================================
function openImagePopup(imgSrc) {
    const modal = document.getElementById("imageModal");
    const fullImg = document.getElementById("img-full");
    if (modal && fullImg) {
        fullImg.src = imgSrc;
        modal.style.display = "flex"; // Pakai flex biar gambar benar-benar tengah
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
    }
}
function closeImagePopup() {
    document.getElementById("imageModal").style.display = "none";
}

// ==========================================
// 6. GLOBAL EVENT & MUSIC
// ==========================================
window.onclick = function(event) {
    const m1 = document.getElementById("myModal");
    const m2 = document.getElementById("gemoyModal");
    const m3 = document.getElementById("imageModal");
    if (event.target == m1) m1.style.display = "none";
    if (event.target == m2) closeGemoyPopup();
    if (event.target == m3) m3.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');
    if (musicBtn && music) {
        musicBtn.addEventListener('click', () => {
            if (music.paused) { music.play(); musicBtn.innerText = "⏸ Pause Music"; }
            else { music.pause(); musicBtn.innerText = "🎵 Play Music"; }
        });
    }
});


