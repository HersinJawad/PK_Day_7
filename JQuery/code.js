$(document).ready(function () {
    $("#fade").click(() => {
        $("#panel-fade").fadeIn()
    })
    $("#fadeout").click(() => {
        $("#panel-fade-out").fadeOut()
    })
    $("#fadetoggle").click(() => {
        $("#panel-fade-toggle").fadeToggle()
    })
    $("#flip").click(() => {
        $("#panel").slideDown("slow")
    })
    $("#toggle").click(() => {
        $("#panel-toggle").slideToggle()
    })

    $("#hide-show").click(() => {
        if ($("panel-hideshow").is(":visible")) {
            $("#panel-hideshow").hide()
        } else {
            $("panel-hideshow").show()
        }
        let defaultsize = $('#panel-animation').css('font-size');
        $('#animation').click(() => {
            let fontsize = "1em"
            color = "#0000ff"

            if ($("#panel-animation").css("font-size") == defaultsize) {
                fontsize = "4em"
                color = "#ff0000"
            }
            $('#panel-animation').animate(
                {
                    'font-size': fontsize
                }
            ).css("color", color)
        });
    })
})