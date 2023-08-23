window.addEventListener('load', (e) => {
    const screenWidth = window.screen.width
    if (screenWidth < 767) {
        $(".headerFlex").css({
            "display": "flex",
            "flexFlow": "wrap"
        })
       /*  $(".headerFlex img").css({
            "display": "block",
            "justifyContent": "center",
            "flexWrap": "wrap",
            "order": "1"
        }) */
        $(".headerFlex div").css({
            "display": "block",
            "justifyContent": "center",
            "flexWrap": "wrap",
            "order": "2"
        })
    } else {
        $(".headerFlex").css({
            "flexWrap": "nowrap",
        })

        $(".header").css({
            "margin": "0px auto 0 auto"
        })
    }
})
