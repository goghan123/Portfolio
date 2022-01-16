/* eslint-dis/able */
/* eslint-disable linebreak-style */

import {
  describe, test, expect, jest,
} from '@jest/globals';
import {
  nextButton, previousButton, homeButton, getName, putDetailsButton,
  getImage, showLoadingMessage, lockPreviousAtMainPage, enableBackButton, putPokemonCount,
} from '../source/functions.js';

const mock = jest.fn();

describe('Buttons are correctly created', () => {
  test('"Next" button', () => {
    $(nextButton).attr('onclick', mock);
    $(nextButton).click;
    expect(mock).toHaveBeenCalled();
  });
  test('"Previous" button', () => {
    $(previousButton).disabled = false;
    $(previousButton).attr('onclick', mock);
    $(previousButton).click;
    expect(mock).toHaveBeenCalledTimes(2);
  });
  test('"Home" button', () => {
    $(homeButton).attr('onclick', mock);
    $(homeButton).click;
    expect(mock).toHaveBeenCalledTimes(3);
  });
});

const hardcodedCopyOfFetchResponse = {
  count: 1118, next: 'https://pokeapi.co/api/v2/pokemon?offset=60&limit=20', previous: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20', results: [{ name: 'zubat', url: 'https://pokeapi.co/api/v2/pokemon/41/' }, { name: 'golbat', url: 'https://pokeapi.co/api/v2/pokemon/42/' }, { name: 'oddish', url: 'https://pokeapi.co/api/v2/pokemon/43/' }, { name: 'gloom', url: 'https://pokeapi.co/api/v2/pokemon/44/' }, { name: 'vileplume', url: 'https://pokeapi.co/api/v2/pokemon/45/' }, { name: 'paras', url: 'https://pokeapi.co/api/v2/pokemon/46/' }, { name: 'parasect', url: 'https://pokeapi.co/api/v2/pokemon/47/' }, { name: 'venonat', url: 'https://pokeapi.co/api/v2/pokemon/48/' }, { name: 'venomoth', url: 'https://pokeapi.co/api/v2/pokemon/49/' }, { name: 'diglett', url: 'https://pokeapi.co/api/v2/pokemon/50/' }, { name: 'dugtrio', url: 'https://pokeapi.co/api/v2/pokemon/51/' }, { name: 'meowth', url: 'https://pokeapi.co/api/v2/pokemon/52/' }, { name: 'persian', url: 'https://pokeapi.co/api/v2/pokemon/53/' }, { name: 'psyduck', url: 'https://pokeapi.co/api/v2/pokemon/54/' }, { name: 'golduck', url: 'https://pokeapi.co/api/v2/pokemon/55/' }, { name: 'mankey', url: 'https://pokeapi.co/api/v2/pokemon/56/' }, { name: 'primeape', url: 'https://pokeapi.co/api/v2/pokemon/57/' }, { name: 'growlithe', url: 'https://pokeapi.co/api/v2/pokemon/58/' }, { name: 'arcanine', url: 'https://pokeapi.co/api/v2/pokemon/59/' }, { name: 'poliwag', url: 'https://pokeapi.co/api/v2/pokemon/60/' }],
};

describe('Check names', () => {
  test('Testing function getName()', () => {
    getName(hardcodedCopyOfFetchResponse);
    const elementDemo = $('#col1a')[0];
    const elementName = elementDemo.textContent;
    expect(elementName).not.toBeUndefined();
    expect(elementName).toContain('zubat');
  });
});

describe('Correct deployment of the Details button column', () => {
  const offsetForTest = 40;
  putDetailsButton(offsetForTest);
  test('Inner text of random element', () => {
    expect($('#col2c').text()).toContain('Details');
  });
  test('Check if random button is clickable', () => {
    $('#col2f').attr('onclick', mock);
    $('#col2f').click;
    expect(mock).toHaveBeenCalled();
  });
});

describe('Check images', () => {
  const offsetForTest = 60;
  getImage(offsetForTest);
  test('Check cleaning of default Loading message', () => {
    expect($('#col3f').text()).not.toContain('Loading image...');
  });
  const hardCodedCopyOfImageSource = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png';
  test('Check random image', () => {
    expect($('#col3i').html()).toContain(hardCodedCopyOfImageSource);
  });
});

describe('Test loading message', () => {
  test('Test loading message', () => {
    const randomElementOfFirstColumn = $('#col1g').text('Hi, I am a bug');
    expect(randomElementOfFirstColumn.text()).toContain('Hi, I am a bug');
    showLoadingMessage();
    expect(randomElementOfFirstColumn.text()).toContain('Loading...');
  });
});

describe('Check buttons anti-bug functions', () => {
  test('Lock Previous button at main page', () => {
    lockPreviousAtMainPage(0);
    expect(previousButton.disabled).toBe(true);
    lockPreviousAtMainPage('00');
    expect(previousButton.disabled).toBe(true);
  });
  test('Lock Previous button at main page', () => {
    previousButton.disabled = true;
    expect(previousButton.disabled).toBe(true);
    enableBackButton();
    expect(previousButton.disabled).toBe(false);
  });
});

describe('Almost identic copy of function detail()', () => {
  let offset = '';
  function detail(clickedElement) {
    // Note: function detail() was copied and edited for better
    // handling due to event.target issues that made it impossible
    // to import it.

    const idOfClickedElement = clickedElement.attr('id');
    function getOffset(tensLocation) {
      const tensId = idOfClickedElement[tensLocation];
      if (tensLocation === 0 && tensId % 2 === 0) {
        const offsetTens = idOfClickedElement[tensLocation];
        offset = `${offsetTens.toString()}0`;
      } else if (tensLocation === 1 && tensId % 2 === 0) {
        const offsetHoundreds = idOfClickedElement[0];
        const offsetTens = idOfClickedElement[tensLocation];
        offset = `${offsetHoundreds.toString() + offsetTens.toString()}0`;
      } else if (tensLocation === 2 && tensId % 2 === 0) {
        const offsetThousands = idOfClickedElement[0];
        const offsetHoundreds = idOfClickedElement[1];
        const offsetTens = idOfClickedElement[tensLocation];
        offset = `${offsetThousands.toString() + offsetHoundreds.toString() + offsetTens.toString()}0`;
      } else if (tensLocation === 0 && tensId % 2 !== 0) {
        const offsetTens = idOfClickedElement[tensLocation];
        const newOffsetTens = offsetTens - 1;
        offset = `${newOffsetTens.toString()}0`;
      } else if (tensLocation === 1 && tensId % 2 !== 0) {
        const offsetHoundreds = idOfClickedElement[0];
        const offsetTens = idOfClickedElement[tensLocation];
        const newOffsetTens = offsetTens - 1;
        offset = `${offsetHoundreds.toString() + newOffsetTens.toString()}0`;
      } else if (tensLocation === 2 && tensId % 2 !== 0) {
        const offsetThousands = idOfClickedElement[0];
        const offsetHoundreds = idOfClickedElement[1];
        const offsetTens = idOfClickedElement[tensLocation];
        const newOffsetTens = offsetTens - 1;
        offset = `${offsetThousands.toString() + offsetHoundreds.toString() + newOffsetTens.toString()}0`;
      }
    }
    if (idOfClickedElement.length === 1) {
      offset = '00';
    } else if (idOfClickedElement.length === 2 && idOfClickedElement.substr(0, 1) === '1') {
      offset = '00';
    } else if (idOfClickedElement.length === 2) {
      getOffset(0);
    } else if (idOfClickedElement.length === 3) {
      getOffset(1);
    } else {
      getOffset(2);
    }
  }

  test('First checking of correct offset-catch of the function detail()', () => {
    const newIdForFirstTest = '3';
    const firstObjectiveForTest = $(document.createElement('button')).prop({
      id: newIdForFirstTest,
    });
    $('#col2d').append($(firstObjectiveForTest));
    firstObjectiveForTest.click(detail(firstObjectiveForTest));
    expect(offset).toContain('00');
  });
  test('Second checking of correct offset-catch of the function detail()', () => {
    const newIdForSecondTest = '347';
    const secondObjectiveForTest = $(document.createElement('button')).prop({
      id: newIdForSecondTest,
    });
    $('#col2d').append($(secondObjectiveForTest));
    secondObjectiveForTest.click(detail(secondObjectiveForTest));
    expect(offset).toContain('340');
  });
  test('Third checking of correct offset-catch of the function detail()', () => {
    const newIdForThirdTest = '89';
    const thirdObjectiveForTest = $(document.createElement('button')).prop({
      id: newIdForThirdTest,
    });
    $('#col2d').append($(thirdObjectiveForTest));
    thirdObjectiveForTest.click(detail(thirdObjectiveForTest));
    expect(offset).toContain('80');
  });
});
