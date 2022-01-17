/* eslint-disable linebreak-style */

import { brightAssigner } from './appearance.js';
import { results } from './main.js';

export const serverMessages = document.querySelector('#server-messages');

export function newValueAssigner() {
  const randomValue = Math.ceil(Math.random() * 4);
  function orderAssigner(value) {
    if (value === 1) {
      results.push(1);
    } else if (value === 2) {
      results.push(2);
    } else if (value === 3) {
      results.push(3);
    } else {
      results.push(4);
    }
  }
  brightAssigner(randomValue);
  orderAssigner(randomValue);
}

export function ingameServerMessages(turnNumber) {
  if (turnNumber === 2) {
    serverMessages.innerHTML = 'Right answer';
  } else if (turnNumber >= 3 && turnNumber <= 5) {
    serverMessages.innerHTML = 'Very good';
  } else if (turnNumber === 6) {
    serverMessages.innerHTML = "Well well. You're good at this, right?";
  } else if (turnNumber === 7) {
    serverMessages.innerHTML = 'Very well for a beginner';
  } else if (turnNumber >= 8) {
    serverMessages.innerHTML = 'You trully are king of kings';
  }
}
