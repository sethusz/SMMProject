import React, { useEffect } from 'react';

import './ModuleOne.scss';

// import studyImg from '../../../assets/studyImg.jpg';
import module1 from '../../../assets/module1.jpg';
import arrowLeft from '../../../assets/arrowLeft.svg';
import { Link } from 'react-router-dom';

import TextVideoHW from '../../LessonParts/TextVideoHW/TextVideoHW.jsx';
import VideoText from './../../LessonParts/VideoText/VideoText.jsx';
import { Video } from './../../LessonParts/Video/Video.jsx';

import useNoAuth from '../../../hooks/useNoAuth';
import Cabinet from '../../pageCabinet/Cabinet';
import scss from '../ModuleThree/ModuleThree.module.scss';

const ModuleOne = () => {
  useNoAuth();
  // const videoId = 'bfj4lEyc4w8';

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
          <div className="module__title">Модуль Первый</div>
          <div className="module__topic">Позиционирование</div>
        </div>

        <div className="lesson__content lesson">
          <div className="module__lesson">Вводная часть</div>
          <div className="video__app content">
            <div className="lesson__row">
              <div className="video">
                <Video videoId={'anBa-W9aaWI'} height={315} /> 
              </div>
              <div className="description">
                <p>
                  Оразбекова Асель - Наставник по Личному Бренду, Визуализатор, kontent creator.
                </p>
              </div>
            </div>
            <div className="lesson__row">
              <div className="video">
                <Video videoId={'6pXrDm8SvJ8'} height={315} />
              </div>
              <div className="description">
                <p>
                  Тюлешева Диана - Чакролог, энергопрактик, практикующий системный терапевт,
                  индивидуальные расстановки
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="hr__black" />

        <div className="lesson__content lesson">
          <div className="module__lesson">Введение. Знакомство</div>
          <div className="module__content-lesson content">
            <div className="lesson__content">
              <div className="lesson__descr">
                <p>Здравствуйте дорогие участницы курса по Визуалу и Сторисмейкингу.</p>
                <p>
                  Очень рада приветствовать вас на обучении! И благодарю каждую из вас за доверие.
                </p>
                <p>
                  За время обучения мы будем учиться понимать свой стиль, фотографировать,
                  обрабатывать снимки и красиво оформлять профиль!
                </p>
                <p>Темы не сложные и интересные.</p>
              </div>

              {/* <div className="lesson__skills"></div> */}

              <div className="lesson__homework">
                <a href="https://t.me/clubfreelance" className="link" target="_blank">
                  Чат Вакансий
                </a>
              </div>
            </div>

            <div className="lesson__img">
              <img src={module1} alt="girls" />
            </div>
          </div>

          <hr className="hr__black" />

          <div className="lesson__content-two content">
            <div className="lesson__video--1">
              <iframe
                style={{ width: '100%' }}
                height="315"
                src={`https://www.youtube.com/embed/${'Ph5caGs394Y'}?showinfo=0`}
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
              <div className="lesson__homework">
                <a href="https://t.me/+XM04O6zqjw5lYzNi" className="link" target="_blank">
                  Телеграмм канал файлы
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <TextVideoHW
          homeworkLink={
            'https://docs.google.com/document/d/1QFjijeNimcYcWwt4z7qg8CYCP2G2xmuu/edit?usp=drive_link&ouid=114783473414938878123&rtpof=true&sd=true'
          }
          lessonTitle="РАСПАКОВКА ЛИЧНОСТИ"
          lessonDescription="Сегодня у нас урок будет посвящён РАСПАКОВКИ ЛИЧНОСТИ.Для чего это нам нужно? Для того, чтобы лучше себя понять и знать о чем вести вашу страницу! Независимо от того,
          какой тип блога вы ведёте: личный, экспертный, коммерческий ( магазины, и т.д.)! Когда мы с вами откроем и пропишем все наши стороны,
          тогда нам будет легче знать в каком направлении создавать Визуал и сторис!"
          videoId="zLdHz4WqmuI"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          firstConspect={
            'https://drive.google.com/file/d/1Gkd89Z9XCL_2tWOml8_KqE3SSPNAqCDr/view?usp=drive_link'
          }
        />

        <hr />
        <div className={'lesson'}>
          <div className={'module__lesson'}>Цели, Миссия и позоционирование в блоге</div>
          <div className={`lesson__content_group content`}>
            <div className={'lesson__col'}>
              <div className={`lesson__text_content`}>
                Цели, миссия и позиционирование в блоге. В этом уроке поговорим о том, как поставить
                перед собой главные цели в блоге, декомпозировать их на краткосрочные, как найти
                свою миссию и выстроить позиционирование. Вы поймёте, с чего начинать свой путь в
                мире Инстаграм и какой тип блога выбрать для выстраивания позиционирования в нем.
              </div>
              <div className={'lesson__summary'}>
                <a
                  href="https://drive.google.com/file/d/1BrdwqXeGeGRbZeZBsKR1RnvxOEHlvacb/view?usp=drive_link"
                  className="link"
                  target="blank">
                  Конспект к уроку
                </a>
              </div>
            </div>
            <div className={'lesson__col '}>
              <div className="deadline">
                <div className={'lesson__col_text'}>Дедлайны по домашнему заданию к уроку</div>
                <div className={'lesson__homework'}>
                  <a
                    href="https://docs.google.com/document/d/113myPodONEYHxfcjXuT26X6ttATW2tHQ/edit?usp=drive_link&ouid=114783473414938878123&rtpof=true&sd=true"
                    className="link"
                    target={'_blank'}
                    rel={'noreferrer'}>
                    Домашние задание
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <VideoText
          homework={
            'https://docs.google.com/document/d/1HE4qPc5BAZI9nHk_TI4Bbj5_1izHo0El/edit?usp=drive_link&ouid=114783473414938878123&rtpof=true&sd=true'
          }
          lessonTitle="Насмотренность"
          lessonDescription="Всё, что мы видим вокруг себя, оставляет отпечатки в виде визуальных образов и влияет на формирование вкуса: архитектура, мода, фильмы, книги, соцсети, реклама и даже место, где мы живём.

          Насмотренность – это визуальный опыт, который создатель получает, просматривая работы других авторов и произведения искусства."
          videoId="kyERRnKEQZE"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          link={
            'https://drive.google.com/file/d/16XKGPxNU8xcCv80WAQfDkSOefqPZh5ob/view?usp=drive_link'
          }
        />
      </div>
    </>
  );
};

export default ModuleOne;
