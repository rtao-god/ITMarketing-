
$.getJSON('https://api.db-ip.com/v2/free/self', function (data) {
  
  if (Object.values(data)[4] != "Ukraine") {
    $("#languageRu").css("display", "block")
  } else {
    $("#languageUa").css("display", "block")
  }

})