import React from 'react';
import { render, screen } from '@testing-library/react';
import { BlurFade } from './blur-fade';
import '@testing-library/jest-dom';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useInView: jest.fn(() => true),
}));

describe('BlurFade', () => {
  it('renders children correctly', () => {
    render(<BlurFade>Test Content</BlurFade>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies className prop', () => {
    render(<BlurFade className="fade-class">Test</BlurFade>);
    const element = screen.getByText('Test');
    expect(element).toHaveClass('fade-class');
  });

  it('uses default props when not provided', () => {
    render(<BlurFade>Test</BlurFade>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });

  it('handles custom variant prop', () => {
    const customVariant = {
      hidden: { y: 10 },
      visible: { y: 0 },
    };
    render(<BlurFade variant={customVariant}>Test</BlurFade>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('handles direction prop', () => {
    const { rerender } = render(<BlurFade direction="up">Test</BlurFade>);
    expect(screen.getByText('Test')).toBeInTheDocument();
    rerender(<BlurFade direction="down">Test</BlurFade>);
    expect(screen.getByText('Test')).toBeInTheDocument();
    rerender(<BlurFade direction="left">Test</BlurFade>);
    expect(screen.getByText('Test')).toBeInTheDocument();
    rerender(<BlurFade direction="right">Test</BlurFade>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('handles custom duration, delay, offset, and blur', () => {
    render(
      <BlurFade duration={0.5} delay={0.1} offset={10} blur="4px">
        Test
      </BlurFade>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('handles inViewOptions prop', () => {
    const options = { once: false, margin: '0px' };
    render(<BlurFade inViewOptions={options}>Test</BlurFade>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});