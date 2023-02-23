import logo from "assets/logo.jpg";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.container}>
      <img src={logo} alt="logo" className={style.logoImg} />
      <h1 className={style.title}>Statistic</h1>
    </div>
  );
};

export default Logo;
