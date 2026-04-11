import { cn, formatDate, formatNumber, truncate, sleep } from './utils';

describe('cn', () => {
  it('merges class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
    expect(cn('class1', { class2: true })).toBe('class1 class2');
    expect(cn('class1', ['class2', 'class3'])).toBe('class1 class2 class3');
  });

  it('handles Tailwind conflicts', () => {
    expect(cn('p-4', 'p-6')).toBe('p-6');
  });
});

describe('formatDate', () => {
  it('formats Date object', () => {
    const date = new Date('2024-01-01');
    expect(formatDate(date)).toBe('Jan 1, 2024');
  });

  it('formats date string', () => {
    expect(formatDate('2024-12-25')).toBe('Dec 25, 2024');
  });

  it('handles invalid date', () => {
    expect(formatDate('invalid')).toBe('Invalid Date');
  });
});

describe('formatNumber', () => {
  it('formats numbers with commas', () => {
    expect(formatNumber(1000)).toBe('1,000');
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('handles zero and negative numbers', () => {
    expect(formatNumber(0)).toBe('0');
    expect(formatNumber(-5000)).toBe('-5,000');
  });
});

describe('truncate', () => {
  it('truncates long strings', () => {
    expect(truncate('Hello World', 5)).toBe('He...');
    expect(truncate('Testing', 10)).toBe('Testing');
  });

  it('handles edge cases', () => {
    expect(truncate('', 5)).toBe('');
    expect(truncate('Hi', 2)).toBe('Hi');
  });
});

describe('sleep', () => {
  it('resolves after delay', async () => {
    const start = Date.now();
    await sleep(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(90);
  });
});