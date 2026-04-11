import React from 'react';
import { render, screen } from '@testing-library/react';
import { InteractiveGridPattern } from './interactive-grid-pattern';

describe('InteractiveGridPattern', () => {
  it('renders with default props', () => {
    render(<InteractiveGridPattern />);
    const svg = screen.getByRole('img', { hidden: true });
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '960'); // 40 * 24
    expect(svg).toHaveAttribute('height', '960'); // 40 * 24
    const rects = screen.getAllByRole('presentation');
    expect(rects).toHaveLength(576); // 24 * 24
  });

  it('renders with custom props', () => {
    render(
      <InteractiveGridPattern
        width={50}
        height={30}
        squares={[10, 5]}
        className="custom-class"
        squaresClassName="rect-class"
      />
    );
    const svg = screen.getByRole('img', { hidden: true });
    expect(svg).toHaveAttribute('width', '500'); // 50 * 10
    expect(svg).toHaveAttribute('height', '150'); // 30 * 5
    expect(svg).toHaveClass('custom-class');
    const rects = screen.getAllByRole('presentation');
    expect(rects).toHaveLength(50); // 10 * 5
    rects.forEach(rect => {
      expect(rect).toHaveClass('rect-class');
    });
  });

  it('applies correct positioning to squares', () => {
    render(<InteractiveGridPattern squares={[2, 2]} width={10} height={10} />);
    const rects = screen.getAllByRole('presentation');
    expect(rects[0]).toHaveAttribute('x', '0');
    expect(rects[0]).toHaveAttribute('y', '0');
    expect(rects[1]).toHaveAttribute('x', '10');
    expect(rects[1]).toHaveAttribute('y', '0');
    expect(rects[2]).toHaveAttribute('x', '0');
    expect(rects[2]).toHaveAttribute('y', '10');
    expect(rects[3]).toHaveAttribute('x', '10');
    expect(rects[3]).toHaveAttribute('y', '10');
  });
});
