import {renderMap} from "/engine/Renderer/Renderer.js";
import {PlayerMovement} from "/engine/Player/Movement.js";
import {Player} from "/engine/Player/Player.js";

const playerMovement = new PlayerMovement();
let player = new Player();

setInterval(update, 1);
renderMap();

function update() {
    clearCanvas();
    playerMovement.registerKeys();
    playerMovement.movePlayer(player);
    player.drawPlayer();
}