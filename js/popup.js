var link = document.querySelector(".adress-btn");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("username");


link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        username.value = storage;
        email.focus();
    } else {
        username.focus();
    }

});
close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});
form.addEventListener("submit", function(evt) {
    if (!username.value || !email.value) {
        evt.preventDefault();
        alert("Введите имя и еmail");
    } else {
        localStorage.setItem("username", username.value);
    }
});