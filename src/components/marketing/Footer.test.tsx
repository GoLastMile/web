import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from './Footer';

// Mock next/link is already handled in jest.setup.js

describe('Footer', () => {
  it('renders footer sections', () => {
    render(<Footer />);
    
    expect(screen.getByText('PRODUCT')).toBeInTheDocument();
    expect(screen.getByText('RESOURCES')).toBeInTheDocument();
    expect(screen.getByText('COMMUNITY')).toBeInTheDocument();
    expect(screen.getByText('LEGAL')).toBeInTheDocument();
  });

  it('displays all footer links', () => {
    render(<Footer />);
    
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Documentation')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('renders brand information', () => {
    render(<Footer />);
    
    expect(screen.getByText('LASTMILE')).toBeInTheDocument();
    expect(screen.getByText(/Built by engineers who got tired of the last 20%/)).toBeInTheDocument();
    expect(screen.getByText('io@lastmile.sh')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    
    const githubLink = screen.getByLabelText('GitHub');
    const discordLink = screen.getByLabelText('Discord');
    
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/lastmile-ai/lastmile');
    expect(discordLink).toBeInTheDocument();
    expect(discordLink).toHaveAttribute('href', 'https://discord.gg/lastmile');
  });

  it('has correct link attributes for external links', () => {
    render(<Footer />);
    
    const externalLinks = screen.getAllByRole('link', { name: /GitHub|Discord|Twitter \/ X/ });
    externalLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('has correct link attributes for internal links', () => {
    render(<Footer />);
    
    const internalLinks = screen.getAllByRole('link', { name: /Features|Pricing|Documentation|Privacy Policy/ });
    internalLinks.forEach(link => {
      expect(link).not.toHaveAttribute('target');
      expect(link).not.toHaveAttribute('rel');
    });
  });

  it('matches snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});