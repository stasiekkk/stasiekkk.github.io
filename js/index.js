let counter = 0;
function darkmode() {
    var icon = $('#icon')
    if (counter == 0) {
        icon.removeClass('bi').removeClass('bi-moon-fill').addClass('bi-brightness-high-fill').css('color', 'white')
        counter++;
    } else {
        icon.removeClass('bi').removeClass('bi-brightness-high-fill').addClass('bi-moon-fill').css('color', 'black')
        counter = 0;
    }
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function(event) {
    var options = {
        strings: ["Welcome"],
        typeSpeed: 70,
        backSpeed: 20,
        backDelay: 500,
        loop: false,
        autoInsertCss: true,
        smartBackspace: true
    }
    setTimeout(() => { var typed = new Typed("#welcome", options); }, 3000)
});

$( document ).ready(function() {
    setTimeout(() => { $(".loader").fadeOut("slow"); }, 3000)
});