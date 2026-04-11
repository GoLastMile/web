import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card3D, HoverCard } from './card-3d';
import '@testing-library/jest-dom';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useMotionValue: jest.fn(() => ({ get: () => 0, set: jest.fn() })),
  useSpring: jest.fn(() => ({ get: () => 0, set: jest.fn() })),
  useTransform: jest.fn(() => ({ get: () => 0, set: jest.fn() })),
}));

describe('Card3D', () => {
  it('renders children correctly', () => {
    render(
      <Card3D>
        <div data-testid="child">Card Content</div>
      </Card3D>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies className and containerClassName props', () => {
    render(
      <Card3D className="card-class" containerClassName="container-class">
        Test
      </Card3D>
    );
    const container = screen.getByText('Test').closest('.perspective-1000');
    expect(container).toHaveClass('container-class');
    const card = screen.getByText('Test');
    expect(card).toHaveClass('card-class');
  });

  it('handles hover interactions', () => {
    render(<Card3D>Test</Card3D>);
    const card = screen.getByText('Test');
    fireEvent.mouseEnter(card);
    fireEvent.mouseMove(card, { clientX: 100, clientY: 100 });
    fireEvent.mouseLeave(card);
    expect(card).toBeInTheDocument();
  });

  it('accepts custom props like rotateIntensity, glareOpacity, borderGlow, glowColor', () => {
    render(
      <Card3D
        rotateIntensity={20}
        glareOpacity={0.5}
        borderGlow={false}
        glowColor="rgba(255,0,0,0.5)"
      >
        Test
      </Card3D>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

describe('HoverCard', () => {
  it('renders children correctly', () => {
    render(
      <HoverCard>
        <div data-testid="child">Hover Content</div>
      </HoverCard>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Hover Content')).toBeInTheDocument();
  });

  it('applies className prop', () => {
    render(<HoverCard className="hover-class">Test</HoverCard>);
    const element = screen.getByText('Test');
    expect(element).toHaveClass('hover-class');
  });

  it('accepts scale prop', () => {
    render(<HoverCard scale={1.1}>Test</HoverCard>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});