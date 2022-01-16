/* eslint-disable linebreak-style */
import {
  describe, test, expect, jest,
} from '@jest/globals';
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
} from '../source/functions.js';
import { responseForTesting as visibleListPokemons } from './classOneTypePokemon.spec.js';

const mock = jest.fn();

const pageOffset00 = {
  count: 1118, next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20', previous: null, results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }, { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }, { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' }, { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' }, { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' }, { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' }, { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' }, { name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' }, { name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/' }, { name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/' }, { name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/' }, { name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/' }, { name: 'weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/' }, { name: 'kakuna', url: 'https://pokeapi.co/api/v2/pokemon/14/' }, { name: 'beedrill', url: 'https://pokeapi.co/api/v2/pokemon/15/' }, { name: 'pidgey', url: 'https://pokeapi.co/api/v2/pokemon/16/' }, { name: 'pidgeotto', url: 'https://pokeapi.co/api/v2/pokemon/17/' }, { name: 'pidgeot', url: 'https://pokeapi.co/api/v2/pokemon/18/' }, { name: 'rattata', url: 'https://pokeapi.co/api/v2/pokemon/19/' }, { name: 'raticate', url: 'https://pokeapi.co/api/v2/pokemon/20/' }],
};

const pageOffset20 = {
  count: 1118, next: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20', previous: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20', results: [{ name: 'spearow', url: 'https://pokeapi.co/api/v2/pokemon/21/' }, { name: 'fearow', url: 'https://pokeapi.co/api/v2/pokemon/22/' }, { name: 'ekans', url: 'https://pokeapi.co/api/v2/pokemon/23/' }, { name: 'arbok', url: 'https://pokeapi.co/api/v2/pokemon/24/' }, { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' }, { name: 'raichu', url: 'https://pokeapi.co/api/v2/pokemon/26/' }, { name: 'sandshrew', url: 'https://pokeapi.co/api/v2/pokemon/27/' }, { name: 'sandslash', url: 'https://pokeapi.co/api/v2/pokemon/28/' }, { name: 'nidoran-f', url: 'https://pokeapi.co/api/v2/pokemon/29/' }, { name: 'nidorina', url: 'https://pokeapi.co/api/v2/pokemon/30/' }, { name: 'nidoqueen', url: 'https://pokeapi.co/api/v2/pokemon/31/' }, { name: 'nidoran-m', url: 'https://pokeapi.co/api/v2/pokemon/32/' }, { name: 'nidorino', url: 'https://pokeapi.co/api/v2/pokemon/33/' }, { name: 'nidoking', url: 'https://pokeapi.co/api/v2/pokemon/34/' }, { name: 'clefairy', url: 'https://pokeapi.co/api/v2/pokemon/35/' }, { name: 'clefable', url: 'https://pokeapi.co/api/v2/pokemon/36/' }, { name: 'vulpix', url: 'https://pokeapi.co/api/v2/pokemon/37/' }, { name: 'ninetales', url: 'https://pokeapi.co/api/v2/pokemon/38/' }, { name: 'jigglypuff', url: 'https://pokeapi.co/api/v2/pokemon/39/' }, { name: 'wigglytuff', url: 'https://pokeapi.co/api/v2/pokemon/40/' }],
};

const pageOffset40 = {
  count: 1118, next: 'https://pokeapi.co/api/v2/pokemon?offset=60&limit=20', previous: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20', results: [{ name: 'zubat', url: 'https://pokeapi.co/api/v2/pokemon/41/' }, { name: 'golbat', url: 'https://pokeapi.co/api/v2/pokemon/42/' }, { name: 'oddish', url: 'https://pokeapi.co/api/v2/pokemon/43/' }, { name: 'gloom', url: 'https://pokeapi.co/api/v2/pokemon/44/' }, { name: 'vileplume', url: 'https://pokeapi.co/api/v2/pokemon/45/' }, { name: 'paras', url: 'https://pokeapi.co/api/v2/pokemon/46/' }, { name: 'parasect', url: 'https://pokeapi.co/api/v2/pokemon/47/' }, { name: 'venonat', url: 'https://pokeapi.co/api/v2/pokemon/48/' }, { name: 'venomoth', url: 'https://pokeapi.co/api/v2/pokemon/49/' }, { name: 'diglett', url: 'https://pokeapi.co/api/v2/pokemon/50/' }, { name: 'dugtrio', url: 'https://pokeapi.co/api/v2/pokemon/51/' }, { name: 'meowth', url: 'https://pokeapi.co/api/v2/pokemon/52/' }, { name: 'persian', url: 'https://pokeapi.co/api/v2/pokemon/53/' }, { name: 'psyduck', url: 'https://pokeapi.co/api/v2/pokemon/54/' }, { name: 'golduck', url: 'https://pokeapi.co/api/v2/pokemon/55/' }, { name: 'mankey', url: 'https://pokeapi.co/api/v2/pokemon/56/' }, { name: 'primeape', url: 'https://pokeapi.co/api/v2/pokemon/57/' }, { name: 'growlithe', url: 'https://pokeapi.co/api/v2/pokemon/58/' }, { name: 'arcanine', url: 'https://pokeapi.co/api/v2/pokemon/59/' }, { name: 'poliwag', url: 'https://pokeapi.co/api/v2/pokemon/60/' }],
};

// global.fetch = jest.fn(() => Promise.resolve({
//   json: () => Promise.resolve(visibleListPokemons),
// }));

// async function navigateToPage() {
//   // altered function for testing
//   const fetchResponse = await fetch(visibleListPokemons, { method: 'GET' });
//   const fetchResponseJson = await fetchResponse.json();
//   return fetchResponseJson;
// }

// const offsetDemo = 0;

// let fetchMockResponse;
// beforeEach(async () => {
//   fetchMockResponse = await navigateToPage();
// });

describe('Pokedex code was copied here since there was no export function', () => {
  const columnFourList = document.querySelectorAll('td[id^="col4"]');
  let offset = '00';
  describe("Testing identic copy of pokedex's startup functions", () => {
    const loadedPage = pageOffset00;

    offset = Number(offset);
    getName(loadedPage);
    putDetailsButton(offset);
    getImage(offset);
    test('Test names', () => {
      expect($('#col1c').html()).toContain('venusaur');
    });
    test('Test buttons', () => {
      expect($('#col2c').html()).toContain('Details');
    });
    test('Test images', () => {
      const hardCodedCopyOfImageSource = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png';
      expect($('#col3i').html()).toContain(hardCodedCopyOfImageSource);
    });
  });

  describe("Testing 'next' button", () => {
    test('Confirming "next" button has not been clicked yet', () => {
      expect(offset).toBe(0);
    });
    test('Confirming button click', () => {
      nextButton.onclick = function clickOnNext() {
        columnFourList.forEach((element) => element.innerHTML = '');
        offset += 20;
        showLoadingMessage();
        const loadedPage = pageOffset20;
        getName(loadedPage);
        putDetailsButton(offset);
        getImage(offset);
        enableBackButton();
        return false;
      };
      $(nextButton).click();
      expect(offset).toBe(20);
    });
    test('Test names', () => {
      expect($('#col1c').html()).toContain('ekans');
    });
    test('Test buttons', () => {
      expect($('#col2c').html()).toContain('Details');
    });
    test('Test images', () => {
      const hardCodedCopyOfImageSource = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png';
      expect($('#col3i').html()).toContain(hardCodedCopyOfImageSource);
    });
    test('"Previous" button is enabled', () => {
      expect(previousButton.disabled).toBe(false);
    });
  });

  describe("Testing 'Previous' button", () => {
    test('Confirming "Previous" button has not been clicked yet', () => {
      expect(offset).toBe(20);
    });
    test('Confirming button click', () => {
      previousButton.onclick = function clickOnPrevious() {
        columnFourList.forEach((element) => element.innerHTML = '');
        if (offset === 20) {
          offset = '00';
        } else {
          offset -= 20;
        }
        showLoadingMessage();
        const loadedPage = pageOffset00;
        offset = Number(offset);
        getName(loadedPage);
        putDetailsButton(offset);
        getImage(offset);
        lockPreviousAtMainPage(offset);
        return false;
      };
      $(previousButton).click();
      expect(offset).toBe(0);
    });
    test('Test names', () => {
      expect($('#col1c').html()).toContain('venusaur');
    });
    test('Test buttons', () => {
      expect($('#col2c').html()).toContain('Details');
    });
    test('Test images', () => {
      const hardCodedCopyOfImageSource = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png';
      expect($('#col3h').html()).toContain(hardCodedCopyOfImageSource);
    });
    test('"Previous" button is disabled', () => {
      expect(previousButton.disabled).toBe(true);
    });
  });

  describe("Testing 'Home' button", () => {
    test('Before clicking the button the offset will be set to 40', () => {
      offset = 40;
      expect(offset).toBe(40);
    });
    test('Confirming button click', () => {
      homeButton.onclick = function clickOnHome() {
        columnFourList.forEach((element) => element.innerHTML = '');
        offset = '00';
        const loadedPage = pageOffset00;
        offset = Number(offset);
        getName(loadedPage);
        putDetailsButton(offset);
        getImage(offset);
        lockPreviousAtMainPage(offset);
        return false;
      };
      $(homeButton).click();
      expect(offset).toBe(0);
    });
    test('Test names', () => {
      expect($('#col1e').html()).toContain('charmeleon');
    });
    test('Test buttons', () => {
      expect($('#col2c').html()).toContain('Details');
    });
    test('Test images', () => {
      const hardCodedCopyOfImageSource = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png';
      expect($('#col3f').html()).toContain(hardCodedCopyOfImageSource);
    });
    test('"Previous" button is disabled', () => {
      expect(previousButton.disabled).toBe(true);
    });
  });
});
