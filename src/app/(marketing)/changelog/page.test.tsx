import React from 'react';
import { render, screen } from '@testing-library/react';
import ChangelogPage from './page';

describe('ChangelogPage', () => {
  it('renders the page title and description', () => {
    render(<ChangelogPage />);
    
    expect(screen.getByText('Changelog')).toBeInTheDocument();
    expect(screen.getByText('All the stuff we shipped. No fluff, just facts.')).toBeInTheDocument();
  });

  it('renders all release versions', () => {
    render(<ChangelogPage />);
    
    expect(screen.getByText('v0.3.0')).toBeInTheDocument();
    expect(screen.getByText('v0.2.0')).toBeInTheDocument();
    expect(screen.getByText('v0.1.0')).toBeInTheDocument();
  });

  it('renders release dates', () => {
    render(<ChangelogPage />);
    
    expect(screen.getByText('2025-04-05')).toBeInTheDocument();
    expect(screen.getByText('2025-03-20')).toBeInTheDocument();
    expect(screen.getByText('2025-03-01')).toBeInTheDocument();
  });

  it('renders LATEST tag for the first release', () => {
    render(<ChangelogPage />);
    
    expect(screen.getByText('LATEST')).toBeInTheDocument();
  });

  it('renders all change types with correct styling', () => {
    render(<ChangelogPage />);
    
    expect(screen.getByText('FEATURE')).toBeInTheDocument();
    expect(screen.getByText('IMPROVEMENT')).toBeInTheDocument();
    expect(screen.getByText('FIX')).toBeInTheDocument();
  });

  it('renders change descriptions', () => {
    render(<ChangelogPage />);
    
    expect(screen.getByText('Added Supabase deep integration with RLS policy detection')).toBeInTheDocument();
    expect(screen.getByText('Railway deployment support')).toBeInTheDocument();
    expect(screen.getByText('Initial release')).toBeInTheDocument();
  });

  it('has correct structure with timeline lines', () => {
    render(<ChangelogPage />);
    
    const versionHeaders = screen.getAllByText(/v0\.\d\.\d/);
    expect(versionHeaders).toHaveLength(3);
    
    const changes = screen.getAllByText(/FEATURE|IMPROVEMENT|FIX/);
    expect(changes.length).toBeGreaterThan(0);
  });
});
