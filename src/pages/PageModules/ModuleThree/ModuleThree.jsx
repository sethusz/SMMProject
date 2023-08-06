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
          videoId="D1xSV7PbYOg"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          link="https://drive.google.com/file/d/1I1VLRLRHri_yZTVybQPLSD5p51tK-FIa/view?usp=sharing"
        />

        <hr />

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Основные правила композиции в фотографии.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.lesson__text}>
              <div className={`${scss.lesson__text_content}`}>{lessonText}</div>
              <div className={scss.lesson__summary}>
                <a href="https://drive.google.com/file/d/1VanVbfwg4EAXGW10Jncy8mZlzW_owI5O/view?usp=sharing" className="link" target='blank'>
                  Конспект
                </a>
              </div>
            </div>
            <div className={scss.lesson__deadline}>
              <div>Дедлайны по домашнему заданию к уроку :</div>
              <div className={scss.lesson__homework}>
                <a href="" className="link">
                  Домашние задание
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* <VideoText
          lessonNumber="3. Как делать фотографии в домашних условиях."
          lessonDescription="В данном уроке я покажу вам как делать красивые кадры в домашних условиях. Самое важное это – практика! Чем чаще вы фотографируете разные предметы, тем лучше они у вас будут получаться! Более подробная информация будет выслана в презентации!"
          videoId="bfj4lEyc4w8"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        /> */}

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Фуд съёмка.Предметная съемка</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.lesson__video}>
              <div className={scss.video}>
                <Video videoId={videoId} />
              </div>
              <div className={scss.video}>
                <Video videoId={videoId} />
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

       

              <div className={scss.lesson__deadline}>
                <div>Дедлайны по домашнему заданию к уроку 3:</div>
                <div className={scss.lesson__homework}>
                  <a href="" className="link">
                    Домашние задание
                  </a>
                </div>

                
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
                <Video videoId={videoId} />
              </div>
              <div className={scss.lesson__grid_summary}>
                <div>Все пресеты вы cможете скачать в телеграмм канале под названием «Файлы»</div>
                <div className={scss.lesson__homework}>
                  <a href="" className="link">
                    Файлы
                  </a>
                </div>
              </div>
              <div className={scss.video}>
                <Video videoId={videoId} />
              </div>
              <div className={scss.video}>
                <Video videoId={videoId} />
              </div>
              <div className={scss.video}>
                <Video videoId={videoId} />
              </div>
              {/* <div className={scss.lesson__grid_deadline}>
                <div>Дедлайны по домашнему заданию к уроку 4:</div>
                <div className={scss.lesson__homework}>
                  <a href="" className="link">
                    Домашние задание
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* <hr /> */}

        {/* <VideoText
          lessonNumber="5"
          lessonDescription="Контент план."
          videoId="Zopud20A7lY"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />

        <hr />

        <VideoText
          lessonNumber="6"
          lessonDescription="Тайм-менеджмент."
          videoId="Zopud20A7lY"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        /> */}
      </div>
    </>
  );
};

export default ModuleThree;
