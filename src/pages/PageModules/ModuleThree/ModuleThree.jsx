import React from 'react';
import arrowLeft from '../../../assets/arrowLeft.svg';
import { Link } from 'react-router-dom';

import TextVideoHW from '../../LessonParts/TextVideoHW/TextVideoHW.jsx';
import VideoText from './../../LessonParts/VideoText/VideoText.jsx';

import scss from './ModuleThree.module.scss';

const ModuleThree = () => {
  const lessonText = (
    <>
      Композиция - это размещение объектов на фотографии.
      <br />
      <br />
      Правило третей:
      Кадр делится на три равные части по вертикали и горизонтали.
      <br />
      <br />
      Центральная композиция - объект также может располагаться по центру между двумя вертикальными линиями.
    </>
  );

  return (
    <>
      <div className='arrow__left'>
        <Link to='/'>  <img src={arrowLeft} alt="Arrow Left" /> </Link>
      </div>

      <div className='module__header'>
        <div className='module__title'>Модуль 3</div>
        <div className='module__topic'>Курс о СММ</div>
      </div>

      <VideoText
        lessonNumber='1. Как делать фотографии в домашних условиях.'
        lessonDescription='В данном уроке я покажу вам как делать красивые кадры в домашних условиях. Самое важное это – практика! Чем чаще вы фотографируете разные предметы, тем лучше они у вас будут получаться! Более подробная информация будет выслана в презентации!'
        videoId='bfj4lEyc4w8'
        deadline='Дедлайн по домашнему заданию к урокам 1 и 2:' />

      <hr />

      <div className={scss.lesson__title}>УРОК 2. Основные правила композиции в фотографии.</div>

      <div className={scss.lesson__content}>
        <div></div>
        <div className={scss.lesson__text}>{lessonText}
          <div className={scss.lesson__summary}>Конспект</div>
        </div>
        <div className={scss.lesson__deadline}>
          <div>Дедлайны по домашнему заданию к уроку 2:</div>
          <div className={scss.lesson__homework}>Домашние задание</div>
        </div>
      </div>

      <hr />

      <VideoText
        lessonNumber='3. Как делать фотографии в домашних условиях.'
        lessonDescription='В данном уроке я покажу вам как делать красивые кадры в домашних условиях. Самое важное это – практика! Чем чаще вы фотографируете разные предметы, тем лучше они у вас будут получаться! Более подробная информация будет выслана в презентации!'
        videoId='bfj4lEyc4w8'
        deadline='Дедлайн по домашнему заданию к урокам 1 и 2:' />

      <hr />
    </>
  );
}

export default ModuleThree;
