var swiper = new Swiper(".mySwiper", {
     autoplay: {
        delay: 2500,      // jeda 2.5 detik
        disableOnInteraction: false, // tetap jalan meskipun user geser
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navMenu = document.getElementById("navMenu");

    hamburgerBtn.addEventListener("click", () => {
        hamburgerBtn.classList.toggle("active");
        navMenu.classList.toggle("open");
    });