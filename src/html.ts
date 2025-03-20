interface Bounds {
  top: number;
  left: number;
  width: number;
  height: number;
}

/**
 * Gets the offset rectangle of a given HTML or SVG element.
 *
 * The offset rectangle includes the element's position relative to the document,
 * as well as its width and height. If the element is null or not an instance of
 * HTMLElement or SVGElement, it returns a rectangle with zero dimensions.
 *
 * @param {HTMLElement | SVGElement | Text | null} el - The element for which to get the offset rectangle.
 * @returns {Bounds} - An object containing the top, left, width, and height of the element.
 *
 * @example
 * const element = document.getElementById('myElement');
 * const offset = getOffsetRect(element);
 * console.log(offset); // Output: { top: 100, left: 200, width: 150, height: 50 }
 */
export function getOffsetRect(el: HTMLElement | SVGElement | Text | null): Bounds {
  if (typeof globalThis === 'undefined' || !el || !(el instanceof HTMLElement || el instanceof SVGElement)) {
    return {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    };
  }

  const box = el.getBoundingClientRect();

  // eslint-disable-next-line unicorn/prefer-global-this
  const scrollTop = typeof window === 'undefined' ? 0 : window.scrollY || document.documentElement.scrollTop;
  // eslint-disable-next-line unicorn/prefer-global-this
  const scrollLeft = typeof window === 'undefined' ? 0 : window.scrollX || document.documentElement.scrollLeft;
  const clientTop = document.documentElement.clientTop || 0;
  const clientLeft = document.documentElement.clientLeft || 0;

  return {
    top: Math.round(box.top + scrollTop - clientTop),
    left: Math.round(box.left + scrollLeft - clientLeft),
    width: Math.round(box.width),
    height: Math.round(box.height),
  };
}
