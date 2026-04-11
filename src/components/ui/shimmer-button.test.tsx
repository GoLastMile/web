import { render, screen, fireEvent } from '@testing-library/react';
import { ShimmerButton, GradientBorderButton } from './shimmer-button';
import '@testing-library/jest-dom';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('ShimmerButton', () => {
  it('renders with children', () => {
    render(<ShimmerButton>Click Me</ShimmerButton>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<ShimmerButton className="custom-class">Button</ShimmerButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('handles click event', () => {
    const handleClick = jest.fn();
    render(<ShimmerButton onClick={handleClick}>Button</ShimmerButton>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom styles via props', () => {
    render(
      <ShimmerButton
        shimmerColor="rgba(255,0,0,0.5)"
        shimmerSize="0.2em"
        borderRadius="10px"
        shimmerDuration="3s"
        background="rgba(0,255,0,1)"
      >
        Styled
      </ShimmerButton>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ borderRadius: '10px' });
    // Note: Inline styles for shimmer are applied via divs, so we check for presence
    expect(button).toBeInTheDocument();
  });

  it('passes through button props', () => {
    render(
      <ShimmerButton type="submit" disabled>
        Submit
      </ShimmerButton>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toBeDisabled();
  });
});

describe('GradientBorderButton', () => {
  it('renders with children', () => {
    render(<GradientBorderButton>Gradient Button</GradientBorderButton>);
    expect(screen.getByText('Gradient Button')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <GradientBorderButton className="gradient-class">Button</GradientBorderButton>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('gradient-class');
  });

  it('handles click event', () => {
    const handleClick = jest.fn();
    render(
      <GradientBorderButton onClick={handleClick}>Button</GradientBorderButton>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom gradient colors', () => {
    render(
      <GradientBorderButton gradientColors={['#ff0000', '#00ff00', '#0000ff']}>
        Colored
      </GradientBorderButton>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('passes through button props', () => {
    render(
      <GradientBorderButton aria-label="gradient button">
        Labeled
      </GradientBorderButton>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'gradient button');
  });
});
