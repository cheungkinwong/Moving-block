let pacman = document.getElementById("pacman");
let pos = 0;

document.addEventListener("keydown", move);

function left() {
  pos -= 5;
  pacman.style.left = pos + "px";
  console.log("left");
}
function right() {
  pos += 5;
  pacman.style.left = pos + "px";
  console.log("right");
}
function up() {
  pos -= 5;
  pacman.style.top = pos + "px";
  console.log("up");
}
function down() {
  pos += 5;
  pacman.style.top = pos + "px";
  console.log("down");
}

function move(event) {
  switch (event.keyCode) {
    case 37:
      left();
      break;

    case 39:
      right();
      break;

    case 38:
      up();
      break;

    case 40:
      down();
      break;
  }
}

function gameLoop() {
  move();
  setTimeout("gameLoop()", 10);
}
gameLoop();
