'use strict';

const drawingArea = document.querySelector('.drawing-area');

function createGrid(width, height) {
  for (let i = 0; i < width * height; i++) {
    let div = document.createElement('div');
    div.classList.add('grid-item');
    drawingArea.appendChild(div);
  }
}

createGrid(16, 16);
