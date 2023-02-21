import { FC, useState } from 'react';
import { ICountry } from '../../types/types';
import ModalDetails from '../ModalDetails/ModalDetails';

interface CountryProps {
  item: ICountry;
  index: number;
}

const Country: FC<CountryProps> = ({ item, index }) => {
  const [showModal, setShowModal] = useState(false);

  const onClickShowDetails = () => {
    setShowModal(true);
  };

  return (
    <>
      <tr role="button" onClick={onClickShowDetails}>
        <td>{index + 1}</td>
        <td>{item.Country}</td>
        <td>{item.TotalConfirmed}</td>
      </tr>
      <ModalDetails
        showModal={showModal}
        setShowModal={setShowModal}
        country={item.Country}
        confirmed={item.TotalConfirmed}
        deaths={item.TotalDeaths}
        recovered={item.TotalRecovered}
      />
    </>
  );
};

export default Country;
