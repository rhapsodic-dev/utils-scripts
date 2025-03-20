/**
 * Generates a random integer between the specified minimum and maximum values, inclusive.
 *
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive).
 * @returns {number} - A random integer between min and max.
 *
 * @example
 * console.log(getRandomInt(1, 10)); // Output: A random integer between 1 and 10 (inclusive).
 * console.log(getRandomInt(5, 5));  // Output: 5
 */
export function getRandomInt(min: number, max: number): number {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

/**
 * Generates a random alphanumeric string of a specified length.
 *
 * The generated string consists of uppercase letters, lowercase letters, and digits.
 * The default length is 6 if no length is specified.
 *
 * @param {number} [length=6] - The length of the random string to be generated (default is 6).
 * @returns {string} - A random alphanumeric string of the specified length.
 *
 * @example
 * console.log(getRandomString());        // Output: A random string of 6 characters (e.g., "aB3dEf").
 * console.log(getRandomString(10));      // Output: A random string of 10 characters (e.g., "1A2bC3dE4F").
 * console.log(getRandomString(0));       // Output: An empty string.
 */
export function getRandomString(length: number = 6): string {
  const source = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(source.charAt(Math.floor(Math.random() * source.length)));
  }

  return result.join('');
}
