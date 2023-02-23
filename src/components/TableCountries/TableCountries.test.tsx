import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import { RootState } from 'store/store';
import userEvent from '@testing-library/user-event';
import TableCountries from './TableCountries';

describe('App', () => {
  const preloadedState: RootState = {
    countries: {
      countries: [
        {
          ID: '1',
          Index: 0,
          Country: 'Albania',
          TotalConfirmed: 90,
          TotalDeaths: 9,
          TotalRecovered: 40,
        },
        {
          ID: '2',
          Index: 1,
          Country: 'Ukraine',
          TotalConfirmed: 100,
          TotalDeaths: 10,
          TotalRecovered: 50,
        },
      ],
      query: '',
      page: 1,
      isLoading: false,
      error: null,
    },
  };

  test('renders table', () => {
    renderWithProviders(<TableCountries />, {
      preloadedState,
    });
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });

  test('renders table headers', () => {
    renderWithProviders(<TableCountries />, {
      preloadedState,
    });
    const countryHeader = screen.getByText('Country');
    const confirmedHeader = screen.getByText('Total Confirmed');
    expect(countryHeader).toBeInTheDocument();
    expect(confirmedHeader).toBeInTheDocument();
  });

  test('renders table data', () => {
    renderWithProviders(<TableCountries />, {
      preloadedState,
    });
    const countryData = screen.getByText('Ukraine');
    const confirmedData = screen.getByText('100');
    expect(countryData).toBeInTheDocument();
    expect(confirmedData).toBeInTheDocument();
  });

  test('should not display pagination if there are less than PER_PAGE countries', () => {
    renderWithProviders(<TableCountries />, {
      preloadedState,
    });
    const paginationElement = screen.queryByTestId('pagination');
    expect(paginationElement).toBeNull();
  });

  test('should open modal after user click on table row', async () => {
    renderWithProviders(<TableCountries />, {
      preloadedState,
    });

    userEvent.click(screen.getByText('Ukraine'));
    expect(await screen.findByText(/Total Deaths/)).toBeInTheDocument();
  });
});
