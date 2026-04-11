import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('formats a date string correctly', () => {
    const date = '2024-01-01';
    const result = formatDate(date);
    expect(result).toBe('January 1, 2024'); // Example format from actual formatDate function
  });

  it('handles invalid date', () => {
    const date = 'invalid-date';
    const result = formatDate(date);
    expect(result).toBe('Invalid Date');
  });

  it('formats with custom locale', () => {
    const date = '2024-01-01';
    const result = formatDate(date, 'en-GB');
    expect(result).toBe('1 January 2024');
  });
});