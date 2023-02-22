import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCountries } from './countriesThunks';
import { ICountry } from 'types';
import { RootState } from '../store';
import { PER_PAGE } from 'constants/constants';

interface InitialState {
  countries: ICountry[];
  query: string;
  page: number;
  isLoading: boolean;
  error: null | Error;
}

const initialState: InitialState = {
  countries: [],
  query: '',
  page: 1,
  isLoading: false,
  error: null,
};

export const countriesSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.page = 1;
      state.query = payload;
    },
    sortByNames: (state, { payload }: PayloadAction<boolean>) => {
      state.countries = state.countries.sort((a, b) => {
        return payload
          ? a.Country.localeCompare(b.Country)
          : b.Country.localeCompare(a.Country);
      });
    },
    sortByConfirmed: (state, { payload }: PayloadAction<boolean>) => {
      state.countries = state.countries.sort((a, b) => {
        return payload
          ? a.TotalConfirmed - b.TotalConfirmed
          : b.TotalConfirmed - a.TotalConfirmed;
      });
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCountries.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        if (action.payload instanceof Error) {
          state.error = action.payload;
        }
        state.isLoading = false;
      });
  },
});

export const { setQuery, sortByNames, sortByConfirmed, setPage } =
  countriesSlice.actions;
export const countriesReducer = countriesSlice.reducer;

const countries = (state: RootState) => state.countries.countries;
const page = (state: RootState) => state.countries.page;
const query = (state: RootState) =>
  state.countries.query?.trim()?.toLowerCase();

export const selectFilteredCountries = createSelector(
  [countries, page, query],
  (countries, page, query) => {
    const firstItemIndex = (page - 1) * PER_PAGE;
    const lastItemIndex = page * PER_PAGE;
    const filteredByQuery = countries
      .filter(item => item.Country.toLowerCase().includes(query))
      .map((item, index) => ({ ...item, Index: index }));
    const filteredCountries = filteredByQuery.slice(
      firstItemIndex,
      lastItemIndex
    );
    const filteredCountriesLength = filteredByQuery.length;
    return { filteredCountries, filteredCountriesLength };
  }
);
