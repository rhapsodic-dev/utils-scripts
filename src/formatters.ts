/**
 * Formats a number by adding a specified separator for thousands and a specified decimal separator.
 *
 * @param {number} number - The number to be formatted.
 * @param {string} [separator=' '] - The string to use as a thousands separator (default is a thin space).
 * @param {string} [decimalSeparator='.'] - The string to use as a decimal separator (default is a dot).
 * @returns {string} - The formatted number as a string.
 *
 * @example
 * console.log(formatNumber(1234567.89)); // Output: "1 234 567.89"
 * console.log(formatNumber(1234567.89, ',')); // Output: "1,234,567.89"
 * console.log(formatNumber(1234567.89, ' ', ',')); // Output: "1 234 567,89"
 */
export function formatNumber(number: number, separator: string = ' ', decimalSeparator: string = '.'): string {
  return number
    .toString()
    .replaceAll(/\B(?=(\d{3})+(?!\d))/g, separator)
    .replaceAll('.', decimalSeparator);
}

// https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript?tab=scoredesc#tab-top
/**
 * Converts a size in bytes to a human-readable format (e.g., KB, MB, GB).
 *
 * @param {number} bytes - The size in bytes to be converted.
 * @param {number} [decimals=2] - The number of decimal places to include in the output (default is 2).
 * @returns {string} - The formatted size as a string, e.g., "1.23 MB".
 *
 * @example
 * console.log(formatBytes(1024)); // Output: "1 KB"
 * console.log(formatBytes(123456789)); // Output: "117.74 MB"
 * console.log(formatBytes(0)); // Output: "0 Bytes"
 * console.log(formatBytes(2048, 1)); // Output: "2.0 KB"
 */
export function formatBytes(bytes: number, decimals: number = 2): string {
  if (!+bytes || bytes < 0) return '0 Bytes';

  const k = 1024;
  const dm = Math.max(decimals, 0);
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}
