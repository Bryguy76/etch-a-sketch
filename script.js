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

resetButton.addEventListener('click', function () {
  gridItems.style.backgroundColor = 'white';
});

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
