import React from 'react';
import { render, screen } from '@testing-library/react';
import ArchitecturePage from './page';

describe('ArchitecturePage', () => {
  it('renders the page title and description', () => {
    render(<ArchitecturePage />);
    
    expect(screen.getByText('System Architecture')).toBeInTheDocument();
    expect(screen.getByText(/Understanding how LastMile works under the hood to scan, analyze, and remediate your codebase/)).toBeInTheDocument();
  });

  it('renders version badge and breadcrumb', () => {
    render(<ArchitecturePage />);
    
    expect(screen.getByText('v1.0.0')).toBeInTheDocument();
    expect(screen.getByText('Docs')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Architecture')).toBeInTheDocument();
  });

  it('renders the system overview diagram', () => {
    render(<ArchitecturePage />);
    
    expect(screen.getByText('System Overview')).toBeInTheDocument();
    expect(screen.getByText('YOUR CODEBASE')).toBeInTheDocument();
    expect(screen.getByText('LASTMILE CLI')).toBeInTheDocument();
    expect(screen.getByText('Scanner')).toBeInTheDocument();
    expect(screen.getByText('Analyzer')).toBeInTheDocument();
    expect(screen.getByText('Generator')).toBeInTheDocument();
    expect(screen.getByText('Report')).toBeInTheDocument();
    expect(screen.getByText('PRs')).toBeInTheDocument();
    expect(screen.getByText('Deploy')).toBeInTheDocument();
  });

  it('renders core components section', () => {
    render(<ArchitecturePage />);
    
    expect(screen.getByText('Core Components')).toBeInTheDocument();
    
    expect(screen.getByText('Scanner Engine')).toBeInTheDocument();
    expect(screen.getByText(/The scanner performs static analysis across your codebase/)).toBeInTheDocument();
    
    expect(screen.getByText('Analyzer Engine')).toBeInTheDocument();
    expect(screen.getByText(/The analyzer evaluates scanner findings against production readiness criteria/)).toBeInTheDocument();
    
    expect(screen.getByText('Generator Engine')).toBeInTheDocument();
    expect(screen.getByText(/The generator creates remediation artifacts based on analyzer findings/)).toBeInTheDocument();
  });

  it('renders bullet points for scanner engine', () => {
    render(<ArchitecturePage />);
    
    expect(screen.getByText('AST parsing for JavaScript, TypeScript, Python, Go')).toBeInTheDocument();
    expect(screen.getByText('Configuration file analysis (env, yaml, json)')).toBeInTheDocument();
    expect(screen.getByText('Dependency vulnerability checking')).toBeInTheDocument();
    expect(screen.getByText('Infrastructure-as-code validation')).toBeInTheDocument();
  });

  it('renders bullet points for analyzer engine', () => {
    render(<ArchitecturePage />);
    
    expect(screen.getByText('Gap categorization (security, performance, reliability, etc.)')).toBeInTheDocument();
    expect(screen.getByText('Severity scoring based on impact and likelihood')).toBeInTheDocument();
    expect(screen.getByText('Dependency graph analysis for cascading failures')).toBeInTheDocument();
  });

  it('renders bullet points for generator engine', () => {
    render(<ArchitecturePage />);
    
    expect(screen.getByText('Auto-generated configuration files')).toBeInTheDocument();
    expect(screen.getByText('Dockerfile generation for multiple runtimes')).toBeInTheDocument();
    expect(screen.getByText('CI/CD pipeline templates')).toBeInTheDocument();
  });
});
