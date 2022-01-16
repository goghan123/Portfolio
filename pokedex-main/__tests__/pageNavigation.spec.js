/* eslint-dis/able */
/* eslint-disable linebreak-style */

import {
  describe, test, expect, jest,
} from '@jest/globals';

import navigateToPage from '../api/pageNavigation.js';
import { responseForTesting as visibleListPokemons } from './classOneTypePokemon.spec.js';

const offsetForTest = '';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(visibleListPokemons),
}));

let fetchMockResponse;
beforeEach(async () => {
  fetchMockResponse = await navigateToPage(offsetForTest);
});

describe('Check correct fetch response', () => {
  test('Check both components of the function output', () => {
    const makeResponseReadable = () => {
      fetchMockResponse
        .then((response) => response.json())
        .then((jsonResponse) => {
          expect(jsonResponse).toBe(visibleListPokemons);
        });
    };
  });
});
