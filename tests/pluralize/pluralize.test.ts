import { describe, expect, it } from 'vitest';

import { pluralize } from '../../src';

describe('pluralize', () => {
  it('should return the correct plural form for singular count', () => {
    expect(pluralize(1, ['apple', 'apples', 'apples'])).toBe('apple');
  });

  it('should return the correct plural form for few count', () => {
    expect(pluralize(2, ['apple', 'apples', 'apples'])).toBe('apples');
    expect(pluralize(3, ['apple', 'apples', 'apples'])).toBe('apples');
    expect(pluralize(4, ['apple', 'apples', 'apples'])).toBe('apples');
  });

  it('should return the correct plural form for many count', () => {
    expect(pluralize(5, ['apple', 'apples', 'apples'])).toBe('apples');
    expect(pluralize(11, ['apple', 'apples', 'apples'])).toBe('apples');
    expect(pluralize(20, ['apple', 'apples', 'apples'])).toBe('apples');
  });

  it('should handle edge cases correctly', () => {
    expect(pluralize(0, ['apple', 'apples', 'apples'])).toBe('apples');
    expect(pluralize(101, ['apple', 'apples', 'apples'])).toBe('apple');
    expect(pluralize(102, ['apple', 'apples', 'apples'])).toBe('apples');
    expect(pluralize(112, ['apple', 'apples', 'apples'])).toBe('apples');
  });
});
