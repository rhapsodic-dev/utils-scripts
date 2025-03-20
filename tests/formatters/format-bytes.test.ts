import { describe, expect, it } from 'vitest';

import { formatBytes } from '../../src';

describe('formatBytes', () => {
  it('should return "0 Bytes" for 0 bytes', () => {
    expect(formatBytes(0)).toBe('0 Bytes');
  });

  it('should return "1 Byte" for 1 byte', () => {
    expect(formatBytes(1)).toBe('1 Bytes');
  });

  it('should return "1024 Bytes" for 1024 bytes', () => {
    expect(formatBytes(1024)).toBe('1 KB');
  });

  it('should return "1.5 KB" for 1536 bytes', () => {
    expect(formatBytes(1536)).toBe('1.5 KB');
  });

  it('should return "1 MB" for 1048576 bytes', () => {
    expect(formatBytes(1_048_576)).toBe('1 MB');
  });

  it('should return "1 GB" for 1073741824 bytes', () => {
    expect(formatBytes(1_073_741_824)).toBe('1 GB');
  });

  it('should return correctly formatted result with custom decimal places', () => {
    expect(formatBytes(1536, 1)).toBe('1.5 KB');
    expect(formatBytes(1536, 3)).toBe('1.5 KB');
  });

  it('should handle large numbers correctly', () => {
    expect(formatBytes(1_234_567_890_123)).toBe('1.12 TB');
  });

  it('should return the correct value for a large number of bytes', () => {
    expect(formatBytes(1_234_567_890_123_456)).toBe('1.1 PB');
  });

  it('should handle edge cases like negative values', () => {
    expect(formatBytes(-1024)).toBe('0 Bytes');
  });
});
