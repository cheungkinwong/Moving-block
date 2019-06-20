const box = document.getElementById("container");
const shuttle = document.getElementById("shuttle");
const counter = document.getElementById("score");

let x = 0;
let y = 0;
let goal = 0;

function spawntarget() {
  let randomx = Math.floor(Math.random() * (101 - 10)) * 12;
  let randomy = Math.floor(Math.random() * (101 - 10)) * 6;
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
  x -= 10;
  shuttle.style.left = x + "px";
  shuttle.innerHTML = '<i class="fas fa-space-shuttle fa-flip-horizontal" >';
  console.log(parseInt(shuttle.style.left));
  if (shuttle.offsetLeft < -50) {
    return (x = 1200);
  }
}
function right() {
  x += 10;
  shuttle.style.left = x + "px";
  shuttle.innerHTML = '<i class="fas fa-space-shuttle">';
  if (shuttle.offsetLeft > 1200) {
    return (x = -50);
  }
}
function up() {
  y -= 10;
  shuttle.style.top = y + "px";
  shuttle.innerHTML = '<i class="fas fa-space-shuttle fa-rotate-270" >';
  if (shuttle.offsetTop < -50) {
    return (y = 600);
  }
}
function down() {
  y += 10;
  shuttle.style.top = y + "px";
  shuttle.innerHTML = '<i class="fas fa-space-shuttle fa-rotate-90" >';
  if (shuttle.offsetTop > 600) {
    return (y = -50);
  }
}
