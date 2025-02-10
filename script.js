function moveRandomEl(elm) {
  elm.style.position = "absolute";
  const maxX = window.innerWidth - elm.offsetWidth;
  const maxY = window.innerHeight - elm.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  elm.style.left = `${randomX}px`;
  elm.style.top = `${randomY}px`;
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e) {
  moveRandomEl(e.target);
});