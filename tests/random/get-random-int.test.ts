import { describe, expect, it } from 'vitest';

import { getRandomInt } from '../../src';

describe('getRandomInt', () => {
  it('should return a number between the min and max values (inclusive)', () => {
    const min = 1;
    const max = 10;
    const randomInt = getRandomInt(min, max);

    expect(randomInt).toBeGreaterThanOrEqual(min);
    expect(randomInt).toBeLessThanOrEqual(max);
  });

  it('should handle edge cases when min equals max', () => {
    const value = getRandomInt(5, 5);
    expect(value).toBe(5);
  });

  it('should return an integer', () => {
    const min = 1;
    const max = 10;
    const randomInt = getRandomInt(min, max);

    expect(Number.isInteger(randomInt)).toBe(true);
  });
});
