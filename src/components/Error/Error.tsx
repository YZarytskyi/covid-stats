import { FC } from 'react';
import s from './Error.module.css';

interface ErrorProps {
  error: Error;
}

const Error: FC<ErrorProps> = ({ error }) => {
  return (
    <div className={s.errorContainer}>
      <p className={s.error}>{`⚠ Something went wrong: ${error.message}`}</p>
      <button
        type="button"
        onClick={() => window.location?.reload()}
        className={s.reloadBtn}
      >
        Reload Page
      </button>
    </div>
  );
};

export default Error;
