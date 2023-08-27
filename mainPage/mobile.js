/* if (window.screen.width <= 1000) $jq(window).attr("location", "https://rtao-god.github.io/ITMarketing-/mainPage/mobileVersion/")
else (window.screen.width >= 1000) $jq(window).attr("location", "https://rtao-god.github.io/ITMarketing-/mainPage/index.html") */

// if (window.screen.width <= 1000) $(window).attr("location", "https://rtao-god.github.io/ITMarketing-/mainPage/mobileVersion/")
// if (window.screen.width >= 1001) $(window).attr("location", "https://rtao-god.github.io/ITMarketing-/mainPage/index.html")


// window.location.href = "https://rtao-god.github.io/ITMarketing-/mainPage/index.html"

/* window.location.href = "https://rtao-god.github.io/ITMarketing-/mainPage/index.html"

if (window.screen.width <= 1000) {
   
} else {
    $(window).attr("location", "https://rtao-god.github.io/ITMarketing-/mainPage/index.html")
}
 */

if (window.screen.width <= 1000) {
    $(window).attr("location", "https://rtao-god.github.io/ITMarketing-/mainPage/mobileVersion/")
    location.reload()
}

