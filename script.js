'use strict';

const drawingArea = document.querySelector('.drawing-area');

let selectedColor = 'black';

function createGrid(width, height) {
  for (let i = 0; i < width * height; i++) {
    let div = document.createElement('div');
    div.classList.add('grid-item');
    drawingArea.appendChild(div);
  }
}

createGrid(16, 16);

let gridItems = document.querySelectorAll('.grid-item');

function onHover(element) {
  element.style.backgroundColor = `${selectedColor}`;
}

gridItems.forEach(gridNode => {
  gridNode.addEventListener('mouseover', function () {
    onHover(gridNode);
  });
});
