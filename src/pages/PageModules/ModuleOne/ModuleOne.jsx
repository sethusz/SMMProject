import React, { useEffect } from 'react';

import './ModuleOne.scss';

import studyImg from '../../../assets/studyImg.jpg';
import arrowLeft from '../../../assets/arrowLeft.svg';
import { Link } from 'react-router-dom';

import TextVideoHW from '../../LessonParts/TextVideoHW/TextVideoHW.jsx';
import VideoText from './../../LessonParts/VideoText/VideoText.jsx';

import useNoAuth from '../../../hooks/useNoAuth';
import Cabinet from '../../pageCabinet/Cabinet';

const ModuleOne = () => {
  useNoAuth();
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

      <div className="module container">
        <div className="module__header">
          <div className="module__title">Модуль 1</div>
          <div className="module__topic">Курс о СММ</div>
        </div>

        <div className="lesson__content lesson">
          <div className="module__lesson">Урок 1. Введение. Знакомство</div>
          <div className="module__content-lesson content">
            <div className="lesson__content">
              <div className="lesson__descr">
                <p>Здравствуйте дорогие участницы курса по Визуалу и Сторисмейкинг.</p>
                <p>
                  Очень рада приветствовать вас на обучении! И благодарю каждую из вас за доверие.
                </p>
                <p>
                  За время обучения мы будем учиться понимать свой стиль, фотографировать,
                  обрабатывать снимки и красиво оформлять профиль! Темы не сложные и интересные.
                </p>
                <p>Темы не сложные и интересные.</p>
              </div>

              {/* <div className="lesson__skills"></div> */}

              <div className="lesson__homework">Чат Вакансий</div>
            </div>

            <div className="lesson__img">
              <img src={studyImg} alt="studyImg" />
            </div>
          </div>

          <hr className="hr__black" />

          <div className="lesson__content-two content">
            <div className="lesson__video--1">
              <iframe
                style={{ width: '100%' }}
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?showinfo=0`}
                title="YouTube Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen></iframe>
            </div>
            <div className="lesson__description">
              <div className="lesson__two--text">
                <ul className="lesson__two--list">
                  <li>Цель курса - научить вас составлять грамотный Визуал ✔️</li>
                  <li>Делать самые трендовые обработки✔️</li>
                  <li>Делать эстетичные кадры в любой обстановке ✔️</li>
                  <li>Рассказать как достичь успеха в Инстаграмм ✔️</li>
                  <li>Научить выделяться среди других ✔️</li>
                  <li>Выстроить свой личный бренд✔️</li>
                </ul>

                <p>
                  Будем творить красоту вместе! И самое важное: Пожалуйста выполняйте домашние
                  задания, они помогут вам улучшить навыки и закрепить теорию!
                </p>
              </div>
              <div className="lesson__homework">Телеграмм канал файлы</div>
            </div>
          </div>
        </div>

        <hr />

        <TextVideoHW
          lessonNumber="2"
          lessonTitle="РАСПАКОВКА ЛИЧНОСТИ"
          lessonDescription="Сегодня у нас урок будет посвящён РАСПАКОВКИ ЛИЧНОСТИ.Для чего это нам нужно? Для того, чтобы лучше себя понять и знать о чем вести вашу страницу! Независимо от того,
          какой тип блога вы ведёте: личный, экспертный, коммерческий ( магазины, и т.д.)! Когда мы с вами откроем и пропишем все наши стороны,
          тогда нам будет легче знать в каком направлении создавать Визуал и сторис!"
          videoId="bfj4lEyc4w8"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />

        <hr />

        <div className="lesson__content lesson">
          <div className="module__lesson">УРОК 3. Цели, миссия и позиционирование в блоге.</div>
          <div className="module__content-text content">
            <div className="lesson__text--three">
              <div className="lesson__content--three">
                В этом уроке поговорим о том, как поставить перед собой главные цели в блоге,
                декомпозировать их на краткосрочные, как найти свою миссию и выстроить
                позиционирование. Вы поймёте, с чего начинать свой путь в мире Инстаграм и какой тип
                блога выбрать для выстраивания позиционирования в нем.
              </div>

              <div className="lesson__summary">Конспект</div>
            </div>
            <div className="lesson__text--three">
              <div className="lesson__content--three">
                Домашним заданием будет воркбук по целям и миссии в блоге. Распечатайте его и
                заполните. Или сделайте пометки в своём ежедневнике. Неважно как, главное —
                сделайте.
              </div>

              <div className="lesson__homework">Домашние задание</div>
            </div>
          </div>
        </div>

        <hr />

        <VideoText
          lessonNumber="4"
          lessonTitle="Насмотренность"
          lessonDescription="Всё, что мы видим вокруг себя, оставляет отпечатки в виде визуальных образов и влияет на формирование вкуса: архитектура, мода, фильмы, книги, соцсети, реклама и даже место, где мы живём.

          Насмотренность – это визуальный опыт, который создатель получает, просматривая работы других авторов и произведения искусства."
          videoId="bfj4lEyc4w8"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />
      </div>
    </>
  );
};

export default ModuleOne;
