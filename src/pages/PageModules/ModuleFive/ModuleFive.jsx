import React, { useEffect } from 'react';
import arrowLeft from '../../../assets/arrowLeft.svg';
import { Link } from 'react-router-dom';

import TextVideoHW from '../../LessonParts/TextVideoHW/TextVideoHW.jsx';
import VideoText from '../../LessonParts/VideoText/VideoText.jsx';

import scss from './ModuleFive.module.scss';
import { Video } from '../../LessonParts/Video/Video';
import Cabinet from '../../pageCabinet/Cabinet';

const ModuleFive = () => {
  const videoId = 'bfj4lEyc4w8';
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="arrow__left">
        <Link to="/">
          <img src={arrowLeft} alt="Arrow Left" />
        </Link>
      </div>
      <Cabinet />

      <div className="module__header">
        <div className="module__title">Модуль пятый</div>
        <div className="module__topic">Reels</div>
      </div>

      <div className="container">
        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Что такое рилс и для чего он нам нужен?</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>

            <div className={scss.lesson__grid_col}>
              <Video videoId={'VRfma4k9gEY'} height={315} />
              <p>
                В данном уроке мы поговорим о существующих стилях в оформлении сторис через призму
                искусства.
              </p>


            </div>
          </div>
        </div>
        <hr />

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Приложение и основы монтажа видео-рилс.</div>

          <div className={scss.video__app}>
            <Video videoId={'bNVeaLGqigg'} height={260} />
            <Video videoId={'vjJdRhnAyAk'} height={260} />
            <Video videoId={'nWClx1Xi-JA'} height={260} />
          </div>
        </div>




        <hr />


        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Цепляющий оффер, который будет использоваться в рилс воронке</div>

          <div className={scss.video__app}>
            <Video videoId={'QTSnAdpenGU'} height={260} />
            <Video videoId={'nF112UUtD00'} height={260} />
          </div>


        </div>


      </div >
    </>
  );
};

export default ModuleFive;
