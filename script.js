const player = document.querySelector(".player");
const button = document.querySelector(".button_player");

button.addEventListener("click", () => {
  if (player.paused) {
    player.play();
    button.style.display = "none";
  } else {
    player.pause();
  }
});
