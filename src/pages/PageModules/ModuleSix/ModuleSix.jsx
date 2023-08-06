import React, { useEffect } from 'react';
import arrowLeft from '../../../assets/arrowLeft.svg';
import { Link } from 'react-router-dom';

import TextVideoHW from '../../LessonParts/TextVideoHW/TextVideoHW.jsx';
import VideoText from '../../LessonParts/VideoText/VideoText.jsx';

import scss from './ModuleSix.module.scss';
import { Video } from '../../LessonParts/Video/Video';
import Cabinet from '../../pageCabinet/Cabinet';

const ModuleSix = () => {
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
        <div className="module__title">МОДУЛЬ Шестой</div>
        <div className="module__topic">ЛИЧНЫЙ БРЕНД. МОНЕТИЗАЦИЯ.</div>
      </div>

      <div className="container">

        <VideoText
          lessonTitle='Контент план'
          lessonDescription="Контент план."
          videoId="Zopud20A7lY"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          homework={'https://docs.google.com/document/d/1X1brTqOTG2rnYksGRktGJXXKNGY5QobQ/edit?usp=drive_link&ouid=114783473414938878123&rtpof=true&sd=true'}
          link={'https://drive.google.com/file/d/13EDCs1In3xgRrW-HzoS0jSLCXKzEjVQY/view?usp=drive_link'}
        />

        <hr />


        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Тайм-менеджмент</div>
          <div className={`${scss.lesson__content} ${scss.content} ${scss.col}`}>
            <div className={scss.video}>
              <Video videoId="otccevOOgK0" width={520} height={250} />
            </div>
            <div className={scss.lesson__summary_action}><a href="https://drive.google.com/file/d/1EkwDQyMTpVtFhrxUiDnLP3KyFRm6LBT5/view?usp=drive_link" className="link">Конспект</a></div>
          </div>

        </div>

        <hr />


        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Личный бренд</div>
          <div className={`${scss.lesson__content} ${scss.content} ${scss.col}`}>
            <div className={scss.video}>
              <Video videoId="fVfFqkhZVYY" width={520} height={250} />
            </div>
            <div className={scss.lesson__summary_action}><a href="https://drive.google.com/file/d/13QLj0rJYd6QHCz2CoSLGVwmQ0QJMQ9BJ/view?usp=drive_link" className="link">Конспект</a></div>
          </div>

        </div>

        <hr />

        <div className={scss.lesson}>
          <div className={scss.lesson__title}> Монетизация </div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId={'OYLUseCO2dY'} width={520} height={250} />
            </div>
          </div>
          <div className={scss.lesson__footer}>
            <div className={scss.lesson__summary_action}>
              <a href="https://drive.google.com/file/d/1IdiETKeRsqf94fpCLLyMNURt77nO7hUJ/view?usp=drive_link" className="link" target="blank">
                Конспект урока
              </a>
            </div>
          </div>
        </div>



        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Бонусный урок по таргету.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId="iSmtnP-qErU" width={520} height={250} />
            </div>
          </div>
         
        </div>

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Бонусный урок по упаковке аккаунта.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId="60RquztpF-I" width={520} height={250} />
            </div>
          </div>

        </div>

        {/* <div className={scss.lesson}>
          <div className={scss.lesson__title}>Практика. Финал обучения.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId="60RquztpF-I" width={520} height={250} />
            </div>
          </div>
          <div className={scss.lesson__footer}>
            <div className={scss.lesson__summary_action}>
              <a href="" className="link">
                Конспект урока
              </a>
            </div>
          </div>
        </div>

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Фуршет.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId="60RquztpF-I" width={520} height={250} />
            </div>
          </div>
          <div className={scss.lesson__footer}>
            <div className={scss.lesson__summary_action}>
              <a href="" className="link">
                Конспект урока
              </a>
            </div>
          </div>
        </div>

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Вручение сертификатов.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId="60RquztpF-I" width={520} height={250} />
            </div>
          </div>
          <div className={scss.lesson__footer}>
            <div className={scss.lesson__summary_action}>
              <a href="" className="link">
                Конспект урока
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ModuleSix;
