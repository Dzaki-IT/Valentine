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
    horror: { title: "Horror Movie", text: "Mulan kalo udah nonton horror kalo dia takut pasti langsung minta ganti film karena dia emang sePENAKUT itu mwhehehe, apalagi pas nontom the autopsy of jane doe sama lla llorona", link: "" },
    money: { title: "Money", text: "Yah kalo ini gausah ditanya, dibanding semua hal, dia paling cinta sama ini wkwkwk", link: "" },
    travel: { title: "Travelling", text: "Healing terbaik adalah melihat dunia luar.", link: "" },
    mercy: { title: "Mercy G Class", text: "Salah satu mobil yang pengen mulan lihat di garasinya nanti, kalo pas kuliah sekarang maunya mazda 3 hatchback hahaha", link: "" },
    donut: { title: "Durian", text: "EWWWWWWW, kalo ketemu ntar kata mulan tar bawain aku satu karung durian dan itu harus habis semua, padahal durian gaenak (becanda sayang hehe)", link: "" },
    baking: { title: "Baking", text: "INI ADALAH KEAHLIAN MULAN YANG PALINGGG GILAKKK KEREN BANGETTT, aku jatuh cinta terus setiap denger cerita mulan pernah bikin apa aja, karena sekeren itu, ditunggu ntar yah, bakal ada mulan's bakery", link: "" },

    movie1: { title: "Mama", text: "film pertama barengg cayanggg akuuu hihihi, ceritanya tentang 2 anak yang tinggal dihutan dan diasuh sama hantu, aku masih ingat semua cerita film film yang kita tonton, karena semua momen bareng sama kamu itu berharga dan berarti bagi aku, jadi untuk film seterusnya bakal aku ceritain", link: "https://youtu.be/1lNyP7w3CuQ?si=5IkXnjNdvYqec5Ex" },
    movie2: { title: "The Autopsy Of Jane doe", text: "ini film horror kita yang dimana aku akui aku takut dan kamu senang banget dengar aku takut, setelah nonton kita lanjut main roblox sambil kamu yg cengcengin aku huhu, kalo soal cerita udah tau semua lah ya, tentang ayah dan anak yang autopsi mayat penyihir", link: "" },
    movie3: { title: "The Visit", text: "ini film yang kamu saranin karena kamu bilang filmnya bagus dan akhirnya kita tonton, ceritanya tentang 2 anak kecil yang nginap di rumah kakek sama neneknya tapi ternyata mereka bukan kakek dan nenek mereka karena yang asli udah dibunuh", link: "" },
    movie4: { title: "The Triangle", text: "ini film yang aku saranin buat kita nonton karena menurutku konsepnya bagus, ceritanya tentang seorang pemeran utama wanita yang terjebak di sebuah fenomena looping didalam kapal", link: "" },
    movie5: { title: "Bring Her Back", text: "film horror yang ini kita nemu di tiktok dan alhasil filmnya bagus dan juga seram, tapi disini aku gaada bilang takut wleee, ceritanya tentang anak yang di adopsi sama wanita yang mau numbalin mereka buat hidupi anaknya lagi", link: "" },
    movie6: { title: "Together", text: "together ni film yang aneh jujur pas kita nonton soalnya kayak aneh gitu, masa pasangannya jadi satu kesatuan gitu, alhasil sering kita jadiin candaan hahaha, ceritanya tentang 2 pasangan yg ga sengaja ketemu lobang yang nantinya bakal bikin mereka bersatu jadi 1 orang ", link: "" },
    movie7: { title: "The Babadook", text: "ini dilm horror psikologi yang kita tonton yang disturbing bgt, dulu pas kita nonton sering kayak hah? hah? gitu hahaa, ceritanya tentang hantu babadook yang ngehantuin rumah dari ibu dan anak, ibunya jadi gila bjir", link: "" },
    movie8: { title: "The Grudge", text: "jujur yang ini agak lupa karena menurutku filmnya kurang bagus dan kayanya pas kita nonton dulu ke distraksi terus, untuk ceritanya aku lupa", link: "" },
    movie9: { title: "Until Dawn", text: "ini film yang aku rekomendasiin, ceritanya tentang sirkel yang masuk ke dimensi lain karena mau nyari kawannya yg hilang", link: "" },
    movie10: { title: "Weapons", text: "ini film bagus banget dan sekaligus lucu tapi diending doang, kalo untuk seramnya ya b aja, kalo mulan gatau sih haha, ceritanya tentang orang yg dikendalikan sama nenek nenek dukun", link: "" },
    movie11: { title: "Before Sunrise", text: "ini romance pertama kita ahhahaha cuteeee, ceritanya tentang 2 orang yg ga sengaja ketemu dan mereka berjanji bakal ketemuan lagi di hari yg mereka janjiin", link: "" },
    movie12: { title: "The Conjuring", text: "ini film b aja karena udah nonton 3 kali (tetep serem sih), ceritanya ya gausah dijelasinlah udah terknenal", link: "" },
    movie13: { title: "One Day", text: "film romance yang lumayan gemesin, ceritanya tentang hts an yg over wwkwk", link: "" },
    movie14: { title: "Heretic", text: "ini film horror thriller bagus cuma rumit banget, gaada hantu hantuan, ceritanya tentang 2 cewe yang numpang dirumah orang terus dikurung suruh pilih pintu dan akhirnya dikurung buat jadi bahan uji coba", link: "" },
    movie15: { title: "Sinners", text: "film rekomendasi ku yg pertama kali masterpiece ahhaa, soalnya selalu gapernah bagus hehe, ceritanya soal 2 saudara yg bikin club tapi diteror sama vampir", link: "" },
    movie16: { title: "The Substance", text: "film yang mulan sukak karena konsepnya keren, ceritanya tentang artis yang menua pengen muda lagi dengan pakai serum yang membelah dirinya jadi 2", link: "" },
    movie17: { title: "Drop", text: "ini film yang mulan ketemu di tiktok, ceritanya tentang wanita yang diteror menggunakan airdrop dan diancam anaknya bakal dibunuh karena dia date sama buronan pemerintah", link: "" },
    movie18: { title: "500 Days Of Summers", text: "HHAHAHAHA INI FILM YANG ENDINGNYA SAD BANGET, hampir aja kami jadiin patokan buat hubungan kami, untungnya gajadi hahahha, ceritanya tentang ekspektasi seorang pria terhadap perasaan pasangannya yang akhirnya berujung ke sebuah kesedihan, behh kata katanya, ini bukan gpt yaaa >:(", link: "" },
    movie19: { title: "Going The Distance", text: "nahhhh sejauh ini, film ini adalah film romance yang paling relate sama kami hahahha, ceritanya tentang orang ldr, simple wkwkw ", link: "" },
    movie20: { title: "Black Phone 1", text: "film seru tapi mulan tidurrr huuuuu, ceritanya tentang anak yang dikurung terus ada telepon hitam yang ngasih arahan", link: "" },
    movie21: { title: "Sore", text: "jika aku harus hidup 10.000 kali pun, aku akan tetap memilih mulan, ceritanya tentang istri bernama sore yang mengulang hidupnya hanya agar suaminya hidup sehat", link: "" },
    movie22: { title: "The Notebook", text: "NAH INI FILM AKU SUKAKKKK BANGETT, ROMANCE YANG SAAT INI MASIH JADI TER FAVORIT, tengkyuuu sayangg udah ngajak nonton inii, ceritanya tentang cowok yang gamon dan cewek yang juga gamon dan akhirnya bersama wkwk", link: "" },
    movie23: { title: "Bones And All", text: "ini film buat seru-seruan aja, ceritanya tentang pasangan vampire yang bucin", link: "" },
    movie24: { title: "Fresh", text: "ini film awal dari segala awal HAAHAHHAHA YTTA YAAAAA, ceritanya tentang kanibal yg jualan ke orang kaya", link: "" },
    movie25: { title: "The Curse Of La Llorona", text: "film horror yang buat mulan ketakutan banget sampai minta ganti fim terus-terusan hahaha lucukkk bangettt, ceritanya tentang la llorona yg pengen banget masuk ke rumah orang", link: "" },
    movie26: { title: "Vivarium", text: "film yang paling bikin bingung dan sebel, endingnya membagongkan banget, ceritanya tentang pasangan yang pengen beli rumah, eh malah disuruh rawat anak", link: "" },
    movie27: { title: "The Possesion Of Hannah Grace", text: "film mirip mirip jane doe tapi kurang serem, ceritanya tentang autopsy jugak", link: "" },
    movie28: { title: "Shutter Island", text: "", link: "film yang mulan penasaran tapi dianya bosen huuu, ceritanya tentang orang skizo gara gara anaknya dibunuh istrinya" },
    movie29: { title: "Panggil Aku Ayah", text: "film yang lumayan sedih, tapi mulan ga nangis huh, ceritanya tentang anak yg dititip ke debt collector", link: "" },
    movie30: { title: "Avatar 1", text: "film keren keseukaan mulan dan sekeluarga inini, ceritanya ya taulah ya", link: "" },
    movie31: { title: "Zootopia 1", text: "film fomo kita buat persiapan nonton yang keduanya eh malah ga ditonton tonton, ceritanya tentang polisi kelinci yg ngungkapin misteri warga yg hilang dikotanya", link: "" },
    movie32: { title: "The Human Centipede 1", text: "ugggghhhh film disturbing, ceritanya tentang orang pengen bikin lipan wkwk", link: "" },
    movie33: { title: "The Human Centipede 3", text: "ughhhh film disturbing part 2, ceritanya sama aja", link: "" },
    movie34: { title: "Heart Eyes", text: "ini film lucu bangett ahahahaha sumpah, ceritanya tentang orang yg cemburuan di hari valentine haha", link: "" },
    movie35: { title: "Last Shift", text: "ini serem sih ibaratnya kalau mulan lagi sendiri di kos kayak gitu tuh ntar, ceritanya tentang polwan disuruh jaga malam sendiran eh malah kena teror hantu ", link: "" },
    movie36: { title: "The Medium", text: "fim dokumenter pertama dan nothing special, ceritanya tentang anak yg kena kutukan keluarga", link: "" },
    movie37: { title: "Companion", text: "film yang mulan juga sukakk, ceritanya tentang robot yg menyerupai manusia tapi disalahgunakan", link: "" },
    movie38: { title: "X", text: "ini film yang weird banget, ceritanya tentang produser film terus dibantai", link: "" },
    movie39: { title: "Pearl", text: "ini sama aja tapi nyeritain si pembantai", link: "" },
    movie40: { title: "Maxxine", text: "kalo ini lanjutan si yang selamatnya", link: "" },
    movie41: { title: "The Secret Of Marrowbone", text: "ini film bagus banget plot twistnya setelah berpuluh puluh film yang kami tonton, ya ga sayangg, ceritanya tentang seorang kakak tertua yang sayang banget sama adek adekknya, wah pokoknya ini wajib ditonton", link: "" },
    movie42: { title: "Dollhouse", text: "film horor jepang pertama yang kita tonton, ceritanya tentang ibu yg punya boneka terkutuk terus harus balikin bonekanya", link: "" },
    movie43: { title: "Eternity", text: "ini film fiction yang kami tonton paling unik konsepnya, ceritanya tentang kehidupan setelah alam baka ", link: "" },
    movie44: { title: "A Man Called Otto", text: "FILM YANG BIKIN AKU NANGIS KEJERRRRR AAAAAAA, awal mula stiker muka nangis aku iniiiii ishhh, ceritanya tentang kakek kakek pemarah", link: "" },
    movie45: { title: "5cm", text: "film indo lama yang disaranin mulan banget tapi sayangnya diending malah berantem huhu im sorry sayanggg, ceritanya tentang sirkel pemula yang langsung pengen daki gunung tingkat 4", link: "" },
    movie46: { title: "Crimson Peak", text: "film ngantuk karena temanya gothic gitu, ceritanya tentang rumah yg punya kisah kelam", link: "" },
    movie47: { title: "La La Land", text: "film musikal pertama yang kami tonton nih, tapi sayangnya malah bosen kaminya, padahal ini film bagus banget bagi orang orang, ceritanya tentang cowok yang suka sama cewe terus nyanyi nyanyi haha", link: "" },
    movie48: { title: "People We Meet On Vacation", text: "film romance yang mau jadi wishlist kita, ceritanya tentang pasangan yang jalan keluar negeri tiap musim panas", link: "" },
    movie49: { title: "Ghostland", text: "ini film bagus dan juga plot twistnya 11/12 sama marrowbone", link: "" },
    movie50: { title: "Tinggal Meninggal", text: "film indo komedi yang lumayan seru, ceritanya tentang orang yg kuran perhatian", link: "" },
    movie51: { title: "Eternal Sunshine", text: "film ini belum ditonton tapi pengen banget kami tonton", link: "" }
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



