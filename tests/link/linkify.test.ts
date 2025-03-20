import { describe, expect, it } from 'vitest';

import { linkify } from '../../src';

describe('linkify', () => {
  it('should convert markdown links to anchor tags', () => {
    const input = 'Check this [example](https://example.com)';
    const output = 'Check this <a href="https://example.com" target="_blank" rel="noopener noreferrer">example</a>';
    expect(linkify(input)).toBe(output);
  });

  it('should convert plain URLs to anchor tags', () => {
    const input = 'Visit https://example.com for more info';
    const output = 'Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a> for more info';
    expect(linkify(input)).toBe(output);
  });

  it('should not modify already formatted links', () => {
    const input = 'Check this <a href="https://example.com">link</a>';
    expect(linkify(input)).toBe(input);
  });

  it('should handle multiple links in a string', () => {
    const input = 'Visit https://example.com and [GitHub](https://github.com)';
    const output = 'Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a> and <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>';
    expect(linkify(input)).toBe(output);
  });

  it('should not linkify URLs inside quotes', () => {
    const input = 'This is a "https://example.com" example';
    expect(linkify(input)).toBe(input);
  });
});
