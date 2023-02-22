import { FC, useState } from 'react';
import { ICountry } from 'types';
import ModalDetails from '../ModalDetails/ModalDetails';

interface CountryProps {
  item: ICountry;
}

const Country: FC<CountryProps> = ({ item }) => {
  const { Index, Country, TotalConfirmed, TotalDeaths, TotalRecovered } = item;

  const [showModal, setShowModal] = useState(false);

  const onClickShowDetails = () => {
    setShowModal(true);
    document.body.classList.add('hidden')
  };

  return (
    <>
      <tr role="button" onClick={onClickShowDetails}>
        <td>{Index + 1}</td>
        <td>{Country}</td>
        <td>{TotalConfirmed}</td>
      </tr>
      <ModalDetails
        showModal={showModal}
        setShowModal={setShowModal}
        country={Country}
        confirmed={TotalConfirmed}
        deaths={TotalDeaths}
        recovered={TotalRecovered}
      />
    </>
  );
};

export default Country;
