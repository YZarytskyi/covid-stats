import { screen } from '@testing-library/react';
import { RootState } from 'store/store';
import { renderWithProviders } from 'utils/test-utils';
import Header from './Header';

describe('Header', () => {
  const preloadedState: RootState = {
    countries: {
      countries: [],
      query: '',
      page: 1,
      isLoading: false,
      error: null,
    },
  };

  test('should display Logo and SearchInput components', () => {
    renderWithProviders(<Header />, {
      preloadedState,
    });

    const title = screen.getByText(/Statistic/);
    const image = screen.getByAltText(/logo/);
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
