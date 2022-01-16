/* eslint-dis/able */
/* eslint-disable linebreak-style */

import {
  describe, test, expect, jest,
} from '@jest/globals';

import getPokemonDetails from '../api/specificFetch.js';
import { urlForTestingJSON as urlForDetails } from './classOneTypePokemon.spec.js';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(urlForDetails),
}));

let fetchMockResponse;
beforeEach(async () => {
  fetchMockResponse = await getPokemonDetails(urlForDetails);
});

describe('Check correct fetch response', () => {
  test('Check both components of the function output', () => {
    expect(fetchMockResponse).toBe(urlForDetails);
  });
});
