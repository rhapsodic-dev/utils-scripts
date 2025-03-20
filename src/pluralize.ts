/**
 * Returns the appropriate plural form of a word based on the given count.
 *
 * This function is useful for languages with complex pluralization rules, such as Russian or Polish,
 * where the form of the word changes depending on the number. The function expects an array of words
 * where the first element is the singular form, the second is the plural form for counts of 2, 3, or 4,
 * and the third is the plural form for counts of 0, 5, and above.
 *
 * @param {number} count - The count used to determine the correct plural form.
 * @param {string[]} words - An array of words where:
 *   - `words[0]` is the singular form,
 *   - `words[1]` is the plural form for counts of 2, 3, or 4,
 *   - `words[2]` is the plural form for counts of 0, 5, and above.
 * @returns {string} - The appropriate word form based on the count.
 *
 * @example
 * console.log(pluralize(1, ['apple', 'apples', 'apples'])); // Output: "apple"
 * console.log(pluralize(2, ['apple', 'apples', 'apples'])); // Output: "apples"
 * console.log(pluralize(5, ['apple', 'apples', 'apples'])); // Output: "apples"
 * console.log(pluralize(21, ['apple', 'apples', 'apples'])); // Output: "apple"
 */
export function pluralize(count: number, words: string[]): string {
  const cases = [2, 0, 1, 1, 1, 2];
  return words[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[Math.min(count % 10, 5)]];
}
