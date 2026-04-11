import React from 'react';
import { render, screen } from '@testing-library/react';
import { OrbitingCircles } from './orbiting-circles';

describe('OrbitingCircles', () => {
  it('renders with default props', () => {
    render(<OrbitingCircles />);
    const container = screen.getByTestId('orbiting-circles-container');
    expect(container).toBeInTheDocument();
    const svg = screen.getByTestId('orbit-path');
    expect(svg).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <OrbitingCircles>
        <div>Child 1</div>
        <div>Child 2</div>
      </OrbitingCircles>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    const children = screen.getAllByTestId('orbit-child');
    expect(children).toHaveLength(2);
  });

  it('applies custom props', () => {
    render(
      <OrbitingCircles
        className="custom-class"
        reverse={true}
        duration={30}
        radius={200}
        path={false}
        iconSize={40}
        speed={2}
      />
    );
    const container = screen.getByTestId('orbiting-circles-container');
    expect(container).toHaveClass('custom-class');
    expect(container).toHaveStyle('animation-direction: reverse');
    const svg = screen.queryByTestId('orbit-path');
    expect(svg).not.toBeInTheDocument();
  });

  it('calculates duration based on speed', () => {
    render(<OrbitingCircles duration={20} speed={0.5} />);
    const container = screen.getByTestId('orbiting-circles-container');
    expect(container).toHaveStyle('--duration: 40'); // 20 / 0.5
  });
});
