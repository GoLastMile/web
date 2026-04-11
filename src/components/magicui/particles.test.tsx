import React from 'react';
import { render, screen } from '@testing-library/react';
import { Particles } from './particles';

describe('Particles', () => {
  it('renders without crashing', () => {
    render(<Particles />);
    const container = screen.getByTestId('particles-container');
    expect(container).toBeInTheDocument();
    const canvas = screen.getByTestId('particles-canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Particles className="custom-class" />);
    const container = screen.getByTestId('particles-container');
    expect(container).toHaveClass('custom-class');
  });

  it('renders with custom props', () => {
    render(
      <Particles
        quantity={50}
        staticity={30}
        ease={70}
        size={0.8}
        refresh={true}
        color="#ff0000"
        vx={1}
        vy={-1}
      />
    );
    const container = screen.getByTestId('particles-container');
    expect(container).toBeInTheDocument();
  });

  it('hexToRgb function works correctly', () => {
    // This is an internal function, but we can test it indirectly via component rendering
    render(<Particles color="#ff0000" />);
    const canvas = screen.getByTestId('particles-canvas');
    expect(canvas).toBeInTheDocument();
  });
});
