/* eslint-disable linebreak-style */

import {
  brightAssigner, redSquare, yellowSquare, blueSquare, greenSquare,
} from './appearance.js';
import {
  serverMessages, ingameServerMessages, newValueAssigner,
} from './functions.js';

export const launchButton = document.querySelector('#launch');
export const cancelButton = document.querySelector('#cancel');

const roundNumber = document.querySelector('#round-number');
export let results = [Math.ceil(Math.random() * 4)];
let turnNumber = 1;

export function gameInProcess() {
  cancelButton.disabled = false;
  launchButton.disabled = true;
  let lapIteratorForComputerTurn;

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
    return false;
  }

  function runGamerTurn() {
    let interimCountdown = turnNumber;

    function passToComputerTurn() {
      if (interimCountdown === 0) {
        greenSquare.onclick = null;
        redSquare.onclick = null;
        blueSquare.onclick = null;
        yellowSquare.onclick = null;
        turnNumber += 1;
        computerTurn();
      }
    }

    function resultsChecker(loggedValue, turn, countdown) {
      function resultsChecker2(loggedValue2, turn2, countdown2) {
        if (loggedValue2 === results[turn2 - countdown2]) {
          return 'Right answer.';
        }
        return 'Wrong answer';
      }

      if (resultsChecker2(loggedValue, turn, countdown) === 'Right answer.') {
        ingameServerMessages(turn);
        interimCountdown -= 1;
        passToComputerTurn();
      } else {
        serverMessages.innerHTML = 'Wrong answer! Game over. Goodbye.';
        greenSquare.onclick = null;
        redSquare.onclick = null;
        blueSquare.onclick = null;
        yellowSquare.onclick = null;
      }
    }

    greenSquare.onclick = function greenClick() {
      brightAssigner(1);
      resultsChecker(1, turnNumber, interimCountdown);
      return false;
    };

    yellowSquare.onclick = function yellowClick() {
      brightAssigner(2);
      resultsChecker(2, turnNumber, interimCountdown);
      return false;
    };

    redSquare.onclick = function redClick() {
      brightAssigner(3);
      resultsChecker(3, turnNumber, interimCountdown);
      return false;
    };

    blueSquare.onclick = function blueClick() {
      brightAssigner(4);
      resultsChecker(4, turnNumber, interimCountdown);
      return false;
    };
    return false;
  }
  setTimeout(computerTurn, 1000);
}

export function cancelGame() {
  serverMessages.innerHTML = 'Cancelled';
  greenSquare.onclick = null;
  redSquare.onclick = null;
  blueSquare.onclick = null;
  yellowSquare.onclick = null;
  results = [Math.ceil(Math.random() * 4)];
  turnNumber = 1;
}
