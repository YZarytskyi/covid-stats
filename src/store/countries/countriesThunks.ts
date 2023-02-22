import { covidApi } from 'api/covidApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICountry } from 'types';

export const fetchCountries = createAsyncThunk<ICountry[]>(
  'countries/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await covidApi.getSummary();
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error);
      }
      return rejectWithValue({ message: 'Some error occurred' });
    }
  }
);
