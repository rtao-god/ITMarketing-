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

window.addEventListener('load', (e) => {
    const screenWidth = window.screen.width

    if (screenWidth <= 425) {
        swiper[0].params.slidesPerView = 1
        swiper[0].update()
    }
})