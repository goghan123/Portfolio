/* eslint-disable linebreak-style */
import {
  describe, test, expect, jest,
} from '@jest/globals';
import OneTypePokemon from '../source/classOneTypePokemon.js';

export const responseForTesting = {
  count: 1118, next: 'https://pokeapi.co/api/v2/pokemon?offset=60&limit=20', previous: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20', results: [{ name: 'zubat', url: 'https://pokeapi.co/api/v2/pokemon/41/' }, { name: 'golbat', url: 'https://pokeapi.co/api/v2/pokemon/42/' }, { name: 'oddish', url: 'https://pokeapi.co/api/v2/pokemon/43/' }, { name: 'gloom', url: 'https://pokeapi.co/api/v2/pokemon/44/' }, { name: 'vileplume', url: 'https://pokeapi.co/api/v2/pokemon/45/' }, { name: 'paras', url: 'https://pokeapi.co/api/v2/pokemon/46/' }, { name: 'parasect', url: 'https://pokeapi.co/api/v2/pokemon/47/' }, { name: 'venonat', url: 'https://pokeapi.co/api/v2/pokemon/48/' }, { name: 'venomoth', url: 'https://pokeapi.co/api/v2/pokemon/49/' }, { name: 'diglett', url: 'https://pokeapi.co/api/v2/pokemon/50/' }, { name: 'dugtrio', url: 'https://pokeapi.co/api/v2/pokemon/51/' }, { name: 'meowth', url: 'https://pokeapi.co/api/v2/pokemon/52/' }, { name: 'persian', url: 'https://pokeapi.co/api/v2/pokemon/53/' }, { name: 'psyduck', url: 'https://pokeapi.co/api/v2/pokemon/54/' }, { name: 'golduck', url: 'https://pokeapi.co/api/v2/pokemon/55/' }, { name: 'mankey', url: 'https://pokeapi.co/api/v2/pokemon/56/' }, { name: 'primeape', url: 'https://pokeapi.co/api/v2/pokemon/57/' }, { name: 'growlithe', url: 'https://pokeapi.co/api/v2/pokemon/58/' }, { name: 'arcanine', url: 'https://pokeapi.co/api/v2/pokemon/59/' }, { name: 'poliwag', url: 'https://pokeapi.co/api/v2/pokemon/60/' }],
};

export const urlForTestingJSON = {
  "demoKey": "demoValue",
  "demoKey": "demoValue",
  "name": "meowth",
  "types": {
    0: {
      "demoKey": "demoValue",
      "type": {
        "name": "normal",
        "demoKey": "demoValue",
      }
    }
  },
  "weight": 42,
};

export const htmlLocationForTesting = 11;

const newPokemonForTesting = new OneTypePokemon(
  responseForTesting,
  urlForTestingJSON,
  htmlLocationForTesting,
);

describe('Testing pokemon correct building', () => {
  test('Pokemon name', () => {
    expect(newPokemonForTesting.name).toContain('meowth');
  });
  test('Pokemon type', () => {
    expect(newPokemonForTesting.type).toContain('normal');
  });
  test('Pokemon weight', () => {
    expect(newPokemonForTesting.weight).toEqual(42);
  });
});

describe('Testing pokemon introduction. Note that dom functions has been modified with jsdom for testing', () => {
  function copyOfFunctionIntroducePokemon() {
    const columnFourList = $('td[id^="col4"]');
    $(columnFourList).each(() => $(this).text(''));
    const popUpMessageLocation = columnFourList[htmlLocationForTesting];
    popUpMessageLocation.innerHTML = `This is ${newPokemonForTesting.name}. Their height is ${newPokemonForTesting.height}, they have a weight of ${newPokemonForTesting.weight}, and they belong to the ${newPokemonForTesting.type} type.`;
  }
  copyOfFunctionIntroducePokemon();
  const messageLocation = $('#col4l')[0];
  test('Whether the message of the pop up is correct by taking a part of it', () => {
    expect(messageLocation.textContent).toContain('have a weight of 42, and they belong to the normal');
  });
});
