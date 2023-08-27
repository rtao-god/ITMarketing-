const screenWidth = window.screen.width

if (screenWidth <= 1000) window.history.pushState("object or string", "Title", "https://rtao-god.github.io/ITMarketing-/mainPage/mobileVersion/")
else window.history.pushState("object or string", "Title", "mainPage/index.html")
