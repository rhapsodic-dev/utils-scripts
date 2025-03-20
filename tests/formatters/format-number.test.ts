import { describe, expect, it } from 'vitest';

import { formatNumber } from '../../src';

describe('formatNumber', () => {
  it('formats a positive number with thousands separator', () => {
    expect(formatNumber(1000)).toBe('1 000');
  });

  it('formats a number with many digits', () => {
    expect(formatNumber(123_456_789)).toBe('123 456 789');
  });

  it('formats a negative number', () => {
    expect(formatNumber(-123_456)).toBe('-123 456');
  });

  it('formats a number with decimal points', () => {
    expect(formatNumber(123_456.78)).toBe('123 456.78');
  });

  it('formats a small number', () => {
    expect(formatNumber(999)).toBe('999');
  });

  it('formats zero', () => {
    expect(formatNumber(0)).toBe('0');
  });

  it('formats a very large number', () => {
    expect(formatNumber(987_654_321_012_345)).toBe('987 654 321 012 345');
  });

  it('formats a number with a floating point', () => {
    expect(formatNumber(1234.56)).toBe('1 234.56');
  });
});
