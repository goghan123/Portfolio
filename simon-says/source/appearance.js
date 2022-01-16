/* eslint-disable linebreak-style */

export const blueSquare = document.querySelector('#blue-square');
export const redSquare = document.querySelector('#red-square');
export const yellowSquare = document.querySelector('#yellow-square');
export const greenSquare = document.querySelector('#green-square');

const squareValues = {
  1: greenSquare,
  2: yellowSquare,
  3: redSquare,
  4: blueSquare,
};

function squareColourRestarter() {
  squareValues[1].style.backgroundColor = '#106D02';
  squareValues[2].style.backgroundColor = '#FAE82F';
  squareValues[3].style.backgroundColor = '#FA2F2F';
  squareValues[4].style.backgroundColor = '#5081F3';
}

export function brightAssigner(value) {
  setTimeout(squareColourRestarter, 500);
  if (value === 1) {
    greenSquare.style.backgroundColor = '#16A201';
  } else if (value === 2) {
    yellowSquare.style.backgroundColor = '#DED67C';
  } else if (value === 3) {
    redSquare.style.backgroundColor = '#DE7C7C';
  } else if (value === 4) {
    blueSquare.style.backgroundColor = '#9AADDA';
  } else {
  }
}
