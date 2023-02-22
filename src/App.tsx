import React, { useEffect } from 'react';
import Header from 'components/Header/Header';
import TableCountries from 'components/TableCountries/TableCountries';
import { useAppDispatch } from 'hooks/redux-hooks';
import { fetchCountries } from 'store/countries/countriesThunks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <TableCountries />
      </main>
    </>
  );
}

export default App;
