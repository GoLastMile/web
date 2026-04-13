import React from 'react';
import { render, screen } from '@testing-library/react';
import APIKeysPage from './page';

describe('APIKeysPage', () => {
  it('renders the page title and description', () => {
    render(<APIKeysPage />);
    
    expect(screen.getByText('API Keys & Authentication')).toBeInTheDocument();
    expect(screen.getByText(/Secure your LastMile deployments with proper authentication and API key management/)).toBeInTheDocument();
  });

  it('renders version badge and breadcrumb', () => {
    render(<APIKeysPage />);
    
    expect(screen.getByText('v1.0.0')).toBeInTheDocument();
    expect(screen.getByText('Docs')).toBeInTheDocument();
    expect(screen.getByText('Deployment')).toBeInTheDocument();
    expect(screen.getByText('API Keys & Auth')).toBeInTheDocument();
  });

  it('renders all key types with correct labels', () => {
    render(<APIKeysPage />);
    
    expect(screen.getByText('Types of Keys')).toBeInTheDocument();
    
    expect(screen.getByText('Personal Access Tokens')).toBeInTheDocument();
    expect(screen.getByText('USER')).toBeInTheDocument();
    expect(screen.getByText(/Used for local development and CLI authentication/)).toBeInTheDocument();
    
    expect(screen.getByText('Service Tokens')).toBeInTheDocument();
    expect(screen.getByText('SERVICE')).toBeInTheDocument();
    expect(screen.getByText(/Used for CI/CD pipelines and automated systems/)).toBeInTheDocument();
    
    expect(screen.getByText('Deploy Keys')).toBeInTheDocument();
    expect(screen.getByText('DEPLOY')).toBeInTheDocument();
    expect(screen.getByText(/Read-only keys for pulling configurations in production environments/)).toBeInTheDocument();
  });

  it('renders scope information for each key type', () => {
    render(<APIKeysPage />);
    
    expect(screen.getAllByText(/Scope:/).length).toBe(3);
    expect(screen.getByText('Full access to your projects')).toBeInTheDocument();
    expect(screen.getByText('Configurable per-project access')).toBeInTheDocument();
    expect(screen.getByText('Read-only configuration access')).toBeInTheDocument();
  });

  it('renders the creating keys section', () => {
    render(<APIKeysPage />);
    
    expect(screen.getByText('Creating API Keys')).toBeInTheDocument();
    expect(screen.getByText('Via CLI')).toBeInTheDocument();
    expect(screen.getByText('Via Dashboard')).toBeInTheDocument();
  });

  it('renders code blocks for CLI commands', () => {
    render(<APIKeysPage />);
    
    expect(screen.getByText(/lastmile auth create-token/)).toBeInTheDocument();
    expect(screen.getByText(/lastmile auth create-service-token/)).toBeInTheDocument();
  });
});
