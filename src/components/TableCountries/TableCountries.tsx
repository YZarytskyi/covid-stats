import { FC } from "react";
import { ICountry } from "../../types/types";
import Country from "./Country";
import style from "./TableCountries.module.css";

interface TableCountriesProps {
  countries: ICountry[];
}

const TableCountries: FC<TableCountriesProps> = ({ countries }) => {

  if (!countries?.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <table className={style.table}>
        <thead>
          <tr>
            <th>№</th>
            <th>Country</th>
            <th>Total Confirmed</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((item, index) => (
            <Country
              key={item.ID}
              item={item}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableCountries;