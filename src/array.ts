/**
 * Splits an array into smaller arrays of a specified size.
 *
 * @template T
 * @param {T[]} arr - The input array to be split into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @returns {T[][]} - An array of chunks, each of which has a size of at most chunkSize.
 * @throws {Error} - If chunkSize is equal to 0.
 *
 * @example
 * const array = [1, 2, 3, 4, 5];
 * const chunked = chunkArray(array, 2);
 * console.log(chunked); // [[1, 2], [3, 4], [5]]
 */
export function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  if (chunkSize === 0) {
    throw new Error('Chunk size must be greater than 0');
  }

  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

// https://stackoverflow.com/a/2450976
/**
 * Shuffles the elements of an array in place and returns a new shuffled array.
 *
 * @template T
 * @param {T[]} array - The input array to be shuffled.
 * @returns {T[]} - A new array with the elements shuffled in random order.
 *
 * @example
 * const array = [1, 2, 3, 4, 5];
 * const shuffledArray = shuffleArray(array);
 * console.log(shuffledArray); // Output could be [3, 1, 4, 5, 2] or any other random order
 */
export function shuffleArray<T>(array: T[]) {
  let currentIndex = array.length;
  let randomIndex;
  const randomArray = [...array];

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [randomArray[currentIndex], randomArray[randomIndex]] = [
      randomArray[randomIndex], randomArray[currentIndex],
    ];
  }

  return randomArray;
}

/**
 * Calculates the sum of all elements in a numeric array.
 *
 * @param {number[]} array - The input array of numbers to be summed.
 * @returns {number} - The sum of the elements in the array. Returns 0 if the input is not a valid array or if it is empty.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const total = sumArray(numbers);
 * console.log(total); // Output: 15
 *
 * @example
 * const emptyArray = [];
 * const totalEmpty = sumArray(emptyArray);
 * console.log(totalEmpty); // Output: 0
 */
export function sumArray(array: number[]): number {
  if (!Array.isArray(array) || !array.length) {
    return 0;
  }
  return array.reduce((previous, current) => current + previous);
}
