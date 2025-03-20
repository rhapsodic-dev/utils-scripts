import { describe, expect, it } from 'vitest';

import { toHHMMSS } from '../../src';

describe('toHHMMSS', () => {
  it('should return the time in HH:MM:SS format', () => {
    expect(toHHMMSS(3661)).toBe('1:01:01');
    expect(toHHMMSS(61)).toBe('01:01');
    expect(toHHMMSS(59)).toBe('00:59');
    expect(toHHMMSS(0)).toBe('00:00');
    expect(toHHMMSS(86_400)).toBe('24:00:00');
  });

  it('should handle non-integer values', () => {
    expect(toHHMMSS(3661.5)).toBe('1:01:01');
    expect(toHHMMSS('3661')).toBe('1:01:01');
  });

  it('should handle edge cases', () => {
    expect(toHHMMSS(0)).toBe('00:00');
    expect(toHHMMSS(3600)).toBe('1:00:00');
    expect(toHHMMSS(1_234_567)).toBe('342:56:07');
  });
});
