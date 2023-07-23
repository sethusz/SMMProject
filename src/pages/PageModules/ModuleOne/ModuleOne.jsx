import React, { useEffect } from 'react';

import './ModuleOne.scss'

import studyImg from '../../../assets/studyImg.jpg';
import arrowLeft from '../../../assets/arrowLeft.svg';
import { Link } from 'react-router-dom';

import useNoAuth from '../../../hooks/useNoAuth';


const ModuleOne = () => {
  useNoAuth()
  const videoId = "bfj4lEyc4w8";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='arrow__left'>
        <Link to='/'>  <img src={arrowLeft} alt="Arrow Left" /> </Link>
      </div>

      <div className='module'>

        <div className='module__header'>
          <div className='module__title'>Модуль 1</div>
          <div className='module__topic'>Курс о СММ</div>
        </div>

        <div className='lesson__content'>
          <div className='module__lesson'>Урок 1. Введение. Знакомство</div>
          <div className='module__content-lesson'>


            <div className='lesson__content'>
              <div className='lesson__descr'>Здесь будет описание урока, то есть вы описываете что будет в уроке , почему его
                важно посмотреть и тому подобное , то есть то есть то есть то есть то есть то естьто есть то естьто естьто есть
                то естьто естьто естьто естьто естьто естьто есть
              </div>

              <div className='lesson__skills'>Здесь вы напиши какие навыки пользовательно получил то есть: русский, анг, казах,
                пользоватся компом, это все просто набор слов что бы увидели как это виглядит </div>

              <div className='lesson__homework'>Чат Вакансий</div>
            </div>

            <div className='lesson__img'>
              <img src={studyImg} alt="studyImg" />

            </div>

          </div>
        </div>

        <hr />

        <div className='lesson__content'>
          <div className='module__lesson'>Урок 2</div>
          <div className='module__content-lesson'>

            <div className='lesson__video'>
              <iframe
                style={{ width: '100%' }}
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?showinfo=0`}
                title="YouTube Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>

              <div className='lesson__summary'>Конспект</div>

            </div>
            <div className='lesson__content'>
              <div className='lesson__descr'>Здесь будет описание урока, то есть вы описываете что будет в уроке , почему его
                важно посмотреть и тому подобное , то есть то есть то есть то есть то есть то естьто есть то естьто естьто есть
                то естьто естьто естьто естьто естьто естьто есть
              </div>

              <div className='lesson__skills'>Здесь вы напиши какие навыки пользовательно получил то есть: русский, анг, казах,
                пользоватся компом, это все просто набор слов что бы увидели как это виглядит </div>

              <div className='lesson__homework'>Домашние задание</div>
            </div>
          </div>
        </div>

        <hr />

        <div className='module__lesson'>Урок 3</div>
        <div className='module__content-lesson'>
          <div className='lesson__video'>
            <iframe
              width="650"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?showinfo=0`}
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          <div className='lesson__content'>
            <div className='lesson__descr'>Здесь будет описание урока, то есть вы описываете что будет в уроке , почему его
              важно посмотреть и тому подобное , то есть то есть то есть то есть то есть то естьто есть то естьто естьто есть
              то естьто естьто естьто естьто естьто естьто есть
            </div>

            <div className='lesson__skills'>Здесь вы напиши какие навыки пользовательно получил то есть: русский, анг, казах,
              пользоватся компом, это все просто набор слов что бы увидели как это виглядит </div>

            <div className='lesson__homework'>Домашние задание</div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ModuleOne;
