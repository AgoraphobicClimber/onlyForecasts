import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAlert } from '../store/features/alertSlice';

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  const dispatch = useDispatch();

  const onModalClose = () => {
    onClose();
    dispatch(setAlert(''));
  };

  if (!message) {
    return null;
  }

  return (
    <div className="modal is-active has-text-centered">
      <div className="modal-background" onClick={onModalClose}>
        <div className="modal-card">
          <header className="modal-card-head has-background-danger">
            <p className="modal-card-title has-text-white">{message}</p>
          </header>
          <footer className="modal-card-foot" style={{justifyContent: 'center'}}>
            <button className="button" onClick={onModalClose}>Close</button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Alert;
