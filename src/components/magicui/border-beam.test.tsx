import React from 'react';
import { render, screen } from '@testing-library/react';
import { BorderBeam } from './border-beam';

describe('BorderBeam', () => {
  it('renders without crashing', () => {
    render(<BorderBeam />);
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<BorderBeam className="custom-class" />);
    const element = screen.getByRole('presentation');
    expect(element).toHaveClass('custom-class');
  });

  it('uses default props', () => {
    render(<BorderBeam />);
    const element = screen.getByRole('presentation');
    expect(element).toHaveStyle({
      '--beam-duration': '12s',
      '--beam-delay': '0s',
      border: '1.5px solid transparent',
    });
  });

  it('applies custom duration, delay, and colors', () => {
    render(
      <BorderBeam
        duration={5}
        delay={1}
        colorFrom="#000"
        colorTo="#fff"
        borderWidth={2}
      />
    );
    const element = screen.getByRole('presentation');
    expect(element).toHaveStyle({
      '--beam-duration': '5s',
      '--beam-delay': '1s',
      border: '2px solid transparent',
    });
    expect(element.style.background).toContain('#000');
    expect(element.style.background).toContain('#fff');
  });
});