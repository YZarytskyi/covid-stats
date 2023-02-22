import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { RootState } from '../../store/store';

describe('SearchInput', () => {
  const initialState: RootState = {
    countries: {
      countries: [],
      query: '',
      page: 1,
      isLoading: false,
      error: null,
    },
  };

  const mockStore = configureStore();
  let store;

  test('should display title', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
  });
});
