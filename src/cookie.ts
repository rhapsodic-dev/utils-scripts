/**
 * Checks if the given value is numeric.
 *
 * A value is considered numeric if it is not undefined, null, or an empty string,
 * can be coerced to a number without resulting in NaN, is not an array, and is not an object.
 *
 * @param {unknown} value - The value to be checked for numeric status.
 * @returns {boolean} - Returns true if the value is numeric; otherwise, returns false.
 *
 * @example
 * console.log(cookieIsNumeric(42)); // Output: true
 * console.log(cookieIsNumeric('3.14')); // Output: true
 * console.log(cookieIsNumeric('')); // Output: false
 * console.log(cookieIsNumeric(null)); // Output: false
 * console.log(cookieIsNumeric([])); // Output: false
 * console.log(cookieIsNumeric({})); // Output: false
 * console.log(cookieIsNumeric(NaN)); // Output: false
 */
export function cookieIsNumeric(value: unknown): boolean {
  return value !== undefined
    && value !== null
    && value !== ''
    && !Number.isNaN(+value)
    && !(Array.isArray(value))
    && typeof value !== 'object';
}
