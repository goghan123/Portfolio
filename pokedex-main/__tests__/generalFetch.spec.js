/* eslint-dis/able */
/* eslint-disable linebreak-style */

import {
  describe, test, expect, jest,
} from '@jest/globals';

import getPokemonSpecificUrl from '../api/generalFetch.js';
import {
  urlForTestingJSON as urlForDetails,
  responseForTesting as visibleListPokemons,
} from './classOneTypePokemon.spec.js';

const offsetForTest = 40;
const htmlLocationForTest = 11;
// Note: htmlLocationForTest is the raw number of index html. In
// context offset 40 it should call pokemmon id 52

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(visibleListPokemons),
}));

let fetchMockResponse;
beforeEach(async () => {
  fetchMockResponse = await getPokemonSpecificUrl(offsetForTest, htmlLocationForTest);
});

const expectedFetchMockResponse = { visibleListPokemons, urlForDetails };

describe('Check correct fetch response', () => {
  test('Check both components of the function output', () => {
    expect(fetchMockResponse[0]).toBe(expectedFetchMockResponse[0]);
    expect(fetchMockResponse[1]).toBe(expectedFetchMockResponse[1]);
  });
});
