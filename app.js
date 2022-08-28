// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Swiper slideChange functionality
swiper.on('slideChange', function (swiper) {
    const slide = document.getElementsByClassName('animate__animated')[swiper.activeIndex];
    const prevSlide = document.getElementsByClassName('animate__animated')[swiper.activeIndex - 1];
    const nextSlide = document.getElementsByClassName('animate__animated')[swiper.activeIndex + 1];
    slide.classList.add('animate__backInUp');
    prevSlide.classList.remove('animate__backInUp');
    nextSlide.classList.remove('animate__backInUp');
});