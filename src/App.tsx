import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import TableCountries from './components/TableCountries/TableCountries';
import { covidApi } from './api/covidApi';
import { ICountry } from './types/types';

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    const getInfo = async () => {
      const data = await covidApi.getSummary();
      setCountries(data);
    };
    getInfo();
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="container">
        <TableCountries countries={countries} />
      </main>
    </div>
  );
}

export default App;
