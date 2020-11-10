let TOP = false;
let DOWN = false;
let LEFT = false;
let RIGHT = false;

document.onkeydown = function(e) {
    if (e.key === "w") TOP = true;
    if (e.key === "s") DOWN = true;
    if (e.key === "a") LEFT = true;
    if (e.key === "d") RIGHT = true;
}

document.onkeyup = function(e) {
    if (e.key === "w") TOP = false;
    if (e.key === "s") DOWN = false;
    if (e.key === "a") LEFT = false;
    if (e.key === "d") RIGHT = false;
}

function move() {
    if (TOP) player.y -= player.speed;
    if (DOWN) player.y += player.speed;
    if (LEFT) player.x -= player.speed;
    if (RIGHT) player.x += player.speed;
}