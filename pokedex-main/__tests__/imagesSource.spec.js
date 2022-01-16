/* eslint-disable linebreak-style */
import {
  test, expect,
} from '@jest/globals';
import { baseUrlImageSource, formatUrlImageSource } from '../api/imagesSource.js';

test('Url building', (() => {
  const offsetForTest = 60;
  const realHardCodedUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png';
  const builtUrl = `${baseUrlImageSource}${offsetForTest}${formatUrlImageSource}`;
  expect(builtUrl).toEqual(realHardCodedUrl);
}));
