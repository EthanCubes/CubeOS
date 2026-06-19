CubeOS
A web-based "operating system" that also acts like a portfolio.

![Simple webpage I made](./assets/devlog/Screenshot%202026-06-18%20at%2021.07.25.png)

## [Click Here for Live Demo](https://ethancubes.neocities.org/)

## Features
- Shows information (obviously)
- Displays the time.
- Intro window can be opened and closed.
- Intro window can be dragged around.

## How it works

### Basic Structure and Layout
- HTML
- CSS

### Live time display
- JavaScript was used to update the HTML of the page every second to change the time.

### Window toggle
1. When the close window button is pressed, the JavaScript changes the display of the window to none, therefore hiding the page.
2. WHen the open window (holy gd reference) button is pressed, JavaScript changes the display of the window back to flex, showing the page again.

### Draggable Window
1. JavaScript checks if there's a specific "header" element (in the case of the intro window, the top bar). If one's present, it only drags there. Otherwise, you can drag from anywhere.
2. When the mouse starts dragging the window, JavaScript uses the start postion (haha gd reference) of the mouse and the current position to calculate where to move the window.
3. When the mouse releases, the window stops following the mouse and sets the "initial position" value to it's current position.

## Credits
- AI was used for debugging and for research.
- The WebOS tutorial included with the WebOS mission, created by SerenityUX, single-handely carried this entire project. (I did have my own ideas but mostly the layout came from the tutorial)
- I got the Minecraft sunset image from [Vanilla Tweaks](https://vanillatweaks.net)'s 1.18 Panorama texture pack. 