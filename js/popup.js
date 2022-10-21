const popupButton = document.querySelector(".special-offer__button");
const popup = document.querySelector(".special-offer__form-search");

popupButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("special-offer__form-search--active");
    console.log("помогите... пожалуйста");
});