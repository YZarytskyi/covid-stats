export interface ICountry {
  ID: string;
  Country: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
  Index: number;
}

export interface ResponseType {
  Countries: ICountry[];
  Date: string;
}
