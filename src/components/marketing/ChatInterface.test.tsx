import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChatInterface from './ChatInterface';

describe('ChatInterface', () => {
  it('renders the chat interface', () => {
    render(<ChatInterface />);
    
    expect(screen.getByText('CLAUDE-CODE-ENGINE_V4')).toBeInTheDocument();
    expect(screen.getByText('AI Assistant')).toBeInTheDocument();
    expect(screen.getByText('Is this project ready?')).toBeInTheDocument();
    expect(screen.getByText('Analysis complete for')).toBeInTheDocument();
  });

  it('displays terminal header with dots', () => {
    render(<ChatInterface />);
    
    const dots = screen.getAllByRole('presentation');
    expect(dots).toHaveLength(3);
  });

  it('shows user message with timestamp', () => {
    render(<ChatInterface />);
    
    expect(screen.getByText('Is this project ready?')).toBeInTheDocument();
    expect(screen.getByText('14:02:11_UTC')).toBeInTheDocument();
  });

  it('shows AI response with score gauge', () => {
    render(<ChatInterface />);
    
    expect(screen.getByText('AI Assistant')).toBeInTheDocument();
    expect(screen.getByText('main_branch/dist-prod')).toBeInTheDocument();
    expect(screen.getByText('34')).toBeInTheDocument(); // Initial score
    expect(screen.getByText('89')).toBeInTheDocument(); // Target score
  });

  it('renders input field', () => {
    render(<ChatInterface />);
    
    const input = screen.getByPlaceholderText('Type your question...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('updates input value on user typing', async () => {
    const user = userEvent.setup();
    render(<ChatInterface />);
    
    const input = screen.getByPlaceholderText('Type your question...');
    await user.type(input, 'What is the score?');
    
    expect(input).toHaveValue('What is the score?');
  });

  it('submits form on enter key', async () => {
    const user = userEvent.setup();
    render(<ChatInterface />);
    
    const input = screen.getByPlaceholderText('Type your question...');
    await user.type(input, 'Test question{enter}');
    
    // Input should clear after submit
    expect(input).toHaveValue('');
  });

  it('matches snapshot', () => {
    const { container } = render(<ChatInterface />);
    expect(container).toMatchSnapshot();
  });
});