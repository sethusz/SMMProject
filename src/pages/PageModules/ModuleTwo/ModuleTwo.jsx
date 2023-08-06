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
        <div className="module__title">Модуль второй</div>
        <div className="module__topic">Визуал&SMM</div>
      </div>

      <div className="container">
        <VideoText
          lessonTitle="Элементы визуала. Стили визуала."
          lessonDescription="
                  Перед тем как продвигать свой профиль, нужно упаковать и подготовить его. Элементы, которые должны быть правильно оформлены:"
          videoId="0zk337_4_ds"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          list="true"
          link={
            'https://drive.google.com/file/d/1zf5fff-I2zhXGTzJwSY9EqiYd3IjXisE/view?usp=drive_link'
          }
        />

        <hr />

        <TextVideoHW

          lessonTitle="Терминология. Референс и мудборд."
          lessonDescription="Визуал и визуальная концепция - это ваша лента в инстаграме, эстетичная и гармоничная, состоящая из ваших фото (не используйте чужие фото для построения ленты). Для того, чтобы выстроить гармоничную ленту вам понадобится планер.
          Референс - это фото, взятое в приложении Пинтерест, на просторах Инстаграм или из других источников, которое вам понравилось и вы захотели повторить это фото. То есть это пример, материал для вдохновения. Вдохновляться можно кадрами из фильмов, модными показами, фото из журналов, старыми фотографиями и тд. Из референсов складывается ваш мудборд."
          videoId="LjnL3H1Svhg"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          secondSummary={'Конспект Урока 2'}
          firstConspect="https://drive.google.com/file/d/1yaaGmvl5Cq_RLqD-7dkTmmSw4n074Hmh/view?usp=drive_link"
          secondLink="https://drive.google.com/file/d/15Ig1VnzaHld44Aeu9lkCo1tykfEbxQL3/view?usp=drive_link"
        />

        <hr />

        {/* <VideoText
          lessonTitle="Размеры и расположение фотографий в ленте."
    
          lessonDescription="Для того, чтобы ваша лента выглядела гармонично и интересно, не забывайте о разноплановости кадра. Кадр может быть: ближнего, среднего и дальнего плана. Рассмотрим на примере человека - только лицо (сэлфи) = ближний план. Средний план - фото по пояс. Дальний план - человек сфотографирован полностью + мы видим не только самого человека, но и атмосферу вокруг него."
          videoId="VwiTQW1dw-U"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        /> */}




        <VideoText
          lessonTitle="Размеры фотографий в ленте."

          lessonDescription="Для того, чтобы ваша лента выглядела гармонично и интересно, не забывайте о разноплановости кадра. Кадр может быть: ближнего, среднего и дальнего плана. Рассмотрим на примере человека - только лицо (сэлфи) = ближний план. Средний план - фото по пояс. Дальний план - человек сфотографирован полностью + мы видим не только самого человека, но и атмосферу вокруг него."
          videoId="VwiTQW1dw-U"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />

        {/* <div className={scss.lesson}>
          <div className={scss.lesson__title}>
            УРОК 3.Размеры и расположение фотографий в ленте.
          </div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.lesson__grid}>
              <div className={scss.lesson__grid_col}>
                <div className={scss.video}>
                  <Video videoId={'VwiTQW1dw-U'} />
                </div>
                <div className={scss.lesson__summary}>
                  <a href="" className="link">
                    Конспект
                  </a>
                </div>
              </div>
              <div className={scss.lesson__grid_col}>
                <div className={scss.lesson__summary}>
                  <a href="" className="link">
                    Конспект
                  </a>
                </div>
                <div className={scss.video}>
                  <Video videoId={'JWdYfHKpDRI'} />
                </div>
              </div>
              <div className={scss.lesson__grid_col}>
                <div className={scss.lesson__deadline}>
                  <div>Дедлайны по домашнему заданию к уроку 6:</div>
                  <div className={scss.lesson__homework}>
                    <a href="" className="link">
                      Домашние задание
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <hr />

        <VideoText
          lessonTitle="Расположение фотографий в ленте."

          lessonDescription="Самый популярный и удобный способ расположения фотографий в ленте: чередуете крупный план - дальний план - детальное фото - фото в полный рост. Таким образом, профиль выглядит гармонично и не перегруженно."
          videoId="JWdYfHKpDRI"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />

        <hr />

        <VideoText
          lessonTitle="Воздух. Загруженные кадры в ленте.Тренды визуала."

          lessonDescription="Воздух -это чистое пространство на фото. Это может быть простынь, стена, небо, вода - то есть, участки на фото без лишних деталей и объектов.
Загруженные кадры - где в одном кадре много предметов либо есть шумный фон.
Шумный фон- когда на фоне в том числе находятся разные и яркие предметы."
          videoId="HbTGnKrSvMU"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />

        <hr />

        {/* <div className={scss.lesson}>
          <div className={scss.lesson__title}>УРОК 6.Тренды, антитренды визуала.</div>

          <div className={`${scss.lesson__content} ${scss.content}`}>
            <div className={scss.lesson__grid}>
              <div className={scss.lesson__grid_col}>
                <div className={scss.video}>
                  <Video videoId={videoId} />
                </div>
                <div className={scss.lesson__summary}>
                  <a href="" className="link">
                    Конспект
                  </a>
                </div>
              </div>
              <div className={scss.lesson__grid_col}>
                <div className={scss.lesson__summary}>
                  <a href="" className="link">
                    Конспект
                  </a>
                </div>
                <div className={scss.video}>
                  <Video videoId={videoId} />
                </div>
              </div>
              <div className={scss.lesson__grid_col}>
                <div className={scss.lesson__deadline}>
                  <div>Дедлайны по домашнему заданию к уроку 6:</div>
                  <div className={scss.lesson__homework}>
                    <a href="" className="link">
                      Домашние задание
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr /> */}

        <VideoText
          lessonTitle="Сочетание цветов. Цветовой круг"

          lessonDescription="Гармоничная комбинация цветов аккаунта помогает клиенту формировать нужное впечатление о компании, товаре и продукте. Важно правильно подбирать оттенки и полутона, которые будут сочетаться или дополнять друг друга. Когда люди попадают на страницу профиля, первым делом обращают внимание на визуал. Он влияет на доверие и интерес у потенциальных клиентов."
          videoId="MYaPSU26bWs"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />

        {/* <hr /> */}

        {/* <VideoText
          lessonTitle="Цветовой круг."
 
          lessonDescription="Воздух -это чистое пространство на фото. Это может быть простынь, стена, небо, вода - то есть, участки на фото без лишних деталей и объектов.
Загруженные кадры - где в одном кадре много предметов либо есть шумный фон.
Шумный фон- когда на фоне в том числе находятся разные и яркие предметы."
          videoId="HbTGnKrSvMU"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        /> */}

        {/* <hr />

        <VideoText
          lessonTitle="Терминология: Референс и мудборд."
          lessonNumber="5"
          lessonDescription="Воздух -это чистое пространство на фото. Это может быть простынь, стена, небо, вода - то есть, участки на фото без лишних деталей и объектов.
Загруженные кадры - где в одном кадре много предметов либо есть шумный фон.
Шумный фон- когда на фоне в том числе находятся разные и яркие предметы."
          videoId="HbTGnKrSvMU"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />

        <hr />

        <VideoText
          lessonTitle="Предметная съемка."
          lessonNumber="5"
          lessonDescription="Воздух -это чистое пространство на фото. Это может быть простынь, стена, небо, вода - то есть, участки на фото без лишних деталей и объектов.
Загруженные кадры - где в одном кадре много предметов либо есть шумный фон.
Шумный фон- когда на фоне в том числе находятся разные и яркие предметы."
          videoId="HbTGnKrSvMU"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />

        <hr />

        <VideoText
          lessonTitle="Как делать предметную съемку."
          lessonNumber="5"
          lessonDescription="Воздух -это чистое пространство на фото. Это может быть простынь, стена, небо, вода - то есть, участки на фото без лишних деталей и объектов.
Загруженные кадры - где в одном кадре много предметов либо есть шумный фон.
Шумный фон- когда на фоне в том числе находятся разные и яркие предметы."
          videoId="HbTGnKrSvMU"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />

        <hr />

        <VideoText
          lessonTitle="Основные правила композиций в фотографии."
          lessonNumber="5"
          lessonDescription="Воздух -это чистое пространство на фото. Это может быть простынь, стена, небо, вода - то есть, участки на фото без лишних деталей и объектов.
Загруженные кадры - где в одном кадре много предметов либо есть шумный фон.
Шумный фон- когда на фоне в том числе находятся разные и яркие предметы."
          videoId="HbTGnKrSvMU"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        />

        <hr />

        <VideoText
          lessonTitle="Обработка фотографий."
          lessonNumber="5"
          lessonDescription="Воздух -это чистое пространство на фото. Это может быть простынь, стена, небо, вода - то есть, участки на фото без лишних деталей и объектов.
Загруженные кадры - где в одном кадре много предметов либо есть шумный фон.
Шумный фон- когда на фоне в том числе находятся разные и яркие предметы."
          videoId="HbTGnKrSvMU"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
        /> */}
      </div>
    </>
  );
};

export default ModuleTwo;
