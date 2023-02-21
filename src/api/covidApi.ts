import axios from "axios";
import { ResponseType } from "../types/types";

const BASE_URL = "https://api.covid19api.com";

export const covidApi = {
  async getSummary() {
    const { data } = await axios.get<ResponseType>(`${BASE_URL}/summary`);
    return data.Countries;
  },
};
