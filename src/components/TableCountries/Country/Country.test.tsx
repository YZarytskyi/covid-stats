import { render, fireEvent, screen } from '@testing-library/react';
import { ICountry } from 'types';
import Country from './Country';

const country: ICountry = {
  ID: '1',
  Country: 'Ukraine',
  TotalConfirmed: 100,
  TotalDeaths: 1,
  TotalRecovered: 50,
  Index: 0,
};

describe('Country', () => {
  test('should display country, totalConfirmed', () => {
    render(<Country item={country} />);

    const countryName = screen.getByText(/Ukraine/);
    const totalConfirmed = screen.getByText(/100/);
    expect(countryName).toBeInTheDocument();
    expect(totalConfirmed).toBeInTheDocument();
  });

  test('should open modal after user click on table row', () => {
    render(<Country item={country} />);

    fireEvent.click(screen.getByText('Ukraine'));
    const modal = screen.getByText(/Total Deaths/);
    expect(modal).toBeInTheDocument();
  });
});
