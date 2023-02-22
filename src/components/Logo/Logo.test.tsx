import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  test('should display title', () => {
    render(<Logo />);

    const title = screen.getByText(/Statistic/);
    expect(title).toBeInTheDocument();
  });

  test('should display logo image', () => {
    render(<Logo />);

    const image = screen.getByAltText(/logo/);
    expect(image).toBeInTheDocument();
  });
});
