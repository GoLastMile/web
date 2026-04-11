import React from 'react';
import { render, screen } from '@testing-library/react';
import { DotBackground, GridLinesBackground, GradientMeshBackground, Beam, HeroBackground } from './grid-background';
import '@testing-library/jest-dom';

describe('DotBackground', () => {
  it('renders without children', () => {
    render(<DotBackground />);
    const container = screen.getByRole('presentation'); // Div with background
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('relative');
  });

  it('renders with children', () => {
    render(
      <DotBackground>
        <div data-testid="child">Dot Child</div>
      </DotBackground>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Dot Child')).toBeInTheDocument();
  });

  it('applies className prop', () => {
    render(<DotBackground className="dot-class" />);
    const container = screen.getByRole('presentation');
    expect(container).toHaveClass('relative dot-class');
  });

  it('accepts dotColor, size props', () => {
    render(<DotBackground dotColor="rgba(255,0,0,0.5)" size={30} />);
    const container = screen.getByRole('presentation');
    expect(container).toBeInTheDocument();
  });
});

describe('GridLinesBackground', () => {
  it('renders without children', () => {
    render(<GridLinesBackground />);
    const container = screen.getByRole('presentation');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('relative');
  });

  it('renders with children', () => {
    render(
      <GridLinesBackground>
        <div data-testid="child">Grid Child</div>
      </GridLinesBackground>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Grid Child')).toBeInTheDocument();
  });

  it('applies className prop', () => {
    render(<GridLinesBackground className="grid-class" />);
    const container = screen.getByRole('presentation');
    expect(container).toHaveClass('relative grid-class');
  });

  it('accepts gridColor, size props', () => {
    render(<GridLinesBackground gridColor="rgba(0,0,255,0.1)" size={50} />);
    const container = screen.getByRole('presentation');
    expect(container).toBeInTheDocument();
  });
});

describe('GradientMeshBackground', () => {
  it('renders without children', () => {
    render(<GradientMeshBackground />);
    const container = screen.getByRole('presentation');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('relative overflow-hidden');
  });

  it('renders with children', () => {
    render(
      <GradientMeshBackground>
        <div data-testid="child">Gradient Child</div>
      </GradientMeshBackground>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Gradient Child')).toBeInTheDocument();
  });

  it('applies className prop', () => {
    render(<GradientMeshBackground className="gradient-class" />);
    const container = screen.getByRole('presentation');
    expect(container).toHaveClass('relative overflow-hidden gradient-class');
  });
});

describe('Beam', () => {
  it('renders with default props', () => {
    render(<Beam />);
    const beam = screen.getByRole('presentation');
    expect(beam).toBeInTheDocument();
    expect(beam).toHaveClass('absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50');
  });

  it('applies className prop', () => {
    render(<Beam className="beam-class" />);
    const beam = screen.getByRole('presentation');
    expect(beam).toHaveClass('beam-class');
  });

  it('accepts width and delay props', () => {
    render(<Beam width={300} delay={2} />);
    const beam = screen.getByRole('presentation');
    expect(beam).toBeInTheDocument();
  });
});

describe('HeroBackground', () => {
  it('renders without children', () => {
    render(<HeroBackground />);
    const container = screen.getByRole('presentation');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('relative overflow-hidden');
  });

  it('renders with children', () => {
    render(
      <HeroBackground>
        <div data-testid="child">Hero Child</div>
      </HeroBackground>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Hero Child')).toBeInTheDocument();
  });

  it('applies className prop', () => {
    render(<HeroBackground className="hero-class" />);
    const container = screen.getByRole('presentation');
    expect(container).toHaveClass('relative overflow-hidden hero-class');
  });
});