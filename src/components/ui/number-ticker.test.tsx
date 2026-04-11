import { render, screen, waitFor } from '@testing-library/react';
import { NumberTicker, StatCard } from './number-ticker';
import '@testing-library/jest-dom';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useInView: () => true,
  useSpring: () => ({
    set: jest.fn(),
  }),
  useTransform: () => ({
    on: jest.fn(() => jest.fn()),
  }),
  useMotionTemplate: () => '',
  useMotionValue: () => ({
    set: jest.fn(),
  }),
}));

describe('NumberTicker', () => {
  it('renders with default props', () => {
    render(<NumberTicker value={100} />);
    const element = screen.getByText('0');
    expect(element).toBeInTheDocument();
  });

  it('renders with prefix and suffix', () => {
    render(<NumberTicker value={50} prefix="$" suffix="k" />);
    const element = screen.getByText('$0k');
    expect(element).toBeInTheDocument();
  });

  it('handles decimal places', () => {
    render(<NumberTicker value={123.456} decimalPlaces={2} />);
    const element = screen.getByText('0.00');
    expect(element).toBeInTheDocument();
  });

  it('renders with direction down', () => {
    render(<NumberTicker value={200} direction="down" />);
    const element = screen.getByText('200');
    expect(element).toBeInTheDocument();
  });

  it('applies className', () => {
    render(<NumberTicker value={300} className="test-class" />);
    const element = screen.getByText('0');
    expect(element).toHaveClass('test-class');
  });
});

describe('StatCard', () => {
  it('renders with value and label', () => {
    render(<StatCard value={1000} label="Total Users" />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Total Users')).toBeInTheDocument();
  });

  it('renders with prefix and suffix', () => {
    render(<StatCard value={500} label="Revenue" prefix="$" suffix="M" />);
    expect(screen.getByText('$0M')).toBeInTheDocument();
  });

  it('applies custom classNames', () => {
    render(
      <StatCard
        value={200}
        label="Test"
        className="card-class"
        valueClassName="value-class"
        labelClassName="label-class"
      />
    );
    const card = screen.getByText('Test').closest('div');
    expect(card).toHaveClass('card-class');
    expect(screen.getByText('0')).toHaveClass('value-class');
    expect(screen.getByText('Test')).toHaveClass('label-class');
  });
});
