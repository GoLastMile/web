import { GET } from './route';
import { NextRequest } from 'next/server';

describe('GET /api/users', () => {
  it('returns users with status 200', async () => {
    const req = new NextRequest('http://localhost/api/users');
    const response = await GET(req);
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toEqual([{ id: 1, name: 'John' }]); // Example data from actual API route
  });

  it('handles errors with status 500', async () => {
    // Mock external dependency to throw error
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const req = new NextRequest('http://localhost/api/users');
    const response = await GET(req);
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data).toEqual({ error: 'Internal Server Error' });
  });
});