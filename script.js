'use strict';

const drawingArea = document.querySelector('.drawing-area');
const resetButton = document.querySelector('.reset');
const black = document.querySelector('#b1');
const cyan = document.querySelector('#b2');
const magenta = document.querySelector('#b3');
const yellow = document.querySelector('#b4');
const red = document.querySelector('#b5');
const green = document.querySelector('#b6');
const blue = document.querySelector('#b7');
const rainbow = document.querySelector('#b8');
const buttons = document.querySelectorAll('.color-option');
const gridSize = document.querySelector('.grid-size');
const gridParams = document.querySelector('.grid-params');
const submitButton = document.querySelector('.submit');
let selectedColor = 'black';
let rainbowPaint = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

function createGrid(width, height) {
  for (let i = 0; i < width * height; i++) {
    let div = document.createElement('div');
    div.classList.add('grid-item');
    drawingArea.appendChild(div);
  }
}

createGrid(16, 16);

let gridItems = document.querySelectorAll('.grid-item');
let mouseDown = false;
function onHover(element) {
  if (selectedColor === 'rainbow') {
    element.style.backgroundColor = `${
      rainbowPaint[Math.trunc(Math.random() * 7)]
    }`;
  } else {
    element.style.backgroundColor = `${selectedColor}`;
  }
}

gridItems.forEach(gridNode => {
  gridNode.addEventListener('mousedown', function () {
    mouseDown = true;
  });
  gridNode.addEventListener('mouseup', function () {
    mouseDown = false;
  });
  gridNode.addEventListener('mouseover', function () {
    if (mouseDown) {
      onHover(gridNode);
    }
  });
});

resetButton.addEventListener('click', function () {
  gridItems.forEach(gridNode => {
    gridNode.style.backgroundColor = 'white';
  });
});

//COLOR PICKER BUTTONS

black.addEventListener('click', function () {
  cyan.classList.remove('selected');
  magenta.classList.remove('selected');
  yellow.classList.remove('selected');
  red.classList.remove('selected');
  green.classList.remove('selected');
  blue.classList.remove('selected');
  black.classList.add('selected');
  selectedColor = 'black';
});
cyan.addEventListener('click', function () {
  black.classList.remove('selected');
  magenta.classList.remove('selected');
  yellow.classList.remove('selected');
  red.classList.remove('selected');
  green.classList.remove('selected');
  blue.classList.remove('selected');
  rainbow.classList.remove('selected');
  cyan.classList.add('selected');
  selectedColor = 'cyan';
});
magenta.addEventListener('click', function () {
  black.classList.remove('selected');
  magenta.classList.add('selected');
  yellow.classList.remove('selected');
  red.classList.remove('selected');
  green.classList.remove('selected');
  blue.classList.remove('selected');
  rainbow.classList.remove('selected');
  cyan.classList.remove('selected');
  selectedColor = 'magenta';
});
yellow.addEventListener('click', function () {
  black.classList.remove('selected');
  magenta.classList.remove('selected');
  yellow.classList.add('selected');
  red.classList.remove('selected');
  green.classList.remove('selected');
  blue.classList.remove('selected');
  rainbow.classList.remove('selected');
  cyan.classList.remove('selected');
  selectedColor = 'yellow';
});
red.addEventListener('click', function () {
  black.classList.remove('selected');
  magenta.classList.remove('selected');
  yellow.classList.remove('selected');
  red.classList.add('selected');
  green.classList.remove('selected');
  blue.classList.remove('selected');
  rainbow.classList.remove('selected');
  cyan.classList.remove('selected');
  selectedColor = 'red';
});
green.addEventListener('click', function () {
  black.classList.remove('selected');
  magenta.classList.remove('selected');
  yellow.classList.remove('selected');
  red.classList.remove('selected');
  green.classList.add('selected');
  blue.classList.remove('selected');
  rainbow.classList.remove('selected');
  cyan.classList.remove('selected');
  selectedColor = 'green';
});
blue.addEventListener('click', function () {
  black.classList.remove('selected');
  magenta.classList.remove('selected');
  yellow.classList.remove('selected');
  red.classList.remove('selected');
  green.classList.remove('selected');
  blue.classList.add('selected');
  rainbow.classList.remove('selected');
  cyan.classList.remove('selected');
  selectedColor = 'blue';
});
rainbow.addEventListener('click', function () {
  black.classList.remove('selected');
  magenta.classList.remove('selected');
  yellow.classList.remove('selected');
  red.classList.remove('selected');
  green.classList.remove('selected');
  blue.classList.remove('selected');
  rainbow.classList.add('selected');
  cyan.classList.remove('selected');
  selectedColor = 'rainbow';
});

//REVEAL GRID SIZE FORM
gridSize.addEventListener('click', function () {
  gridParams.classList.remove('hidden');
});

//CREATE NEW GRID/THROW WARNINGS
submitButton.addEventListener('click', function () {
  let height = Number(document.querySelector('.size').value);
  let width = Number(document.querySelector('.size').value);

  if (width > 100 || height > 100) {
    let warning = document.createElement('p');
    warning.classList.add('warning');
    warning.textContent = 'Cannot use a width or height greater than 100.';
    gridParams.appendChild(warning);
  } else if (!width || !height) {
    let warning = document.createElement('p');
    warning.classList.add('warning');
    warning.textContent = 'Size must be a valid integer value.';
    gridParams.appendChild(warning);
  } else if (width && height) {
    while (drawingArea.firstChild) {
      drawingArea.removeChild(drawingArea.lastChild);
    }
    createGrid(width, height);
    gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridNode => {
      gridNode.addEventListener('mouseover', function () {
        onHover(gridNode);
      });
    });

    drawingArea.style.gridTemplateColumns = `repeat(${width}, minmax(1px, 2em))`;
    drawingArea.style.gridTemplateRows = `repeat(${height}, minmax(1px, 2em))`;
  }
});
