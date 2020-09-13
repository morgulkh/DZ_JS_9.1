'use strict';

let h2 = document.createElement('h2');
h2.innerHTML = 'События';
document.body.appendChild(h2);

let coordsAbsoluteElem = document.createElement('p');
coordsAbsoluteElem.innerHTML = 'Coords Absolute: x: 150, y: 120';
document.body.appendChild(coordsAbsoluteElem);

let mouseCatcherElem = document.createElement('div');
mouseCatcherElem.innerHTML = 'move mouse here';
mouseCatcherElem.style.border = '2px solid grey';
mouseCatcherElem.style.margin = 'auto';
mouseCatcherElem.style.textAlign = 'center';
mouseCatcherElem.style.width = '400px';
mouseCatcherElem.style.height = '400px';
document.body.appendChild(mouseCatcherElem);


let coordsRelativeElem = document.createElement('p');
coordsRelativeElem.innerHTML = 'Coords Relative: x: 150, y: 120';
document.body.appendChild(coordsRelativeElem);

mouseCatcherElem.addEventListener('mousemove', (evt) => {
    console.log(evt);
    coordsAbsoluteElem.innerHTML = `Coords Absolute: x: ${evt.screenX}, y: ${evt.screenY}`;
    coordsRelativeElem.innerHTML = `Coords Relative: x: ${evt.offsetX}, y: ${evt.offsetY}`;
});