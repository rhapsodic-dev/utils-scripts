interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Converts a given value in seconds to an object containing hours, minutes, and seconds.
 *
 * @param {string | number} secondsValue - The value in seconds to be converted. It can be a string or a number.
 * @returns {{ hours: number, minutes: number, seconds: number }} - An object containing the hours, minutes, and seconds.
 *
 * @example
 * const time = getHoursMinutesSeconds(3661);
 * console.log(time); // Output: { hours: 1, minutes: 1, seconds: 1 }
 *
 * const time2 = getHoursMinutesSeconds('7200');
 * console.log(time2); // Output: { hours: 2, minutes: 0, seconds: 0 }
 */
export function getHoursMinutesSeconds(secondsValue: string | number): Time {
  const secs = Number.parseFloat(String(secondsValue));
  const hours: number = Math.floor(secs / (60 * 60));
  const minutes: number | string = Math.floor((secs - hours * 60 * 60) / 60);
  const seconds: number | string = Math.floor(secs - minutes * 60 - hours * 60 * 60);

  return { seconds, minutes, hours };
}

/**
 * Converts a given value in seconds to a formatted string in HH:MM:SS format.
 *
 * If the number of hours is zero, the output will be in MM:SS format.
 *
 * @param {string | number} secondsValue - The value in seconds to be converted. It can be a string or a number.
 * @returns {string} - A string representing the time in HH:MM:SS format.
 *
 * @example
 * console.log(toHHMMSS(3661)); // Output: "01:01:01"
 * console.log(toHHMMSS(61));   // Output: "00:01:01"
 * console.log(toHHMMSS(7200)); // Output: "02:00:00"
 * console.log(toHHMMSS(0));    // Output: "00:00"
 */
export function toHHMMSS(secondsValue: string | number): string {
  const { seconds, minutes, hours } = getHoursMinutesSeconds(secondsValue);
  const secondsString = `${seconds}`.padStart(2, '0');
  const minutesString = `${minutes}`.padStart(2, '0');
  return `${hours ? `${hours}:` : ''}${minutesString}:${secondsString}`.trim();
}
