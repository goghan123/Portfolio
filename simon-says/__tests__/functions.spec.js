/* eslint-disable linebreak-style */

import {
  describe, test, expect,
} from '@jest/globals';
import { serverMessages, newValueAssigner, ingameServerMessages } from '../source/functions.js';
import { results } from '../source/main.js';

describe('Check messages input element', () => {
  test('Check messages input element', () => {
    expect($(serverMessages).attr('id')).toContain('server-messages');
  });
});

const mockMath = Object.create(global.Math);
global.Math = mockMath;
mockMath.random = () => 0.2;
newValueAssigner();
mockMath.random = () => 0.5;
newValueAssigner();
mockMath.random = () => 0.7;
newValueAssigner();
mockMath.random = () => 0.9;
newValueAssigner();

describe('Check function that assigns new values', () => {
  test('Check function that assigns new values', () => {
    expect(results).toContain(1);
    expect(results).toContain(2);
    expect(results).toContain(3);
    expect(results).toContain(4);
  });
});

describe('Server messages switch', () => {
  test('Server messages switch', () => {
    ingameServerMessages(2);
    expect(serverMessages.innerHTML).toContain('Right answer');
  });

  describe('Server messages switch', () => {
    test('Server messages switch', () => {
      ingameServerMessages(3);
      expect(serverMessages.innerHTML).toContain('Very good');
    });
  });
  describe('Server messages switch', () => {
    test('Server messages switch', () => {
      ingameServerMessages(6);
      expect(serverMessages.innerHTML).toContain("Well well. You're good at this, right?");
    });
  });
  describe('Server messages switch', () => {
    test('Server messages switch', () => {
      ingameServerMessages(7);
      expect(serverMessages.innerHTML).toContain('Very well for a beginner');
    });
  });
  describe('Server messages switch', () => {
    test('Server messages switch', () => {
      ingameServerMessages(8);
      expect(serverMessages.innerHTML).toContain('You trully are king of kings');
    });
  });
});
