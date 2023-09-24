import React, { useEffect } from 'react';
import arrowLeft from '../../../assets/arrowLeft.svg';
import { Link } from 'react-router-dom';

import TextVideoHW from '../../LessonParts/TextVideoHW/TextVideoHW.jsx';
import VideoText from './../../LessonParts/VideoText/VideoText.jsx';

import scss from './ModuleThree.module.scss';
import { Video } from '../../LessonParts/Video/Video';
import Cabinet from '../../pageCabinet/Cabinet';

const ModuleThree = () => {
  const videoId = 'bfj4lEyc4w8';

  const lessonText = (
    <>
      Композиция - это размещение объектов на фотографии.
      <br />
      <br />
      Правило третей: Кадр делится на три равные части по вертикали и горизонтали.
      <br />
      <br />
      Центральная композиция - объект также может располагаться по центру между двумя вертикальными
      линиями.
    </>
  );
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
        <div className="module__title">Модуль Третий</div>
        <div className="module__topic">Предметная съёмка</div>
      </div>

      <div className="container">
        <VideoText
          lessonTitle="Как делать фотографии в домашних условиях.."
          lessonDescription="В данном уроке я покажу вам как делать красивые кадры в домашних условиях. Самое важное это – практика! Чем чаще вы фотографируете разные предметы, тем лучше они у вас будут получаться! Более подробная информация будет выслана в презентации!"
          videoId="IF3MeL79iuE"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          link="https://drive.google.com/file/d/1I1VLRLRHri_yZTVybQPLSD5p51tK-FIa/view?usp=sharing"
          homework={
            'https://docs.google.com/document/d/1qYOrQDALm3cLUGPJ1AHPqSXUKePndY2T/edit?usp=drive_link&ouid=114783473414938878123&rtpof=true&sd=true'
          } 
        />

        <hr />

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Основные правила композиции в фотографии.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.lesson__text}>
              <div className={`${scss.lesson__text_content}`}>{lessonText}</div>
              <div className={scss.lesson__summary}>
                <a
                  href="https://drive.google.com/file/d/1VanVbfwg4EAXGW10Jncy8mZlzW_owI5O/view?usp=sharing"
                  className="link"
                  target="blank"
                  rel={'noreferrer'}>
                  Конспект к уроку
                </a>
              </div>
            </div>
            <div className={scss.lesson__deadline}>
              <div>Дедлайны по домашнему заданию к уроку :</div>
              <div className={scss.lesson__homework}>
                <a
                  href="https://docs.google.com/document/d/1kA8PGC4kC-hmVpw4BWa3k7uGGf66Gbk2/edit?usp=drive_link&ouid=114783473414938878123&rtpof=true&sd=true"
                  className="link"
                  target={'_blank'}
                  rel={'noreferrer'}>
                  Домашние задание
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Фуд съёмка.Предметная съемка</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.lesson__video}>
              <div className={scss.video}>
                <Video videoId="NmG_I5chj3Q" />
              </div>
              <div className={scss.video}>
                <Video videoId="G6cE8_Npw8w" />
              </div>
            </div>

            <div className={scss.lesson__text}>
              <div className={`${scss.lesson__text_content}`}>
                <p>
                  Предметная съемка и фуд – съемка проходят практически одинаково. Многие
                  рекомендации и приемы (а также фоны и реквизит) применяемые в предметной съёмке
                  относятс к съемке еды. В фуд-съёмке больший акцент идёт на текстуру, передачу
                  вкуса еды, красивого аппетитного цвета. Особенно хорошо подчёркивает вкус и
                  текстуру еды детальные снимки на 2х зум (приближение)
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Обработка фотографий.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.lesson__grid}>
              <div className={scss.video}>
                <Video videoId="G2aBWiV9NKw" />
              </div>
              <div className={scss.lesson__grid_summary}>
                <div>Все пресеты вы cможете скачать в телеграмм канале под названием «Файлы»</div>
                <div className={scss.lesson__homework}>
                  <a href="" className="link" rel={'noreferrer'} target={'_blank'}>
                    Файлы
                  </a>
                </div>
              </div>
              <div className={scss.video}>
                <Video videoId="2j-kXlzIgM4" />
              </div>
              <div className={scss.video}>
                <Video videoId="a37dDrw_cgE" />
              </div>
              <div className={scss.video}>
                <Video videoId="yhaIQwQPoCY" />
              </div>
              <div className={scss.video}>
                <Video videoId="eIpXZm6vzP0" />
              </div>
              <div className={scss.video}>
                <Video videoId="euVUujARlMY" />
              </div>

              <div className={scss.lesson__grid_deadline}>
                <div>Дедлайны по домашнему заданию к уроку 4:</div>
                <div className={scss.lesson__homework}>
                  <a
                    href="https://docs.google.com/document/d/1kA8PGC4kC-hmVpw4BWa3k7uGGf66Gbk2/edit?usp=drive_link&ouid=114783473414938878123&rtpof=true&sd=true"
                    className="link"
                    rel={'noreferrer'}
                    target={'_blank'}>
                    Домашние задание
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleThree;
