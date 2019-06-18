const box = document.getElementById("container");
const pacman = document.getElementById("pacman");
const counter = document.getElementById("score");

let x = 0;
let y = 0;
let goal = 0;

function spawntarget() {
  let randomx = Math.floor(Math.random() * (101 - 10)) * 5;
  let randomy = Math.floor(Math.random() * (101 - 10)) * 5;
  let spawn = document.createElement("div");
  spawn.id = "target";
  spawn.innerHTML = '<i class="fas fa-globe-asia"></i>';
  spawn.style.left = randomx + "px";
  spawn.style.top = randomy + "px";
  box.appendChild(spawn);
}
spawntarget();

function collision() {
  let spawnx = document.getElementById("target").offsetLeft;
  let spawny = document.getElementById("target").offsetTop;
  let pacx = document.getElementById("pacman").offsetLeft;
  let pacy = document.getElementById("pacman").offsetTop;
  let distantx = parseInt(spawnx) - parseInt(pacx);
  let distanty = parseInt(spawny) - parseInt(pacy);

  if (distantx === 0 && distanty === 0) {
    goal += 1;
    let target = document.getElementById("target");
    counter.innerHTML = goal;
    target.remove();
    spawntarget();
  }
  console.log(spawnx, spawny);
}

document.addEventListener("keydown", move);

function move(event) {
  collision();
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
  pacman.innerHTML = '<i class="fas fa-space-shuttle fa-flip-horizontal" >';
}
function right() {
  x += 5;
  pacman.style.left = x + "px";
  pacman.innerHTML = '<i class="fas fa-space-shuttle">';
}
function up() {
  y -= 5;
  pacman.style.top = y + "px";
  pacman.innerHTML = '<i class="fas fa-space-shuttle fa-rotate-270" >';
}
function down() {
  y += 5;
  pacman.style.top = y + "px";
  pacman.innerHTML = '<i class="fas fa-space-shuttle fa-rotate-90" >';
}
