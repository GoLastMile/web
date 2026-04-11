import React from 'react';
import { render, screen } from '@testing-library/react';
import { AnimatedBeam } from './animated-beam';

// Mock refs
const mockContainerRef = { current: document.createElement('div') };
const mockFromRef = { current: document.createElement('div') };
const mockToRef = { current: document.createElement('div') };

// Mock getBoundingClientRect
const mockRect = { left: 10, top: 10, width: 100, height: 100 };
Object.defineProperties(mockContainerRef.current, {
  getBoundingClientRect: { value: () => ({ ...mockRect, width: 500, height: 500 }) },
});
Object.defineProperties(mockFromRef.current, {
  getBoundingClientRect: { value: () => mockRect },
});
Object.defineProperties(mockToRef.current, {
  getBoundingClientRect: { value: () => ({ ...mockRect, left: 200, top: 200 }) },
});

describe('AnimatedBeam', () => {
  it('renders without crashing', () => {
    render(
      <AnimatedBeam
        containerRef={mockContainerRef}
        fromRef={mockFromRef}
        toRef={mockToRef}
      />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <AnimatedBeam
        containerRef={mockContainerRef}
        fromRef={mockFromRef}
        toRef={mockToRef}
        className="custom-class"
      />
    );
    const svg = screen.getByRole('img');
    expect(svg).toHaveClass('custom-class');
  });

  it('uses default props', () => {
    render(
      <AnimatedBeam
        containerRef={mockContainerRef}
        fromRef={mockFromRef}
        toRef={mockToRef}
      />
    );
    const svg = screen.getByRole('img');
    expect(svg).toHaveAttribute('width', '0'); // Initial state before effect
  });

  it('handles reverse prop', () => {
    render(
      <AnimatedBeam
        containerRef={mockContainerRef}
        fromRef={mockFromRef}
        toRef={mockToRef}
        reverse={true}
      />
    );
    const svg = screen.getByRole('img');
    expect(svg).toBeInTheDocument();
  });
});