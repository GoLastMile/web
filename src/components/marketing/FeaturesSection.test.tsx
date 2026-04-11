import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturesSection from './FeaturesSection';

describe('FeaturesSection', () => {
  it('renders all features', () => {
    render(<FeaturesSection />);
    
    expect(screen.getByText('DIRECT_PROTOCOL')).toBeInTheDocument();
    expect(screen.getByText('SANDBOX_CONTROL')).toBeInTheDocument();
    expect(screen.getByText('DIFF_HISTORY')).toBeInTheDocument();
  });

  it('displays feature descriptions', () => {
    render(<FeaturesSection />);
    
    expect(screen.getByText(/Low-latency binary connection/)).toBeInTheDocument();
    expect(screen.getByText(/Strict IAM-based permissions/)).toBeInTheDocument();
    expect(screen.getByText(/Full audit trail for every AI suggested change/)).toBeInTheDocument();
  });

  it('renders feature icons', () => {
    render(<FeaturesSection />);
    
    const icons = screen.getAllByRole('img', { hidden: true });
    expect(icons).toHaveLength(3);
  });

  it('applies correct styling to feature cards', () => {
    render(<FeaturesSection />);
    
    const cards = screen.getAllByRole('article');
    expect(cards).toHaveLength(3);
    
    cards.forEach(card => {
      expect(card).toHaveClass('bg-surface-container');
      expect(card).toHaveClass('border');
    });
  });

  it('has responsive grid layout', () => {
    render(<FeaturesSection />);
    
    const section = screen.getByRole('region');
    expect(section).toHaveClass('grid');
    expect(section).toHaveClass('grid-cols-1');
    expect(section).toHaveClass('md:grid-cols-2');
    expect(section).toHaveClass('lg:grid-cols-3');
  });

  it('matches snapshot', () => {
    const { container } = render(<FeaturesSection />);
    expect(container).toMatchSnapshot();
  });
});