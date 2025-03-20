import { describe, expect, it } from 'vitest';

import { getHoursMinutesSeconds } from '../../src';

describe('getHoursMinutesSeconds', () => {
  it('should convert seconds to hours, minutes, and seconds correctly', () => {
    expect(getHoursMinutesSeconds(3661)).toEqual({ hours: 1, minutes: 1, seconds: 1 });
    expect(getHoursMinutesSeconds(61)).toEqual({ hours: 0, minutes: 1, seconds: 1 });
    expect(getHoursMinutesSeconds(59)).toEqual({ hours: 0, minutes: 0, seconds: 59 });
    expect(getHoursMinutesSeconds(0)).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    expect(getHoursMinutesSeconds(86_400)).toEqual({ hours: 24, minutes: 0, seconds: 0 });
  });

  it('should handle non-integer values', () => {
    expect(getHoursMinutesSeconds(3661.5)).toEqual({ hours: 1, minutes: 1, seconds: 1 });
    expect(getHoursMinutesSeconds('3661')).toEqual({ hours: 1, minutes: 1, seconds: 1 });
  });
});
