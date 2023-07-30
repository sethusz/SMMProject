import React, { useEffect } from 'react';
import VideoText from './../../LessonParts/VideoText/VideoText.jsx';

import TextVideoHW from '../../LessonParts/TextVideoHW/TextVideoHW.jsx';
import arrowLeft from '../../../assets/arrowLeft.svg';
import { Link } from 'react-router-dom';
import Cabinet from '../../pageCabinet/Cabinet.jsx';

import scss from './ModuleTwo.module.scss';
import { Video } from '../../LessonParts/Video/Video.jsx';

const ModuleTwo = () => {
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
        <div className="module__title">Модуль 2</div>
        <div className="module__topic">Курс о СММ</div>
      </div>

      <div className="container">
        <VideoText
          lessonNumber="1"
          lessonTitle=" Элементы визуала. Стили визуала."
          lessonDescription="
                  Перед тем как продвигать свой профиль, нужно упаковать и подготовить его. Элементы, которые должны быть правильно оформлены:"
          videoId="bfj4lEyc4w8"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          list="true"
        />

        <hr />

        <TextVideoHW
          lessonNumber="2"
          lessonTitle="Терминология. Референс и мудборд."
          lessonDescription="Визуал и визуальная концепция - это ваша лента в инстаграме, эстетичная и гармоничная, состоящая из ваших фото (не используйте чужие фото для построения ленты). Для того, чтобы выстроить гармоничную ленту вам понадобится планер.
          Референс - это фото, взятое в приложении Пинтерест, на просторах Инстаграм или из других источников, которое вам понравилось и вы захотели повторить это фото. То есть это пример, материал для вдохновения. Вдохновляться можно кадрами из фильмов, модными показами, фото из журналов, старыми фотографиями и тд. Из референсов складывается ваш мудборд."
          videoId="bfj4lEyc4w8"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          secondSummary={'Конспект Урока 2'}
        />

        <hr />

        <VideoText
          lessonTitle="Размеры фотографий в ленте."
          lessonNumber="3"
          lessonDescription="Для того, чтобы ваша лента выглядела гармонично и интересно, не забывайте о разноплановости кадра. Кадр может быть: ближнего, среднего и дальнего плана. Рассмотрим на примере человека - только лицо (сэлфи) = ближний план. Средний план - фото по пояс. Дальний план - человек сфотографирован полностью + мы видим не только самого человека, но и атмосферу вокруг него."
          videoId="bfj4lEyc4w8"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />

        <hr />

        <VideoText
          lessonTitle="Расположение фотографий в ленте."
          lessonNumber="4"
          lessonDescription="Самый популярный и удобный способ расположения фотографий в ленте: чередуете крупный план - дальний план - детальное фото - фото в полный рост.
Таким образом, профиль выглядит гармонично и не перегруженно."
          videoId="bfj4lEyc4w8"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />

        <hr />

        <VideoText
          lessonTitle="Воздух. Загруженные кадры в ленте.Тренды визуала."
          lessonNumber="5"
          lessonDescription="Воздух -это чистое пространство на фото. Это может быть простынь, стена, небо, вода - то есть, участки на фото без лишних деталей и объектов.
Загруженные кадры - где в одном кадре много предметов либо есть шумный фон.
Шумный фон- когда на фоне в том числе находятся разные и яркие предметы."
          videoId="bfj4lEyc4w8"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />

        <hr />

        <div className={scss.lesson}>
          <div className={scss.lesson__title}>УРОК 6. Сочетание цветов. Цветовой круг.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.lesson__grid}>
              <div className={scss.lesson__grid_col}>
                <div className={scss.video}>
                  <Video videoId={videoId} />
                </div>
                <div className={scss.lesson__summary}>Конспект</div>
              </div>
              <div className={scss.lesson__grid_col}>
                <div className={scss.lesson__summary}>Конспект</div>
                <div className={scss.video}>
                  <Video videoId={videoId} />
                </div>
              </div>
              <div className={scss.lesson__grid_col}>
                <div className={scss.lesson__deadline}>
                  <div>Дедлайны по домашнему заданию к уроку 6:</div>
                  <div className={scss.lesson__homework}>Домашние задание</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleTwo;
