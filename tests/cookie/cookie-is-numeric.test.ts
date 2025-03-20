import { describe, expect, it } from 'vitest';

import { cookieIsNumeric } from '../../src';

describe('cookieIsNumeric', () => {
  it('returns true for numbers', () => {
    expect(cookieIsNumeric(123)).toBe(true);
    expect(cookieIsNumeric(0)).toBe(true);
    expect(cookieIsNumeric(-456)).toBe(true);
  });

  it('returns true for strings containing numbers', () => {
    expect(cookieIsNumeric('789')).toBe(true);
    expect(cookieIsNumeric('0')).toBe(true);
    expect(cookieIsNumeric('-1011')).toBe(true);
  });

  it('returns false for undefined and null', () => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(cookieIsNumeric(undefined)).toBe(false);
    expect(cookieIsNumeric(null)).toBe(false);
  });

  it('returns false for NaN', () => {
    expect(cookieIsNumeric(Number.NaN)).toBe(false);
  });

  it('returns false for strings that are not numbers', () => {
    expect(cookieIsNumeric('abc')).toBe(false);
    expect(cookieIsNumeric('123abc')).toBe(false);
    expect(cookieIsNumeric('NaN')).toBe(false);
    expect(cookieIsNumeric('')).toBe(false);
  });

  it('returns false for objects and arrays', () => {
    expect(cookieIsNumeric({})).toBe(false);
    expect(cookieIsNumeric([])).toBe(false);
    expect(cookieIsNumeric([123])).toBe(false);
  });
});
