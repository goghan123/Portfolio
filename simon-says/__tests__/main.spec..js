/* eslint-disable linebreak-style */

import {
  describe, test, expect, jest,
} from '@jest/globals';
import { cancelButton, launchButton, gameInProcess } from '../source/main.js';
import {
  redSquare, yellowSquare, blueSquare, greenSquare,
} from '../source/appearance.js';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
const mock = jest.fn();

describe('Buttons correct', () => {
  test('Launch and cancel', () => {
    expect($(launchButton).attr('id')).toContain('launch');
    expect($(cancelButton).attr('id')).toContain('cancel');
  });
});

describe('Copy of function gameInProcess()', () => {
  // gameInProcess();
  // jest.runAllTimers();
  cancelButton.textContent = 'Cancel';
  cancelButton.disabled = false;
  launchButton.disabled = true;
  test('New buttons', () => {
    // brightAssigner(mock);
    expect(launchButton.disabled).toBe(true);
    expect(cancelButton.disabled).toBe(false);
    expect(cancelButton.textContent).toEqual('Cancel');
    // expect(setTimeout).toHaveBeenCalledWith(expect.anything(), 500);
  });
  test('New buttons', () => {
    function computerTurn() {
      serverMessages.innerHTML = 'My turn';
      roundNumber.value = turnNumber;
      let turnToReviewPreviousValues = 0;

      function previousTurnsShower() {
        brightAssigner(results[turnToReviewPreviousValues]);
        turnToReviewPreviousValues += 1;
        if (turnToReviewPreviousValues === results.length && turnNumber !== 1) {
          const newValueAssignerElement = setTimeout(newValueAssigner, 1500);
        }
      }

      function intervalCanceller() {
        clearInterval(lapIteratorForComputerTurn);
        runGamerTurn();
      }

      const chronometerToCancelInterval = turnNumber * 1500 + 200;
      const intervalCancellerElement = setTimeout(intervalCanceller, chronometerToCancelInterval);
      lapIteratorForComputerTurn = setInterval(previousTurnsShower, 1500);
    }
  });
});
