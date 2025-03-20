import { describe, expect, it } from 'vitest';

import { sumArray } from '../../src';

describe('sumArray', () => {
  it('should return 0 for an empty array', () => {
    expect(sumArray([])).toBe(0);
  });

  it('should return 0 for a non-array input', () => {
    expect(sumArray(null)).toBe(0);
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(sumArray(undefined)).toBe(0);
  });

  it('should return the sum of the array elements', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumArray([-1, -2, -3, -4, -5])).toBe(-15);
    expect(sumArray([0, 0, 0])).toBe(0);
    expect(sumArray([10, 20, 30])).toBe(60);
  });

  it('should handle arrays with a single element', () => {
    expect(sumArray([5])).toBe(5);
    expect(sumArray([-5])).toBe(-5);
  });

  it('should handle large numbers', () => {
    expect(sumArray([Number.MAX_SAFE_INTEGER, 1])).toBe(Number.MAX_SAFE_INTEGER + 1);
    expect(sumArray([Number.MIN_SAFE_INTEGER, -1])).toBe(Number.MIN_SAFE_INTEGER - 1);
  });
});
