/* eslint-disable linebreak-style */

import {
  describe, test, expect, jest, beforeEach,
} from '@jest/globals';
import {
  cancelButton, launchButton, gameInProcess, results, cancelGame,
} from '../source/main.js';
import { serverMessages } from '../source/functions.js';
import {
  redSquare, yellowSquare, blueSquare, greenSquare,
} from '../source/appearance.js';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('Buttons correct', () => {
  test('Launch and cancel', () => {
    expect($(launchButton).attr('id')).toContain('launch');
    expect($(cancelButton).attr('id')).toContain('cancel');
  });
});

describe('Copy of function gameInProcess()', () => {
  cancelButton.textContent = 'Cancel';
  cancelButton.disabled = false;
  launchButton.disabled = true;
  test('New buttons', () => {
    expect(launchButton.disabled).toBe(true);
    expect(cancelButton.disabled).toBe(false);
    expect(cancelButton.textContent).toEqual('Cancel');
  });
  beforeEach(() => {
    gameInProcess();
  });
  test('New server message in computer turn', () => {
    jest.runAllTimers();
    expect($(serverMessages).text()).toContain('My turn');
  });
});

function catchCorrectAnswer(res) {
  const rightAnswer = res[res.length - 1];
  return rightAnswer;
}

function clickOnCorrectAnswer(value) {
  if (value === 1) {
    greenSquare.click();
  } else if (value === 2) {
    yellowSquare.click();
  } else if (value === 3) {
    redSquare.click();
  } else if (value === 4) {
    blueSquare.click();
  } else if (value === 5) {
    greenSquare.click();
  }
}

const mockMath = Object.create(global.Math);
global.Math = mockMath;

describe('Gamer win and lose scenarios', () => {
  test('Gamer correct answer', () => {
    jest.runAllTimers();
    const firstCorrectAnswer = catchCorrectAnswer(results);
    clickOnCorrectAnswer(firstCorrectAnswer);
    jest.runAllTimers();
    expect($(serverMessages).html()).toContain('My turn');
  });

  mockMath.random = () => 0.2;

  test('Gamer second correct answer and check individual button works correctly', () => {
    jest.runAllTimers();
    const greenIsCorrectAnswer = catchCorrectAnswer(results);
    clickOnCorrectAnswer(greenIsCorrectAnswer);
    jest.runAllTimers();
    expect(results[1]).toEqual(1);
    jest.runAllTimers();
  });

  test('Cancel game', () => {
    cancelGame();
    expect(greenSquare.onclick).toBe(null);
    expect(redSquare.onclick).toBe(null);
    expect(blueSquare.onclick).toBe(null);
    expect(yellowSquare.onclick).toBe(null);
  });
});
