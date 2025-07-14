const player = document.querySelector(".player");
const button = document.querySelector(".button_player");
const overlay = document.querySelector(".overlay");

button.addEventListener("click", () => {
  if (player.paused) {
    player.play();
    overlay.style.display = "none";
    button.style.display = "none";
  } else {
    player.pause();
  }
});
