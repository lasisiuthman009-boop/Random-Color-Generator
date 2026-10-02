
$("h6").hide()


$("#click-btn").click(function () {
    let hex = "#" + Math.floor(Math.random() * 1000000).toString(16).padStart(6, "0")
    $("div").css("background-color", hex)
    $("#hexP").text(hex)
})

$("#copy-btn").click(function () {

    let copiedTxt = $("#hexP").text()
    navigator.clipboard.writeText(copiedTxt).then(function(){
        $("h6").fadeIn()
        setTimeout(() => {
          $("h6").fadeOut() 
        }, 100);
    })
})





