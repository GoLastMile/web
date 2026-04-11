import { render, screen } from '@testing-library/react';
import RegisterPage from './page';
import '@testing-library/jest-dom';

// Mock next/link to avoid router issues in tests
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

describe('RegisterPage', () => {
  it('renders the registration form', () => {
    render(<RegisterPage />);
    expect(screen.getByText('Create an account')).toBeInTheDocument();
    expect(screen.getByText('Get started with LastMile')).toBeInTheDocument();
  });

  it('renders name input field', () => {
    render(<RegisterPage />);
    const nameInput = screen.getByLabelText('NAME');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute('type', 'text');
    expect(nameInput).toHaveAttribute('placeholder', 'Your name');
  });

  it('renders email input field', () => {
    render(<RegisterPage />);
    const emailInput = screen.getByLabelText('EMAIL');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('placeholder', 'you@example.com');
  });

  it('renders password input field', () => {
    render(<RegisterPage />);
    const passwordInput = screen.getByLabelText('PASSWORD');
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(passwordInput).toHaveAttribute('placeholder', '••••••••');
  });

  it('renders create account button', () => {
    render(<RegisterPage />);
    const button = screen.getByRole('button', { name: /create account/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('renders link to login page', () => {
    render(<RegisterPage />);
    const link = screen.getByRole('link', { name: /sign in/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/login');
  });

  it('applies correct CSS classes', () => {
    render(<RegisterPage />);
    const container = screen.getByText('Create an account').closest('div');
    expect(container).toHaveClass('bg-surface-container');
    expect(container).toHaveClass('rounded-lg');
    expect(container).toHaveClass('border');
  });
});
