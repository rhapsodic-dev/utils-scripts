import { describe, expect, it } from 'vitest';

import { getRandomString } from '../../src';

describe('getRandomString', () => {
  it('should return a string of the correct length', () => {
    const length = 8;
    const randomString = getRandomString(length);

    expect(randomString.length).toBe(length);
  });

  it('should return a string consisting of valid characters', () => {
    const randomString = getRandomString();

    expect(/^[A-Za-z0-9]+$/.test(randomString)).toBe(true);
  });

  it('should return a string of length 6 by default', () => {
    const randomString = getRandomString();

    expect(randomString.length).toBe(6);
  });
});
