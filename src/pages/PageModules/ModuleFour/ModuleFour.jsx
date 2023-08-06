import React, { useEffect } from 'react';
import arrowLeft from '../../../assets/arrowLeft.svg';
import { Link } from 'react-router-dom';

import TextVideoHW from '../../LessonParts/TextVideoHW/TextVideoHW.jsx';
import VideoText from './../../LessonParts/VideoText/VideoText.jsx';

import scss from './ModuleFour.module.scss';
import { Video } from '../../LessonParts/Video/Video';
import Cabinet from '../../pageCabinet/Cabinet';

const ModuleFour = () => {
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

      <div className="module__header">
        <div className="module__title">Модуль Четвертый</div>
        <div className="module__topic">СТОРИСМЕЙКИНГ И СММ.</div>
      </div>

      <div className="container">



        <VideoText
          lessonTitle='Сторис'
          lessonDescription='Сторис - это важнейший инструмент для привлечения и вовлечения вашей аудитории.
       Сторис очень важны для развития личного аккаунта и личного бренда.'
          videoId={videoId}
          
        />

        {/* <div className={scss.lesson}>
          <div className={scss.lesson__title}>Сторис.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.lesson__grid}>
              <div className={scss.lesson__grid_col}>
                <Video videoId={videoId} height={160} />
                <Video videoId={videoId} height={160} />
                <Video videoId={videoId} height={160} />
                <Video videoId={videoId} height={160} />
                <Video videoId={videoId} height={160} />
                <div className={scss.lesson__grid_summary}>
                  <div className={scss.lesson__summary_action}>Конспект Урока</div>
                  <div className={scss.lesson__summary_action}>Домашнее задание</div>
                </div>
              </div>
              <div className={scss.lesson__grid_col}>
                <p>
                  В данном уроке мы поговорим о существующих стилях в оформлении сторис через призму
                  искусства.
                </p>
                <Video videoId={videoId} height={315} />
                <div className={scss.lesson__summary}>
                  <div className={scss.lesson__summary_text}>
                    Дедлайны по домашнему заданию к уроку 2:
                  </div>
                  <div className={scss.lesson__summary_action}>Домашнее задание</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <hr />

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>Копирайтинг</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.lesson__text}>
              <div className={`${scss.lesson__text_content}`}>
                <p>
                  Сегодня нам предстоит обсудить несложный урок по текстам. Просто внимательно
                  прочитайте все правила и рекомендации.
                </p>
                <p>
                  После них вы уже будете знать как пишутся тексты для инстаграм и оформляются
                  текстовые блоки.
                </p>
              </div>
            </div>
            <div className={scss.lesson__footer}>
              <div className={scss.lesson__summary}>
                <div className={scss.lesson__summary_text}>Презентация по теме урока:</div>
                <div className={scss.lesson__summary_action}>Конспект урока</div>
              </div>
              <div className={scss.lesson__summary}>
                <div className={scss.lesson__summary_text}>
                  Дедлайны по домашнему заданию к уроку 2:
                </div>
                <div className={scss.lesson__summary_action}>Домашнее задание</div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <VideoText
          lessonTitle="СММ"
          lessonDescription="Маркетинг в социальных сетях (англ. Social media marketing, SMM) — это полноценный маркетинг, а не только продвижение через различные социальные платформы. Ведение аккаунтов в социальных сетях является частью маркетинговой и коммуникационной стратегии.
          По статистике Marketing Sherpa, 95% людей от 18 до 34 лет удобнее всего следить за брендом и взаимодействовать с ним именно через соцсети. С этим и связан большой спрос на SMM-специалистов: почти каждая компания ведёт соцсети. Для многих брендов это единственный канал продвижения в интернете."
          videoId="bfj4lEyc4w8"
          deadline="Дедлайн по домашнему заданию к урокам 3:"
        />

        {/* <hr /> */}
      </div>
    </>
  );
};

export default ModuleFour;