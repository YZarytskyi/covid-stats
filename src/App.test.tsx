import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import App from './App';

describe('App', () => {
  test('should display loader', async () => {
    renderWithProviders(<App />);

    const loading = screen.getByTestId('spinner');
    expect(loading).toBeInTheDocument();
  });
});
