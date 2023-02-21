import sprite from "../../assets/icons.svg";
import style from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <div className={style.inputContainer}>
      <input
        type="text"
        placeholder="Search..."
        className={style.searchInput}
      />
      <svg className={style.searchIcon}>
        <use href={`${sprite}#icon-search`} />
      </svg>
    </div>
  );
};

export default SearchInput;
