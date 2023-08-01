import React, { useRef, useState } from 'react';

import './PageMain.scss';
import img_main from '../../assets/main.jpg';
import checkMark from '../../assets/checkMark.svg';
import SmmModules from './MainContent';
import Cabinet from '../pageCabinet/Cabinet';

import useNoAuth from '../../hooks/useNoAuth';

const PageMain = () => {
  const mainContentRef = useRef(null);

  const scrollToMainContent = () => {
    mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useNoAuth();
  return (
    <>
      <Cabinet />
      <div className="image__container image">
        <div className="image__content">
          <img src={img_main} alt="" className="image__main" />
          <div className="image__text">КУРС ПО ВИЗУАЛУ&SMM АСЕЛЬ ОРАЗБЕКОВОЙ.</div>
          <div className="image__arrow" onClick={scrollToMainContent}></div>
        </div>
      </div>

      <div className="main__content main" ref={mainContentRef}>
        <div className="main__title">VISUAL&STORIES</div>
        <hr className="hr" />

        <SmmModules />
      </div>

      <div className="footer">
        <div className="footer__section">
          <div className="footer__contact-title">Контакты</div>
          <ul className="footer__contacts">
            <li className="footer__contact">instagram: example@example.com</li>
            <li className="footer__contact">telegram: 123-456-789</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PageMain;
