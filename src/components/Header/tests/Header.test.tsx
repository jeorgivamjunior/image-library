import { render, screen } from '@testing-library/react';

import { Header } from '../Header';

describe('Header component', () => {
  it('should display the title', () => {
    render(<Header />);
    const title = screen.getByRole('heading');

    expect(title).toBeInTheDocument();
  });

  it('should display the logo', () => {
    render(<Header />);
    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
  });
});
