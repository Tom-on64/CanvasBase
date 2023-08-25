/*
  This file sets up the update loop, i/o and the canvas display
*/

/** @type {HTMLCanvasElement} */
import { start, update, fixedUpdate } from "./src/main.js";

/** Some variables
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");
export const display = { w: 0, h: 0 }
export const input = {
    keys: {},
    mouse: { x: 0, y: 0, left: false, middle: false, right: false }
}

// Timing
let timestamp = 0;
let timer = 0;
export let updateRate = 100;

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    display.w = parseInt(canvas.width.toString());
    display.h = parseInt(canvas.height.toString());
}

const frameUpdate = (time = 0) => {
    requestAnimationFrame(frameUpdate);

    const deltatime = time - timestamp;
    timestamp = time;

    update(deltatime);
    if (timer >= updateRate) {
        timer = 0;
        fixedUpdate();
        return;
    }

    timer += deltatime;
}

window.onresize = resizeCanvas;

document.addEventListener("keydown", (e) => input.keys[e.key] = true)
document.addEventListener("keyup", (e) => input.keys[e.key] = false)
document.addEventListener("mousedown", (e) => {
    if (e.button == 0) input.mouse.left = true
    else if (e.button == 1) input.mouse.middle = true
    else if (e.button == 2) input.mouse.right = true
})
document.addEventListener("mouseup", (e) => {
    if (e.button == 0) input.mouse.left = false
    else if (e.button == 1) input.mouse.middle = false
    else if (e.button == 2) input.mouse.right = false
})
document.addEventListener("mousemove", (e) => {
    input.mouse.x = e.clientX;
    input.mouse.y = e.clientY;
})

document.addEventListener("contextmenu", (e) => e.preventDefault());

resizeCanvas();
start();
frameUpdate();
