import {
  afterEach, beforeEach, describe, expect, it, vi,
} from 'vitest';

import { getOffsetRect } from '../../src';

describe('getOffsetRect', () => {
  let mockElement: HTMLElement;

  beforeEach(() => {
    mockElement = document.createElement('div');
    mockElement.style.position = 'absolute';
    mockElement.style.top = '100px';
    mockElement.style.left = '200px';
    mockElement.style.width = '50px';
    mockElement.style.height = '150px';
    document.body.append(mockElement);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should return correct offset and dimensions for a standard HTMLElement', () => {
    const mockBoundingClientRect = {
      top: 100,
      left: 200,
      width: 50,
      height: 150,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    vi.spyOn(mockElement, 'getBoundingClientRect').mockReturnValue(mockBoundingClientRect);

    const result = getOffsetRect(mockElement);

    expect(result.top).toBe(100);
    expect(result.left).toBe(200);
    expect(result.width).toBe(50);
    expect(result.height).toBe(150);
  });

  it('should handle case where window is undefined (server-side rendering)', () => {
    const originalWindow = globalThis.window;

    delete globalThis.window;

    const result = getOffsetRect(mockElement);

    expect(result.top).toBe(0);
    expect(result.left).toBe(0);
    expect(result.width).toBe(0);
    expect(result.height).toBe(0);

    globalThis.window = originalWindow;
  });

  it('should return 0 for non-HTMLElement or SVGElement inputs', () => {
    const textNode = document.createTextNode('Test text');
    const result = getOffsetRect(textNode);

    expect(result.top).toBe(0);
    expect(result.left).toBe(0);
    expect(result.width).toBe(0);
    expect(result.height).toBe(0);
  });

  it('should correctly adjust for scroll position', () => {
    vi.spyOn(globalThis, 'scrollY', 'get').mockReturnValue(50);
    vi.spyOn(globalThis, 'scrollX', 'get').mockReturnValue(30);

    const mockBoundingClientRect = {
      top: 100,
      left: 200,
      width: 50,
      height: 150,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    vi.spyOn(mockElement, 'getBoundingClientRect').mockReturnValue(mockBoundingClientRect);

    const result = getOffsetRect(mockElement);

    expect(result.top).toBe(150); // 100 (box.top) + 50 (scrollTop)
    expect(result.left).toBe(230); // 200 (box.left) + 30 (scrollLeft)
    expect(result.width).toBe(50);
    expect(result.height).toBe(150);
  });
});
