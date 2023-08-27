/* if (window.screen.width <= 1000) $jq(window).attr("location", "https://rtao-god.github.io/ITMarketing-/mainPage/mobileVersion/")
else (window.screen.width >= 1000) $jq(window).attr("location", "https://rtao-god.github.io/ITMarketing-/mainPage/index.html") */

// if (window.screen.width <= 1000) $(window).attr("location", "https://rtao-god.github.io/ITMarketing-/mainPage/mobileVersion/")
// if (window.screen.width >= 1001) $(window).attr("location", "https://rtao-god.github.io/ITMarketing-/mainPage/index.html")


// window.location.href = "https://rtao-god.github.io/ITMarketing-/mainPage/index.html"

/* window.location.href = "https://rtao-god.github.io/ITMarketing-/mainPage/index.html"

if (window.screen.width <= 1000) {
    $(window).attr("location", "https://rtao-god.github.io/ITMarketing-/mainPage/mobileVersion/")
} else {
    $(window).attr("location", "https://rtao-god.github.io/ITMarketing-/mainPage/index.html")
}
 */

if (window.screen.width <= 1000) window.history.pushState("object or string", "Title", "https://rtao-god.github.io/ITMarketing-/mainPage/mobileVersion/")
else window.history.pushState("object or string", "Title", "https://rtao-god.github.io/ITMarketing-/mainPage/index.html")

location.reload()