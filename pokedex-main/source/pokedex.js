/* eslint-disable linebreak-style */

import {
  getName,
  getImage,
  showLoadingMessage,
  lockPreviousAtMainPage,
  enableBackButton,
  previousButton,
  homeButton,
  nextButton,
  putDetailsButton,
  putPokemonCount,
} from './functions.js';
import navigateToPage from '../api/pageNavigation.js';

const columnFourList = document.querySelectorAll('td[id^="col4"]');
let offset = '00';
navigateToPage(offset)
  .then((page) => (page.json())
    .then((loadedPage) => {
      offset = Number(offset);
      getName(loadedPage);
      putPokemonCount(loadedPage);
      putDetailsButton(offset);
      getImage(offset);
    }));

homeButton.onclick = function clickOnHome() {
  columnFourList.forEach((element) => element.innerHTML = '');
  offset = '00';
  navigateToPage(offset)
    .then((page) => (page.json())
      .then((loadedPage) => {
        offset = Number(offset);
        getName(loadedPage);
        putDetailsButton(offset);
        getImage(offset);
      }));
  lockPreviousAtMainPage(offset);
  return false;
};

nextButton.onclick = function clickOnNext() {
  columnFourList.forEach((element) => element.innerHTML = '');
  offset += 20;
  showLoadingMessage();
  navigateToPage(offset)
    .then((page) => (page.json())
      .then((loadedPage) => {
        getName(loadedPage);
        putDetailsButton(offset);
        getImage(offset);
      }));
  enableBackButton();
  return false;
};

previousButton.onclick = function clickOnPrevious() {
  columnFourList.forEach((element) => element.innerHTML = '');
  if (offset === 20) {
    offset = '00';
  } else {
    offset -= 20;
  }
  showLoadingMessage();
  navigateToPage(offset)
    .then((page) => (page.json())
      .then((loadedPage) => {
        offset = Number(offset);
        getName(loadedPage);
        putDetailsButton(offset);
        getImage(offset);
      }));
  lockPreviousAtMainPage(offset);
  return false;
};
