import { render, screen } from '@testing-library/react';
import LoginPage from './page';
import '@testing-library/jest-dom';

// Mock next/link to avoid router issues in tests
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

describe('LoginPage', () => {
  it('renders the login form', () => {
    render(<LoginPage />);
    expect(screen.getByText('Welcome back')).toBeInTheDocument();
    expect(screen.getByText('Sign in to your account')).toBeInTheDocument();
  });

  it('renders email input field', () => {
    render(<LoginPage />);
    const emailInput = screen.getByLabelText('EMAIL');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('placeholder', 'you@example.com');
  });

  it('renders password input field', () => {
    render(<LoginPage />);
    const passwordInput = screen.getByLabelText('PASSWORD');
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(passwordInput).toHaveAttribute('placeholder', '••••••••');
  });

  it('renders sign in button', () => {
    render(<LoginPage />);
    const button = screen.getByRole('button', { name: /sign in/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('renders link to register page', () => {
    render(<LoginPage />);
    const link = screen.getByRole('link', { name: /sign up/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/register');
  });

  it('applies correct CSS classes', () => {
    render(<LoginPage />);
    const container = screen.getByText('Welcome back').closest('div');
    expect(container).toHaveClass('bg-surface-container');
    expect(container).toHaveClass('rounded-lg');
    expect(container).toHaveClass('border');
  });
});
