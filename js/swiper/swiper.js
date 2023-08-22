const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 5,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})