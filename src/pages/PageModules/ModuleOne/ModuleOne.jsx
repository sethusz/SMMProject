import React from 'react';

import './ModuleOne.scss'

const ModuleOne = () => {

  const videoId = "bfj4lEyc4w8";

  return (
    <>
      <div className=' module'>
        <div className='module__header'>
          <div className='module__title'>Модуль 1</div>
          <div className='module__topic'>Курс о СММ</div>
        </div>
        <div className='module__lesson'>Урок 1</div>
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

        <hr/>

        <div className='module__lesson'>Урок 2</div>
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

        <hr/>

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
