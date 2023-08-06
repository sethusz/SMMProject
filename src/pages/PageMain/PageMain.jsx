import React, { useRef, useState } from 'react';

import './PageMain.scss';
import img_main from '../../assets/img_main.jpg';
import checkMark from '../../assets/checkMark.svg';
import SmmModules from './MainContent';
import Cabinet from '../pageCabinet/Cabinet';

import useNoAuth from '../../hooks/useNoAuth';

const PageMain = () => {
  const mainContentRef = useRef(null);

  const scrollToMainContent = () => {
    mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const image__text = (
    <>
      КУРС ПО ВИЗУАЛУ&SMM

      <br />
      АСЕЛЬ ОРАЗБЕКОВОЙ
    </>
  );

  useNoAuth();
  return (
    <>
      <Cabinet />
      <div className="image__container image">
        <div className="image__content">
          <img src={img_main} alt="" className="image__main" />
          <div className="image__text">{image__text}</div>
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
            <li className="footer__contact"><a href="https://instagram.com/asselya_orazbekova?igshid=MzRlODBiNWFlZA==">Instagram</a> </li>
            <li className="footer__contact"><a href="https://t.me/+4t2FFF5q7Dw0OTYy">Telegram</a> </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PageMain;
