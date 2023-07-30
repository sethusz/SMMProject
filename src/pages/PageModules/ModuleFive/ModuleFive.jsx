import React, { useEffect } from 'react';
import arrowLeft from '../../../assets/arrowLeft.svg';
import { Link } from 'react-router-dom';

import TextVideoHW from '../../LessonParts/TextVideoHW/TextVideoHW.jsx';
import VideoText from './../../LessonParts/VideoText/VideoText.jsx';

import scss from './ModuleFive.module.scss';
import { Video } from '../../LessonParts/Video/Video';
import Cabinet from '../../pageCabinet/Cabinet';

const ModuleFive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const videoId = 'bfj4lEyc4w8';
  return (
    <>
      <div className="arrow__left">
        <Link to="/">
          <img src={arrowLeft} alt="Arrow Left" />
        </Link>
      </div>
      <Cabinet />

      <div className="module__header">
        <div className="module__title">5 МОДУЛЬ</div>
        <div className="module__topic">ЛИЧНЫЙ БРЕНД. МОНЕТИЗАЦИЯ.</div>
      </div>

      <div className="container">
        <VideoText
          lessonNumber="1. Контент план. Видео."
          lessonDescription=""
          videoId="bfj4lEyc4w8"
          deadline="Дедлайн по домашнему заданию к урокам 1:"
        />
        <hr />
        <div className={scss.lesson}>
          <div className={scss.lesson__title}>УРОК 2. Тайм менеджмент.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId={videoId} width={520} height={250} />
            </div>
          </div>
          <div className={scss.lesson__footer}>
            <div className={scss.lesson__summary_action}>Конспект урока</div>
          </div>
        </div>
        <hr />
        <div className={scss.lesson}>
          <div className={scss.lesson__title}>УРОК 3. Личный бренд.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId={videoId} width={520} height={250} />
            </div>
          </div>
          <div className={scss.lesson__footer}>
            <div className={scss.lesson__summary_action}>Конспект урока</div>
          </div>
        </div>

        <hr />
        <div className={scss.lesson}>
          <div className={scss.lesson__title}>УРОК 4. Монетизация.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId={videoId} width={520} height={250} />
            </div>
          </div>
          <div className={scss.lesson__footer}>
            <div className={scss.lesson__summary_action}>Конспект урока</div>
          </div>
        </div>
        <hr />
        <div className={scss.lesson}>
          <div className={scss.lesson__title}>БОНУСНЫЙ УРОК ПО ВИДЕО.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId={videoId} width={520} height={250} />
            </div>
          </div>
          <div className={scss.lesson__footer}>
            <div className={scss.lesson__summary_action}>Конспект урока</div>
          </div>
        </div>

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>БОНУСНЫЙ УРОК ПО ТАРГЕТУ.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId={videoId} width={520} height={250} />
            </div>
            <div className={scss.video}>
              <Video videoId={videoId} width={520} height={250} />
            </div>
          </div>
          <div className={scss.lesson__footer}>
            <div className={scss.lesson__summary_action}>Конспект урока</div>
          </div>
        </div>

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>БОНУСНЫЙ УРОК ПО УПАКОВКЕ АККАУНТА.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId={videoId} width={520} height={250} />
            </div>
          </div>
          <div className={scss.lesson__footer}>
            <div className={scss.lesson__summary_action}>Конспект урока</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleFive;
