import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimatedTerminal from './AnimatedTerminal';

// Mock timers
jest.useFakeTimers();

describe('AnimatedTerminal', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders the terminal container', () => {
    render(<AnimatedTerminal />);
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByText('$ lastmile analyze')).toBeInTheDocument();
  });

  it('starts animation on mount', () => {
    render(<AnimatedTerminal />);
    expect(screen.getByRole('region')).toHaveClass('animate-pulse');
  });

  it('displays initial lines', () => {
    render(<AnimatedTerminal />);
    expect(screen.getByText('$ lastmile analyze')).toBeInTheDocument();
  });

  it('progresses through animation steps', async () => {
    render(<AnimatedTerminal />);
    
    // Fast-forward timers to show multiple lines
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    await waitFor(() => {
      expect(screen.getByText('[1/5] Scanning project structure')).toBeInTheDocument();
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    await waitFor(() => {
      expect(screen.getByText('42 files analyzed in 2.3s | 8 issues found, 6 auto-fixable')).toBeInTheDocument();
    });
  });

  it('shows score animation', async () => {
    render(<AnimatedTerminal />);
    
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    await waitFor(() => {
      expect(screen.getByText('SCORE_ANIMATION')).toBeInTheDocument();
    });
  });

  it('handles hover interaction', async () => {
    const user = userEvent.setup({ delay: null });
    render(<AnimatedTerminal />);
    
    const terminal = screen.getByRole('region');
    await user.hover(terminal);
    
    expect(terminal).toHaveClass('hover:border-primary/50');
  });

  it('handles click to restart animation', async () => {
    const user = userEvent.setup({ delay: null });
    render(<AnimatedTerminal />);
    
    const terminal = screen.getByRole('region');
    await user.click(terminal);
    
    // After click, animation should restart
    act(() => {
      jest.advanceTimersByTime(100);
    });

    await waitFor(() => {
      expect(screen.getByText('$ lastmile analyze')).toBeInTheDocument();
    });
  });

  it('matches snapshot', () => {
    const { container } = render(<AnimatedTerminal />);
    expect(container).toMatchSnapshot();
  });
});