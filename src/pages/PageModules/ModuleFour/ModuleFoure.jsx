import React from 'react';
import arrowLeft from '../../../assets/arrowLeft.svg';
import { Link } from 'react-router-dom';

import TextVideoHW from '../../LessonParts/TextVideoHW/TextVideoHW.jsx';
import VideoText from './../../LessonParts/VideoText/VideoText.jsx';

import scss from './ModuleFour.module.scss';

const Video = ({ videoId }) => {
  return (
    <div className={scss.module__video}>
      <iframe
        style={{ width: '100%' }}
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?showinfo=0`}
        title="YouTube Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen></iframe>
      {/* <div className={scss.module__summary}>Конспект</div> */}
    </div>
  );
};

const ModuleFour = () => {
  const videoId = 'bfj4lEyc4w8';
  return (
    <>
      <div className="arrow__left">
        <Link to="/">
          <img src={arrowLeft} alt="Arrow Left" />
        </Link>
      </div>

      <div className="module__header">
        <div className="module__title">Модуль 4</div>
        <div className="module__topic">СТОРИСМЕЙКИНГ И СММ.</div>
      </div>

      <div className="container">
        <div className={scss.lesson}>
          <div className={scss.lesson__title}>УРОК 1. Сторис.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.lesson__grid}>
              <div className={scss.lesson__grid_col}>
                <Video videoId={videoId} />
                <Video videoId={videoId} />
                <Video videoId={videoId} />
                <Video videoId={videoId} />
                <Video videoId={videoId} />
                <div className={scss.lesson__grid_summary}>
                  <div className={scss.lesson__summary_action}>Конспект Урока</div>
                  <div className={scss.lesson__summary_action}>Домашнее задание</div>
                </div>
              </div>
              <div className={scss.lesson__grid_col}>
                <p>
                  В данном уроке мы поговорим о существующих стилях в оформлении сторис через призму
                  искусства.
                </p>
                <Video videoId={videoId} />
                <div className={scss.lesson__summary}>
                  <div className={scss.lesson__summary_text}>
                    Дедлайны по домашнему заданию к уроку 2:
                  </div>
                  <div className={scss.lesson__summary_action}>Домашнее задание</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>УРОК 2. Текст</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.lesson__text}>
              <div className={`${scss.lesson__text_content}`}>
                <p>
                  Сегодня нам предстоит обсудить несложный урок по текстам. Просто внимательно
                  прочитайте все правила и рекомендации.
                </p>
                <p>
                  После них вы уже будете знать как пишутся тексты для инстаграм и оформляются
                  текстовые блоки.
                </p>
              </div>
            </div>
            <div className={scss.lesson__footer}>
              <div className={scss.lesson__summary}>
                <div className={scss.lesson__summary_text}>Презентация по теме урока:</div>
                <div className={scss.lesson__summary_action}>Конспект урока</div>
              </div>
              <div className={scss.lesson__summary}>
                <div className={scss.lesson__summary_text}>
                  Дедлайны по домашнему заданию к уроку 2:
                </div>
                <div className={scss.lesson__summary_action}>Домашнее задание</div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <VideoText
          lessonNumber="УРОК 3.СММ"
          lessonDescription=""
          videoId="bfj4lEyc4w8"
          deadline="Дедлайн по домашнему заданию к урокам 3:"
        />

        <hr />
      </div>
    </>
  );
};

export default ModuleFour;
