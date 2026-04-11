import React from 'react';
import { render, screen } from '@testing-library/react';
import { AnimatedGrid } from './animated-grid';
import '@testing-library/jest-dom';

describe('AnimatedGrid', () => {
  it('renders without children', () => {
    render(<AnimatedGrid />);
    const svg = screen.getByRole('img', { hidden: true }); // SVG is considered img role
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('absolute inset-0 w-full h-full pointer-events-none');
  });

  it('renders with children', () => {
    render(
      <AnimatedGrid>
        <div data-testid="child">Child Content</div>
      </AnimatedGrid>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('applies className prop', () => {
    render(<AnimatedGrid className="custom-grid" />);
    const container = screen.getByRole('img', { hidden: true }).parentElement;
    expect(container).toHaveClass('relative custom-grid');
  });

  it('renders SVG with defs and rect elements', () => {
    render(<AnimatedGrid />);
    const svg = screen.getByRole('img', { hidden: true });
    expect(svg).toContainHTML('<defs>');
    expect(svg).toContainHTML('<linearGradient');
    expect(svg).toContainHTML('<rect');
    expect(svg).toContainHTML('<line');
  });

  it('has correct SVG attributes', () => {
    render(<AnimatedGrid />);
    const svg = screen.getByRole('img', { hidden: true });
    expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    expect(svg).toHaveStyle({ zIndex: '1' });
  });
});