import { FC, Dispatch, SetStateAction, MouseEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from 'assets/icons.svg';
import style from './ModalDetails.module.css';

interface ModalDetailsProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  country: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}

const ModalDetails: FC<ModalDetailsProps> = ({
  showModal,
  setShowModal,
  country,
  confirmed,
  deaths,
  recovered,
}) => {
  useEffect(() => {
    window.addEventListener('keydown', onPressEsc);
    return () => window.removeEventListener('keydown', onPressEsc);
  }, []);

  function onPressEsc(e: KeyboardEvent) {
    if (e.code === 'Escape') {
      setShowModal(false);
    }
  }

  function onClickCloseModal(
    e: MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  }

  if (!showModal) return null

  return createPortal(
    <div
      className={style.backdrop}
      onClick={onClickCloseModal}
    >
      <div className={style.modal}>
        <h1 className={style.title}>{country}</h1>
        <div className={style.row}>
          <svg className={style.icon}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
          <p className={style.text}>Total Confirmed</p>
          <p>{confirmed}</p>
        </div>
        <div className={style.row}>
          <svg className={style.icon}>
            <use href={`${sprite}#icon-death`} />
          </svg>
          <p className={style.text}>Total Deaths</p>
          <p>{deaths}</p>
        </div>
        <div className={style.row}>
          <svg className={style.recoverIcon}>
            <use href={`${sprite}#icon-recover`} />
          </svg>
          <p className={style.text}>Total Recovered</p>
          <p>{recovered}</p>
        </div>
        <button type="button" className={style.btn} onClick={onClickCloseModal}>
          OK
        </button>
      </div>
    </div>,
    document.body
  );
};

export default ModalDetails;
