$(function () {
    //Change Class using jquery
    $('[name="changeClass"]').click(function () {
        if ($(this).hasClass("btn-success")) {
            $(this).removeClass("btn-success").addClass("btn-warning")
        } else {
            $(this).removeClass("btn-warning").addClass("btn-success")
        }
    })

    // add remove class using jquery
    $('[name = "addremoveElement"]').click(() => {
        const isHaveChild = $('#content').children().length()

        if (isHaveChild) {
            $('#content').empty()
        } else {
            $('#content').append(`<span class=text-danger">Danger, do not delete this word</span>`)
        }
    })
})