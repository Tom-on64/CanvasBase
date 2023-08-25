# CanvasBase

This project contains a pretty decent setup for creating HTML Canvas applications in JavaScript.

## Files
This project contains the index.html, app.js and main.js files.
The index.html can be modified, however the canvas is by default setup to take up the full screen so you might experience overflow.
App.js contains code that sets up the canvas, I/O, and calls the functions in main.js. Modifying this file can break stuff.
Finally main.js contains the three main functions that get called by app.js.

Here they are:
### start()
This function is called *once* at the start after everything gets setup.

### update()
This function gets called every frame

### fixedUpdate()
This function gets called at a constant interval (50ms by default)

## App.js exports
The app.js file has a few exports that will be usefull.

### input: object
This object contains handles user input.
It detects keyboard input and mouse input.

This is an example for detecting the space key being pressed:
```js
// Import the input
import { input } from "../app.js";

// Check if the ' ' (space) key is being held down. If yes, log "Space!"
if (input.keys[" "]) console.log("Space!");
```

This is an example of detecting a left mouse button click
```js
// Import the input
import { input } from "../app.js";

// Check if the left mouse button is pressed. Is yes, log out the mouse position
if (input.mouse.left) console.log(`X: ${input.mouse.x} Y: ${input.mouse.y}`)
```

The full input object:
```jsonc
{
  keys: { /* contains the key if it was pressed */ },
  mouse: {
    x: 0,           // X position of the mouse
    y: 0,           // Y position of the mouse
    left: false,    // Left mouse button
    middle: false,  // Middle mouse button
    right: false    // Right mouse button
  }
}
```

### ctx: CanvasRenderingContext2D
This export is the 2D Canvas Rendering Context for the canvas.

### display: object
This object constains info about the display canvas.

Full object:
```jsonc
{
  w: 0,             // The width of the display
  h: 0              // The height of the display
}
```

### updateRate: number
This variable constains the updaterate in miliseconds. 
It changes how frequently the fixedUpdate() function gets called.
