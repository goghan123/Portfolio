/* eslint-disable linebreak-style */

import {
  cancelButton, launchButton, gameInProcess, cancelGame,
} from './main.js';

cancelButton.onclick = function cancel() {
  cancelGame();
  cancelButton.disabled = true;
  launchButton.disabled = false;
  return false;
};

launchButton.onclick = function launch() {
  gameInProcess();
  return false;
};
