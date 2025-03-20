import { describe, expect, it } from 'vitest';

import { chunkArray } from '../../src';

describe('chunkArray', () => {
  it('should split array into chunks of the specified size', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const chunkSize = 3;
    const result = chunkArray(input, chunkSize);
    expect(result).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });

  it('should return an empty array when input is empty', () => {
    const input: number[] = [];
    const chunkSize = 3;
    const result = chunkArray(input, chunkSize);
    expect(result).toEqual([]);
  });

  it('should return the original array when chunkSize is larger than array length', () => {
    const input = [1, 2, 3];
    const chunkSize = 5;
    const result = chunkArray(input, chunkSize);
    expect(result).toEqual([[1, 2, 3]]);
  });

  it('should handle chunkSize of 1', () => {
    const input = [1, 2, 3, 4, 5];
    const chunkSize = 1;
    const result = chunkArray(input, chunkSize);
    expect(result).toEqual([[1], [2], [3], [4], [5]]);
  });

  it('should handle chunkSize equal to the array length', () => {
    const input = [1, 2, 3, 4];
    const chunkSize = 4;
    const result = chunkArray(input, chunkSize);
    expect(result).toEqual([[1, 2, 3, 4]]);
  });

  it('should handle chunkSize of 0 (should throw an error or handle it gracefully)', () => {
    const input = [1, 2, 3];
    const chunkSize = 0;
    expect(() => chunkArray(input, chunkSize)).toThrowError();
  });
});
