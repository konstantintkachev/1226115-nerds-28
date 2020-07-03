var form = document.querySelector(".a-popup__form");
var popup = document.querySelector(".a-popup");
var close = document.querySelector(".a-popup__close-cross");
var login = document.querySelector("a-popup__login");

form.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("a-popup__show");
  login.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("a-popup__show");
});

