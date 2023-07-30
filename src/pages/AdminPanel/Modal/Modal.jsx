import React from 'react';
import './Modal.scss';
import { createPortal } from 'react-dom';

export const Modal = ({ children, setIsModalOpened, isModalOpened }) => {
  return createPortal(
    <div className={`modal ${isModalOpened ? 'opened' : ''}`}>
      <div className={'overlay'} onClick={() => setIsModalOpened(false)}></div>
      <div className={'modalWindow'}>
        <div className={'modalWindow__body'}>{children}</div>
      </div>
    </div>,
    document.body,
  );
};
