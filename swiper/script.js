const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1500,           
    effect: 'fade',         
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
	mousewheel: true,
	grabCursor: true,
})