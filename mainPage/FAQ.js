$('.svgPlus').click(function () {
    $(this).toggleClass('active')

    if (this.classList.contains('active')) {
        $(this).css("transform", "rotate(45deg)")
        $(this).parent().children("div").children(".FAQResponse").css("display", "block")
        $(this).parent().css("height", "156px")
    } else {
        $(this).css("transform", "rotate(90deg)")
        $(this).parent().children("div").children(".FAQResponse").css("display", "none")
        $(this).parent().css("height", "62px")
    }
})