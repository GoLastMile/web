import React from 'react';
import { render, screen } from '@testing-library/react';
import { MorphingText } from './morphing-text';

describe('MorphingText', () => {
  it('renders with provided texts', () => {
    const texts = ['Hello', 'World'];
    render(<MorphingText texts={texts} />);
    const container = screen.getByTestId('morphing-text-container');
    expect(container).toBeInTheDocument();
    texts.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    render(<MorphingText texts={['Test']} className="custom-class" />);
    const container = screen.getByTestId('morphing-text-container');
    expect(container).toHaveClass('custom-class');
  });

  it('renders SVG filters', () => {
    render(<MorphingText texts={['Test']} />);
    const svg = screen.getByTestId('svg-filters');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('id', 'filters');
  });
});
