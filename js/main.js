let box = document.getElementById("container");
let pacman = document.getElementById("pacman");
let x = 0;
let y = 0;

function spawntarget() {
  let spawn = document.createElement("div");
  let random = Math.floor(Math.random() * 101);
  spawn.id = "target";
  spawn.style.left = random + "%";
  spawn.style.top = random + "%";
  box.appendChild(spawn);
}
spawntarget();

document.addEventListener("keydown", move);

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

function left() {
  x -= 5;
  pacman.style.left = x + "px";
  console.log("left");
}
function right() {
  x += 5;
  pacman.style.left = x + "px";
  console.log("right");
}
function up() {
  y -= 5;
  pacman.style.top = y + "px";
  console.log("up");
}
function down() {
  y += 5;
  pacman.style.top = y + "px";
  console.log("down");
}
