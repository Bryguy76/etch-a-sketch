'use strict';

const drawingArea = document.querySelector('.drawing-area')

for(let i = 0, i < 16, i++) {
   const div = document.createElement('div');
   div.classList.add('grid-item')
    drawingArea.appendChild(div)
};