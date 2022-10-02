function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
  
// function checkCookie() {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user, 365);
//     }
//   }
// }

let counter;
function darkmode() {
    var mode = getCookie("mode");
    var icon = $('#icon')
    if (mode == "light") {
        setCookie("mode", "dark", 365)
        icon.removeClass('bi').removeClass('bi-moon-fill').addClass('bi-brightness-high-fill').css('color', 'white')
        counter++;
    } else {
        setCookie("mode", "light", 365)
        icon.removeClass('bi').removeClass('bi-brightness-high-fill').addClass('bi-moon-fill').css('color', 'black')
        counter = 0;
    }
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function(event) {
    var options = {
        strings: ["Welcome"],
        typeSpeed: 60,
        backSpeed: 20,
        backDelay: 500,
        loop: false,
        autoInsertCss: true,
        smartBackspace: true
    }
    setTimeout(() => { var typed = new Typed("#welcome", options); }, 3000)

    const modal = document.querySelector(".modal");
    const trigger = document.querySelector("#myBtn");
    const closeButton = document.querySelector(".close-button");
    
    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    
    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
    
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

    let mode = getCookie("mode");
    var element = document.body;
    var icon = $('#icon')

    if (mode == "dark") {
        setCookie("mode", "dark", 365)
        icon.removeClass('bi').removeClass('bi-moon-fill').addClass('bi-brightness-high-fill').css('color', 'white')
        counter++;
        element.classList.toggle("dark-mode");
    } else {
        setCookie("mode", "light", 365)
        icon.removeClass('bi').removeClass('bi-brightness-high-fill').addClass('bi-moon-fill').css('color', 'black')
        counter = 0;
    }
});

$( document ).ready(function() {
    setTimeout(() => { $(".loader").fadeOut("slow"); }, 0)
});
