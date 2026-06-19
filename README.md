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
For the basic structure, HTML and CSS were used (of course)

For the time, JavaScript was used to update the page every second and show the current time.

For the window toggle, JavaScript was used the change the CSS display of the intro window from flex to none and vice versa.

### Draggable Window
1. JavaScript checks if there's a specific "header" element (in the case of the intro window, the top bar). If one's present, it only drags there. Otherwise, you can drag from anywhere.
2. When the mouse starts dragging the window, JavaScript uses the start postion (haha gd reference) of the mouse and the current position to calculate where to move the window.
3. When the mouse releases, the window stops following the mouse and sets the "initial position" value to it's current position.

## Credits
- AI was used for debugging and for research.
- The WebOS tutorial included with the WebOS mission, created by SerenityUX, single-handely carried this entire project. (I did have my own ideas but mostly the layout came from the tutorial)
- I got the Minecraft sunset image from [Vanilla Tweaks](https://vanillatweaks.net)'s 1.18 Panorama texture pack. 