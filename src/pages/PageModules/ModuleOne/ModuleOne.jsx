import React, { useEffect } from 'react';

import './ModuleOne.scss'

import studyImg from '../../../assets/studyImg.jpg';
import arrowLeft from '../../../assets/arrowLeft.svg';
import { Link } from 'react-router-dom';

import TextVideoHW from '../../LessonParts/TextVideoHW/TextVideoHW.jsx'
import VideoText from './../../LessonParts/VideoText/VideoText.jsx'

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

          <hr className='hr__black' />

          <div className='lesson__content-two'>
            <div className='lesson__video--1'>
              <iframe
                style={{ width: '100%' }}
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?showinfo=0`}
                title="YouTube Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
            <div className='lesson__two--text'>
              Цель курса - научить вас составлять грамотный Визуал ✔️
              <br />
              Делать самые трендовые обработки✔️
              <br />
              Делать эстетичные кадры в любой обстановке ✔️
              <br />
              Рассказать как достичь успеха в Инстаграмм ✔️
              <br />
              Научить выделяться среди других ✔️
              <br />
              Выстроить свой личный бренд✔️
              <br />
              <br />
              Будем творить красоту вместе!
              <br />
              <br />
              И самое важное: Пожалуйста выполняйте домашние задания, они помогут вам улучшить навыки и закрепить теорию!

              <div className='lesson__homework'>Телеграмм канал файлы</div>
            </div>

          </div>
        </div>

        <hr />


        <TextVideoHW
          lessonNumber='2'
          lessonTitle=' Сегодня у нас урок будет посвящён РАСПАКОВКИ ЛИЧНОСТИ.'
          lessonDescription='Для чего это нам нужно? Для того, чтобы лучше себя понять и знать о чем вести вашу страницу! Независимо от того,
          какой тип блога вы ведёте: личный, экспертный, коммерческий ( магазины, и т.д.)! Когда мы с вами откроем и пропишем все наши стороны,
          тогда нам будет легче знать в каком направлении создавать Визуал и сторис!'
          videoId='bfj4lEyc4w8'
          deadline='Дедлайн по домашнему заданию к урокам 1 и 2:'
        />


        <hr />



        <div className='lesson__content'>
          <div className='module__lesson'>УРОК 3. Цели, миссия и позиционирование в блоге.</div>
          <div className='module__content-text'>

            <div className='lesson__text--three'>
              <div className='lesson__content--three'>В этом уроке поговорим о том, как поставить перед собой главные цели в блоге, декомпозировать их на краткосрочные, как найти свою миссию и выстроить позиционирование.
                Вы поймёте, с чего начинать свой путь в мире Инстаграм и какой тип блога выбрать для выстраивания позиционирования в нем.</div>

              <div className='lesson__summary'>Конспект</div>

            </div>
            <div className='lesson__content'>
              <div className='lesson__descr--three'>Здесь будет описание урока, то есть вы описываете что будет в уроке , почему его
                важно посмотреть и тому подобное , то есть то есть то есть то есть то есть то естьто есть то естьто естьто есть
                то естьто естьто естьто естьто естьто естьто есть
              </div>

              <div className='lesson__homework'>Домашние задание</div>
            </div>
          </div>
        </div>

        <hr />

        <VideoText lessonNumber='4'
          lessonTitle=' Сегодня у нас урок будет посвящён РАСПАКОВКИ ЛИЧНОСТИ.'
          lessonDescription='Для чего это нам нужно? Для того, чтобы лучше себя понять и знать о чем вести вашу страницу! Независимо от того,
          какой тип блога вы ведёте: личный, экспертный, коммерческий ( магазины, и т.д.)! Когда мы с вами откроем и пропишем все наши стороны,
          тогда нам будет легче знать в каком направлении создавать Визуал и сторис!'
          videoId='bfj4lEyc4w8'
          deadline='Дедлайн по домашнему заданию к урокам 1 и 2:'/>

      </div>
    </>
  );
}

export default ModuleOne;
