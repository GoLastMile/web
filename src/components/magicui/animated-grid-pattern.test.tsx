import React from 'react';
import { render, screen } from '@testing-library/react';
import { AnimatedGridPattern } from './animated-grid-pattern';

describe('AnimatedGridPattern', () => {
  it('renders without crashing', () => {
    render(<AnimatedGridPattern />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<AnimatedGridPattern className="custom-class" />);
    const svg = screen.getByRole('img');
    expect(svg).toHaveClass('custom-class');
  });

  it('uses default props', () => {
    render(<AnimatedGridPattern />);
    const svg = screen.getByRole('img');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders with custom dimensions and squares', () => {
    render(
      <AnimatedGridPattern
        width={50}
        height={50}
        numSquares={10}
        maxOpacity={0.8}
      />
    );
    const svg = screen.getByRole('img');
    expect(svg).toBeInTheDocument();
  });

  it('handles strokeDasharray prop', () => {
    render(<AnimatedGridPattern strokeDasharray={5} />);
    const svg = screen.getByRole('img');
    expect(svg).toBeInTheDocument();
  });
});