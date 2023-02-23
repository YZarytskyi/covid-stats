import sprite from 'assets/icons.svg';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { setQuery } from 'store/countries/countriesSlice';
import style from './SearchInput.module.css';

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector(state => state.countries.query);

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <div className={style.inputContainer}>
      <input
        type="text"
        placeholder="Search..."
        className={style.searchInput}
        value={query}
        onChange={onInputChange}
      />
      <svg className={style.searchIcon}>
        <use href={`${sprite}#icon-search`} />
      </svg>
    </div>
  );
};

export default SearchInput;
