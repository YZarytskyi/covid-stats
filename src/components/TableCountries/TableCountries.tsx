import { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import {
  selectFilteredCountries,
  setPage,
  sortByConfirmed,
  sortByNames,
} from 'store/countries/countriesSlice';
import { PER_PAGE } from '../../constants/constants';
import Country from './Country/Country';
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';
import sprite from 'assets/icons.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './TableCountries.module.css';

const TableCountries = () => {
  const dispatch = useAppDispatch();
  const { filteredCountries, filteredCountriesLength } = useAppSelector(
    selectFilteredCountries
  );
  const { page, isLoading, error } = useAppSelector(state => state.countries);

  const [sortedToLower, setSortedToLower] = useState(false);

  const onClickSortByNames = () => {
    dispatch(sortByNames(sortedToLower));
    setSortedToLower(prev => !prev);
  };

  const onClickSortByConfirmed = () => {
    dispatch(sortByConfirmed(sortedToLower));
    setSortedToLower(prev => !prev);
  };

  const onClickPageChange = (page: number) => {
    dispatch(setPage(page));
    console.log(page);
  };

  if (error) {
    return <Error error={error} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!filteredCountries.length) {
    return <p className={style.notFound}>Countries not found</p>;
  }

  return (
    <>
      <table className={style.table}>
        <thead>
          <tr>
            <th>№</th>
            <th onClick={onClickSortByNames}>
              <span className={style.thSort}>
                Country
                <svg className={style.icon}>
                  <use href={`${sprite}#icon-sort`} />
                </svg>
              </span>
            </th>
            <th onClick={onClickSortByConfirmed}>
              <span className={style.thSort}>
                Total Confirmed
                <svg className={style.icon}>
                  <use href={`${sprite}#icon-sort`} />
                </svg>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((item) => (
            <Country key={item.ID} item={item} />
          ))}
        </tbody>
      </table>
      {filteredCountriesLength > PER_PAGE ? (
        <div className={style.pagination}>
          <PaginationControl
            page={page}
            between={4}
            total={filteredCountriesLength}
            limit={PER_PAGE}
            changePage={onClickPageChange}
            ellipsis={1}
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default TableCountries;
