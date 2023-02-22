import axios from 'axios';
import { BASE_URL, COUNTRIES_KEY } from 'constants/constants';
import { ICountry, ResponseType } from 'types';

export const covidApi = {
  async getSummary() {
    const { data } = await axios.get<ResponseType>(`${BASE_URL}/summary`);
    if (data.Countries) {
      localStorage.setItem(COUNTRIES_KEY, JSON.stringify(data.Countries));
      return data.Countries;
    }
    const savedCountries = localStorage.getItem(COUNTRIES_KEY);
    if (savedCountries) {
      return JSON.parse(savedCountries) as ICountry[];
    }
    throw new Error('Some problems in API, please refresh page later');
  },
};
