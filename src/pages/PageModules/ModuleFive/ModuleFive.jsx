import React, { useEffect } from 'react';
import arrowLeft from '../../../assets/arrowLeft.svg';
import { Link } from 'react-router-dom';

import TextVideoHW from '../../LessonParts/TextVideoHW/TextVideoHW.jsx';
import VideoText from './../../LessonParts/VideoText/VideoText.jsx';

import scss from './ModuleFive.module.scss';
import { Video } from '../../LessonParts/Video/Video';
import Cabinet from '../../pageCabinet/Cabinet';

const ModuleFive = () => {
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
        <div className="module__title">5 МОДУЛЬ</div>
        <div className="module__topic">ЛИЧНЫЙ БРЕНД. МОНЕТИЗАЦИЯ.</div>
      </div>

      <div className="container">
        <VideoText
          lessonNumber="1. Личный бренд."
          lessonDescription=""
          videoId="bfj4lEyc4w8"
          deadline="Дедлайн по домашнему заданию к урокам 1:"
        />
        <hr />
        <div className={scss.lesson}>
          <div className={scss.lesson__title}>УРОК 2. Монетизация блога.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId={videoId} width={520} height={250} />
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
        <hr />
        <div className={scss.lesson}>
          <div className={scss.lesson__title}>УРОК 3. Аватар будущих клиентов.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId={videoId} width={520} height={250} />
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

        <hr />
        <div className={scss.lesson}>
          <div className={scss.lesson__title}>УРОК 4. Продающая упаковка.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId={videoId} width={520} height={250} />
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
        <hr />
        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Экспертный контент.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId={videoId} width={520} height={250} />
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
          <div className={scss.lesson__title}>Поиск и привлечение вашей.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId={videoId} width={520} height={250} />
            </div>
            <div className={scss.video}>
              <Video videoId={videoId} width={520} height={250} />
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
          <div className={scss.lesson__title}>Бонусный урок по таргету.</div>

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
          <div className={scss.lesson__title}>Бонусный урок по таргету.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.video}>
              <Video videoId="iSmtnP-qErU" width={520} height={250} />
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
          <div className={scss.lesson__title}>Бонусный урок по упаковке аккаунта.</div>

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
        </div>
      </div>
    </>
  );
};

export default ModuleFive;
