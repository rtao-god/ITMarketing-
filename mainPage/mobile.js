/* if (window.screen.width <= 1000) window.history.pushState("object or string", "Title", "https://rtao-god.github.io/ITMarketing-/mainPage/mobileVersion/")
else window.history.pushState("object or string", "Title", 'https://rtao-god.github.io/ITMarketing-/mainPage/index.html/') */


if (window.screen.width <= 1000) $(location).prop('href', 'https://rtao-god.github.io/ITMarketing-/mainPage/mobileVersion/')
if (window.screen.width >= 1000) $(location).prop('href', 'https://rtao-god.github.io/ITMarketing-/mainPage/index.html')


