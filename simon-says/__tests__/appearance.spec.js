/* eslint-disable linebreak-style */
import {
  describe, test, expect, jest,
} from '@jest/globals';
import {
  blueSquare, redSquare, yellowSquare, greenSquare, brightAssigner,
} from '../source/appearance.js';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
const mock = jest.fn();

describe('Check buttons', () => {
  test('Blue button', () => {
    expect($(blueSquare).attr('id')).toContain('blue-square');
  });
  test('Red button', () => {
    expect($(redSquare).attr('id')).toContain('red-square');
  });
  test('Yellow button', () => {
    expect($(yellowSquare).attr('id')).toContain('yellow-square');
  });
  test('Green button', () => {
    expect($(greenSquare).attr('id')).toContain('green-square');
  });
});

// https://htmlcolorcodes.com/es/
// rgb(22, 162, 1) is equal to #16A201 (bright green)
// rgb(222, 214, 124) is equal to #DED67C (bright yellow)
// rgb(222, 124, 124) is equal to #DE7C7C (bright red)
// rgb(154, 173, 218) is equal to #9AADDA (bright blue)

describe('Check bright effect if selected', () => {
  test('Green square is bright for a while', () => {
    brightAssigner(1);
    expect(greenSquare.style.backgroundColor).toBe('rgb(22, 162, 1)');
  });
  test('Yellow square is bright for a while', () => {
    brightAssigner(2);
    expect(yellowSquare.style.backgroundColor).toBe('rgb(222, 214, 124)');
  });
  test('Red square is bright for a while', () => {
    brightAssigner(3);
    expect(redSquare.style.backgroundColor).toBe('rgb(222, 124, 124)');
  });
  test('Blue square is bright for a while', () => {
    brightAssigner(4);
    expect(blueSquare.style.backgroundColor).toBe('rgb(154, 173, 218)');
  });
  test('If colours returns to normal through inner setTimeOut function', () => {
    brightAssigner(mock);
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledWith(expect.anything(), 500);
  });
});
