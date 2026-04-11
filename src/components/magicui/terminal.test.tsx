import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AnimatedSpan, TypingAnimation } from './terminal';
import '@testing-library/jest-dom';

// Mock framer-motion
jest.mock('motion/react', () => ({
  motion: {
    article: ({ children, ...props }: any) => <article {...props}>{children}</article>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
    h4: ({ children, ...props }: any) => <h4 {...props}>{children}</h4>,
    h5: ({ children, ...props }: any) => <h5 {...props}>{children}</h5>,
    h6: ({ children, ...props }: any) => <h6 {...props}>{children}</h6>,
    li: ({ children, ...props }: any) => <li {...props}>{children}</li>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  useInView: jest.fn(() => true),
}));

// Mock cn utility
jest.mock('@/lib/utils', () => ({
  cn: (...args: any[]) => args.filter(Boolean).join(' '),
}));

describe('AnimatedSpan', () => {
  it('renders children correctly', () => {
    render(<AnimatedSpan>Test Content</AnimatedSpan>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies className prop', () => {
    render(<AnimatedSpan className="custom-class">Test</AnimatedSpan>);
    const element = screen.getByText('Test');
    expect(element).toHaveClass('custom-class');
  });

  it('handles delay prop without sequence', () => {
    render(<AnimatedSpan delay={100}>Test</AnimatedSpan>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });

  it('handles startOnView prop', () => {
    const { rerender } = render(<AnimatedSpan startOnView={true}>Test</AnimatedSpan>);
    expect(screen.getByText('Test')).toBeInTheDocument();
    rerender(<AnimatedSpan startOnView={false}>Test</AnimatedSpan>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

describe('TypingAnimation', () => {
  it('renders string children correctly', () => {
    render(<TypingAnimation>Hello World</TypingAnimation>);
    expect(screen.getByText('')).toBeInTheDocument(); // Initially empty
  });

  it('throws error for non-string children', () => {
    // Suppress console error for test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TypingAnimation>{123 as any}</TypingAnimation>)).toThrow('TypingAnimation: children must be a string.');
    consoleSpy.mockRestore();
  });

  it('applies className prop', () => {
    render(<TypingAnimation className="typing-class">Test</TypingAnimation>);
    const element = screen.getByText('');
    expect(element).toHaveClass('typing-class');
  });

  it('accepts as prop to change element type', () => {
    render(<TypingAnimation as="div">Test</TypingAnimation>);
    const element = screen.getByText('');
    expect(element.tagName).toBe('DIV');
  });

  it('handles duration and delay props', () => {
    render(<TypingAnimation duration={100} delay={200}>Test</TypingAnimation>);
    expect(screen.getByText('')).toBeInTheDocument();
  });

  it('handles startOnView prop', () => {
    render(<TypingAnimation startOnView={false}>Test</TypingAnimation>);
    expect(screen.getByText('')).toBeInTheDocument();
  });
});