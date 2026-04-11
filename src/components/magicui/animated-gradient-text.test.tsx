import React from 'react';
import { render, screen } from '@testing-library/react';
import { AnimatedGradientText } from './animated-gradient-text';

describe('AnimatedGradientText', () => {
  it('renders children correctly', () => {
    render(<AnimatedGradientText>Test Text</AnimatedGradientText>);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <AnimatedGradientText className="custom-class">
        Test
      </AnimatedGradientText>
    );
    const element = screen.getByText('Test');
    expect(element).toHaveClass('custom-class');
  });

  it('uses default props', () => {
    render(<AnimatedGradientText>Test</AnimatedGradientText>);
    const element = screen.getByText('Test');
    expect(element).toHaveStyle({
      backgroundSize: '300% 100%', // speed=1
      backgroundImage: 'linear-gradient(to right, #6bfb9a, #ffc664, #6bfb9a)',
    });
  });

  it('applies custom speed and colors', () => {
    render(
      <AnimatedGradientText speed={2} colorFrom="#000" colorTo="#fff">
        Test
      </AnimatedGradientText>
    );
    const element = screen.getByText('Test');
    expect(element).toHaveStyle({
      backgroundSize: '600% 100%', // speed=2
      backgroundImage: 'linear-gradient(to right, #000, #fff, #000)',
    });
  });

  it('passes additional props to span', () => {
    render(
      <AnimatedGradientText data-testid="gradient" title="tooltip">
        Test
      </AnimatedGradientText>
    );
    const element = screen.getByTestId('gradient');
    expect(element).toHaveAttribute('title', 'tooltip');
  });
});