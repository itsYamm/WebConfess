function buatLove() {

    const container = document.querySelector(".hati-jatuh");

    // Bersihkan love sebelumnya
    container.innerHTML = "";

    for (let i = 0; i < 25; i++) {

        const love = document.createElement("span");

        love.innerHTML = "♥";

        // Posisi horizontal random
        love.style.left = Math.random() * 100 + "%";

        // Ukuran random
        const ukuran = 10 + Math.random() * 16;
        love.style.fontSize = ukuran + "px";

        // Kecepatan random
        love.style.animationDuration =
            (5 + Math.random() * 7) + "s";

        // Waktu mulai random
        love.style.animationDelay =
            (Math.random() * 8) + "s";

        // Transparansi random
        love.style.opacity =
            0.25 + Math.random() * 0.55;

        container.appendChild(love);
    }
}


function bukaPesan() {

    const amplop = document.querySelector(".amplop");
    const halamanAwal = document.getElementById("halamanAwal");
    const surat = document.getElementById("surat");
    const musik = document.getElementById("musik");

    // Mulai musik
    musik.volume = 0.5;
    musik.play();

    // Buka amplop
    amplop.classList.add("buka");

    setTimeout(() => {

        halamanAwal.style.display = "none";

        surat.style.display = "flex";

        buatLove();
        efekKetik();

    }, 2300);

}



function efekKetik() {

    const teks = document.querySelectorAll(".ketik");

    let index = 0;

    function mulaiKetik() {

        if (index >= teks.length) {
            return;
        }

        const elemen = teks[index];

        // Ambil teks asli
        const isi = elemen.textContent.trim();

        // Kosongkan sebelum ditampilkan
        elemen.textContent = "";

        // Baru tampilkan elemen
        elemen.style.visibility = "visible";

        let i = 0;

        const interval = setInterval(() => {

            elemen.textContent += isi.charAt(i);

            i++;

            if (i >= isi.length) {

                clearInterval(interval);

                index++;

                setTimeout(() => {
                    mulaiKetik();
                }, 700);
            }

        }, 45);
    }

    mulaiKetik();
}

function bukaHalamanDua() {

    const surat = document.getElementById("surat");
    const halamanDua = document.getElementById("halamanDua");

    // Halaman pertama mulai menghilang
    surat.classList.add("fade-out");

    // Tunggu animasi selesai
    setTimeout(() => {

        surat.style.display = "none";

        // Tampilkan halaman kedua
        halamanDua.style.display = "flex";

        // Mulai dari transparan
        setTimeout(() => {
            halamanDua.classList.add("fade-in");

            buatLove();

        }, 50);

    }, 800);
}