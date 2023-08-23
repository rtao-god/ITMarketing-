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

window.addEventListener('resize', (e) => {
    const screenWidth = window.screen.width

    if (screenWidth <= 1244) {
        swiper.params.slidesPerView = 4
        swiper.update()
    }
    if (screenWidth <= 1100) {
        swiper.params.slidesPerView = 3
        swiper.update()
    }
    if (screenWidth <= 700) {
        swiper.params.slidesPerView = 2
        swiper.update()
    }
    if (screenWidth <= 600) {
        swiper.params.slidesPerView = 1
        swiper.update()
    }
    if (screenWidth >= 1101) {
        swiper.params.slidesPerView = 5
        swiper.update()
    }
})