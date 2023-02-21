import SearchInput from "../SearchInput/SearchInput";
import Logo from "../Logo/Logo";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={`container ${style.container}`}>
        <Logo />
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;
