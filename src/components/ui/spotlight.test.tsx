import { render, screen, fireEvent } from '@testing-library/react';
import { Spotlight, SpotlightCard } from './spotlight';
import '@testing-library/jest-dom';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useMotionTemplate: () => '',
  useMotionValue: () => ({
    set: jest.fn(),
  }),
  useCallback: (fn: any) => fn,
}));

describe('Spotlight', () => {
  it('renders with children', () => {
    render(
      <Spotlight>
        <div>Child Content</div>
      </Spotlight>
    );
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Spotlight className="spotlight-class">
        <div>Test</div>
      </Spotlight>
    );
    const container = screen.getByText('Test').parentElement;
    expect(container).toHaveClass('spotlight-class');
  });

  it('handles mouse move event', () => {
    const handleMouseMove = jest.fn();
    render(
      <Spotlight>
        <div onMouseMove={handleMouseMove}>Move Here</div>
      </Spotlight>
    );
    fireEvent.mouseMove(screen.getByText('Move Here'));
    expect(handleMouseMove).toHaveBeenCalledTimes(1);
  });

  it('uses custom spotlight color', () => {
    render(
      <Spotlight spotlightColor="rgba(255,0,0,0.2)">
        <div>Colored</div>
      </Spotlight>
    );
    const container = screen.getByText('Colored').parentElement;
    expect(container).toBeInTheDocument();
  });
});

describe('SpotlightCard', () => {
  it('renders with children', () => {
    render(
      <SpotlightCard>
        <div>Card Content</div>
      </SpotlightCard>
    );
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <SpotlightCard className="card-class">
        <div>Test</div>
      </SpotlightCard>
    );
    const container = screen.getByText('Test').parentElement;
    expect(container).toHaveClass('card-class');
  });

  it('handles mouse events', () => {
    render(
      <SpotlightCard>
        <div>Hover Me</div>
      </SpotlightCard>
    );
    const card = screen.getByText('Hover Me').parentElement;
    fireEvent.mouseEnter(card!);
    fireEvent.mouseMove(card!);
    fireEvent.mouseLeave(card!);
    expect(card).toBeInTheDocument();
  });

  it('handles focus and blur events', () => {
    render(
      <SpotlightCard>
        <button>Focus Me</button>
      </SpotlightCard>
    );
    const button = screen.getByRole('button');
    fireEvent.focus(button);
    fireEvent.blur(button);
    expect(button).toBeInTheDocument();
  });

  it('uses custom spotlight color', () => {
    render(
      <SpotlightCard spotlightColor="rgba(0,255,0,0.3)">
        <div>Green</div>
      </SpotlightCard>
    );
    const container = screen.getByText('Green').parentElement;
    expect(container).toBeInTheDocument();
  });
});
