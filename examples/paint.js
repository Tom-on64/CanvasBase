// If you want to try this out, just copy this file into src, import the update and call it in the main update.

import { ctx, input } from "../app.js"

// The last position of the mouse
const lastMouse = { x: 0, y: 0 }

// Should be called every frame
export const paintUpdate = () => {
    // Check if the left mouse button is pressed
    if (input.mouse.left) {
        ctx.strokeStyle = "black";
        ctx.lineCap = "round";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(lastMouse.x, lastMouse.y);
        ctx.lineTo(input.mouse.x, input.mouse.y);
        ctx.stroke();
    }

    // Update last mouse
    lastMouse.x = input.mouse.x
    lastMouse.y = input.mouse.y
}
