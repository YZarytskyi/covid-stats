import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from './SearchInput';
import { RootState } from 'store/store';
import { renderWithProviders } from 'utils/test-utils';

describe('SearchInput', () => {
  const preloadedState: RootState = {
    countries: {
      countries: [],
      query: '',
      page: 1,
      isLoading: false,
      error: null,
    },
  };

  test('should display input', () => {
    renderWithProviders(<SearchInput />, {
      preloadedState,
    });

    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
  });

  test('should display Ukraine in input', async () => {
    renderWithProviders(<SearchInput />, {
      preloadedState,
    });

    userEvent.type(screen.getByPlaceholderText('Search...'), 'Ukraine');
    expect(await screen.findByDisplayValue('Ukraine')).toBeInTheDocument();
  });
});
