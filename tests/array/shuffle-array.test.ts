import { describe, expect, it } from 'vitest';

import { shuffleArray } from '../../src';

function isSameElements<T>(original: T[], shuffled: T[]) {
  return (
    original.length === shuffled.length
    && original.every((item) => shuffled.includes(item))
  );
}

describe('shuffleArray', () => {
  it('should return an array of the same length', () => {
    const input = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(input);
    expect(shuffled).toHaveLength(input.length);
  });

  it('should return an array containing the same elements', () => {
    const input = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(input);
    expect(isSameElements(input, shuffled)).toBe(true);
  });

  it('should return a new array and not modify the original', () => {
    const input = [1, 2, 3, 4, 5];
    const copy = [...input];
    shuffleArray(input);
    expect(input).toEqual(copy);
  });

  it('should shuffle the elements (probabilistic test)', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffleArray(input);
    expect(shuffled).not.toEqual(input);
  });
});
