// Share button
let shareButton = document.querySelector(
  "body > div.card-flex-container > div.card-content > div.profile-and-share > div.share-btn > button"
);

shareButton.addEventListener("click", () => {
  document
    .querySelector("body > div.share-btn-clicked")
    .classList.toggle("show");
});
