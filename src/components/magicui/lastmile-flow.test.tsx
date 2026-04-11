import React from 'react';
import { render, screen } from '@testing-library/react';
import { LastMileFlowHero } from './lastmile-flow';

describe('LastMileFlowHero', () => {
  it('renders without crashing', () => {
    render(<LastMileFlowHero />);
    const container = screen.getByTestId('lastmile-flow-container');
    expect(container).toBeInTheDocument();
  });

  it('renders all flow nodes', () => {
    render(<LastMileFlowHero />);
    const nodes = screen.getAllByTestId(/flow-node/);
    expect(nodes).toHaveLength(4); // input, analyze, fix, deploy
  });

  it('renders gap categories', () => {
    render(<LastMileFlowHero />);
    const categories = ['SEC', 'TEST', 'OBS', 'CI/CD', 'DOC', 'ERR', 'CFG', 'PERF'];
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    render(<LastMileFlowHero className="test-class" />);
    const container = screen.getByTestId('lastmile-flow-container');
    expect(container).toHaveClass('test-class');
  });
});
