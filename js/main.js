const box = document.getElementById("container");
const shuttle = document.getElementById("shuttle");
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
  let aRect = document.getElementById("shuttle").getBoundingClientRect();
  let bRect = document.getElementById("target").getBoundingClientRect();

  if (
    !(
      aRect.top + aRect.height < bRect.top ||
      aRect.top > bRect.top + bRect.height ||
      aRect.left + aRect.width < bRect.left ||
      aRect.left > bRect.left + bRect.width
    )
  ) {
    goal += 1;
    let target = document.getElementById("target");
    counter.innerHTML = goal;
    target.remove();
    spawntarget();
  }
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
  if (shuttle.offsetLeft > 0) {
    x -= 5;
    shuttle.style.left = x + "px";
    shuttle.innerHTML = '<i class="fas fa-space-shuttle fa-flip-horizontal" >';
  }
}
function right() {
  if (shuttle.offsetLeft < 450) {
    x += 5;
    shuttle.style.left = x + "px";
    shuttle.innerHTML = '<i class="fas fa-space-shuttle">';
  }
}

function up() {
  if (shuttle.offsetTop > 0) {
    y -= 5;
    shuttle.style.top = y + "px";
    shuttle.innerHTML = '<i class="fas fa-space-shuttle fa-rotate-270" >';
  }
}
function down() {
  if (shuttle.offsetTop < 450) {
    y += 5;
    shuttle.style.top = y + "px";
    shuttle.innerHTML = '<i class="fas fa-space-shuttle fa-rotate-90" >';
  }
}
