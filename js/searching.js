const searching = document.querySelector(".feedback-button");
const searchingPopup = document.querySelector(".searching-modal");

searching.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (searchingPopup.classList.contains("modal-show")) {
    searchingPopup.classList.remove("modal-show");
    searchingPopup.classList.remove("animation");
  } else {
    searchingPopup.classList.add("modal-show");
    searchingPopup.classList.add("animation");
  }
})
