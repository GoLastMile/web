import React from 'react';
import { render, screen } from '@testing-library/react';
import CloudPage from './page';

// Mock the BlurFade component
jest.mock('@/components/ui/blur-fade', () => ({
  BlurFade: ({ children, delay }: { children: React.ReactNode; delay?: number }) => <div data-testid="blur-fade" data-delay={delay}>{children}</div>,
}));

// Mock the HoverCard component
jest.mock('@/components/ui/card-3d', () => ({
  HoverCard: ({ children, className }: { children: React.ReactNode; className?: string }) => <div data-testid="hover-card" className={className}>{children}</div>,
}));

// Mock the LastMileTerminalDemo component
jest.mock('@/components/marketing/LastMileTerminalDemo', () => ({
  __esModule: true,
  default: ({ variant }: { variant: string }) => <div data-testid="terminal-demo" data-variant={variant}>Terminal Demo</div>,
}));

// Mock the icons
jest.mock('@icons-pack/react-simple-icons', () => ({
  SiNextdotjs: () => <div data-testid="icon-next" />,
  SiRemix: () => <div data-testid="icon-remix" />,
  SiNuxt: () => <div data-testid="icon-nuxt" />,
  SiSvelte: () => <div data-testid="icon-svelte" />,
  SiAstro: () => <div data-testid="icon-astro" />,
  SiReact: () => <div data-testid="icon-react" />,
  SiVuedotjs: () => <div data-testid="icon-vue" />,
  SiNestjs: () => <div data-testid="icon-nest" />,
  SiExpress: () => <div data-testid="icon-express" />,
  SiFastify: () => <div data-testid="icon-fastify" />,
  SiHono: () => <div data-testid="icon-hono" />,
  SiFastapi: () => <div data-testid="icon-fastapi" />,
  SiDjango: () => <div data-testid="icon-django" />,
  SiFlask: () => <div data-testid="icon-flask" />,
  SiGo: () => <div data-testid="icon-go" />,
  SiPostgresql: () => <div data-testid="icon-postgres" />,
  SiRedis: () => <div data-testid="icon-redis" />,
}));

describe('CloudPage', () => {
  it('renders the hero section with title and description', () => {
    render(<CloudPage />);
    
    expect(screen.getByText('LASTMILE_CLOUD')).toBeInTheDocument();
    expect(screen.getByText(/One command to/)).toBeInTheDocument();
    expect(screen.getByText(/production/)).toBeInTheDocument();
    expect(screen.getByText(/Database included. SSL automatic. CDN global. Zero DevOps required. Just/)).toBeInTheDocument();
    expect(screen.getByText(/lastmile ship/)).toBeInTheDocument();
  });

  it('renders the terminal demo section', () => {
    render(<CloudPage />);
    
    expect(screen.getByTestId('terminal-demo')).toBeInTheDocument();
    expect(screen.getByTestId('terminal-demo')).toHaveAttribute('data-variant', 'ship');
  });

  it('renders the features section with included items', () => {
    render(<CloudPage />);
    
    expect(screen.getByText("What's Included")).toBeInTheDocument();
    expect(screen.getByText('FEATURES')).toBeInTheDocument();
    
    expect(screen.getByText('DATABASE')).toBeInTheDocument();
    expect(screen.getByText('Auto-Provisioned')).toBeInTheDocument();
    expect(screen.getByText(/Database created automatically on deploy/)).toBeInTheDocument();
    
    expect(screen.getByText('COMPUTE')).toBeInTheDocument();
    expect(screen.getByText('Edge Runtime')).toBeInTheDocument();
  });

  it('renders BlurFade components with delays', () => {
    render(<CloudPage />);
    
    const blurFades = screen.getAllByTestId('blur-fade');
    expect(blurFades.length).toBeGreaterThan(0);
    expect(blurFades[0]).toHaveAttribute('data-delay', '0');
  });

  it('renders HoverCard components for features', () => {
    render(<CloudPage />);
    
    const hoverCards = screen.getAllByTestId('hover-card');
    expect(hoverCards.length).toBeGreaterThan(0);
  });

  it('renders icons for supported technologies', () => {
    render(<CloudPage />);
    
    expect(screen.getByTestId('icon-next')).toBeInTheDocument();
    expect(screen.getByTestId('icon-postgres')).toBeInTheDocument();
    expect(screen.getByTestId('icon-redis')).toBeInTheDocument();
  });
});
