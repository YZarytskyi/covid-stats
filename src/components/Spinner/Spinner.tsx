import { createPortal } from 'react-dom';
import { Dna } from 'react-loader-spinner';
import style from './Spinner.module.css';

const Spinner = () => {
  return createPortal(
    <div className={style.container}>
      <Dna
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
      />
    </div>,
    document.body
  );
};

export default Spinner;
