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
          homework={'https://docs.google.com/document/d/1ROSOVHYoU7aXK4tW6CnidysnHXarFvtf/edit?usp=drive_link&ouid=114783473414938878123&rtpof=true&sd=true'}
        />

        <hr />

        <TextVideoHW
        homeworkLink={'https://docs.google.com/document/d/1SS817oUIQmiWxWVLMwQV29cEkPZGgm-s/edit?usp=drive_link&ouid=114783473414938878123&rtpof=true&sd=true'}
          lessonTitle="Терминология. Референс и мудборд."
          lessonDescription="Визуал и визуальная концепция - это ваша лента в инстаграме, эстетичная и гармоничная, состоящая из ваших фото (не используйте чужие фото для построения ленты). Для того, чтобы выстроить гармоничную ленту вам понадобится планер.
          Референс - это фото, взятое в приложении Пинтерест, на просторах Инстаграм или из других источников, которое вам понравилось и вы захотели повторить это фото. То есть это пример, материал для вдохновения. Вдохновляться можно кадрами из фильмов, модными показами, фото из журналов, старыми фотографиями и тд. Из референсов складывается ваш мудборд."
          videoId="uOpQlctfYcI" 
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          secondSummary={'Конспект Урока 2'}
          firstConspect="https://drive.google.com/file/d/1yaaGmvl5Cq_RLqD-7dkTmmSw4n074Hmh/view?usp=drive_link"
          secondLink="https://drive.google.com/file/d/15Ig1VnzaHld44Aeu9lkCo1tykfEbxQL3/view?usp=drive_link"
        />

        <hr />






        <VideoText
          lessonTitle="Размеры фотографий в ленте."
        homework={'https://docs.google.com/document/d/1yeRVS8QMyU8Eq1adtLOjquE1LNOVmlXc/edit?usp=drive_link&ouid=114783473414938878123&rtpof=true&sd=true'}
          lessonDescription="Для того, чтобы ваша лента выглядела гармонично и интересно, не забывайте о разноплановости кадра. Кадр может быть: ближнего, среднего и дальнего плана. Рассмотрим на примере человека - только лицо (сэлфи) = ближний план. Средний план - фото по пояс. Дальний план - человек сфотографирован полностью + мы видим не только самого человека, но и атмосферу вокруг него."
          videoId="VwiTQW1dw-U"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          link={'https://drive.google.com/file/d/1WpqHfWK9xDNNI83utg4Ka2aAavxlBBWy/view?usp=drive_link'}
        />



        <hr />

        <VideoText
          lessonTitle="Расположение фотографий в ленте."
homework={'https://docs.google.com/document/d/1mOz9JMPYRjBbGFznPSi0EI_9hhUfEaP9/edit?usp=drive_link&ouid=114783473414938878123&rtpof=true&sd=true'}
          lessonDescription="Самый популярный и удобный способ расположения фотографий в ленте: чередуете крупный план - дальний план - детальное фото - фото в полный рост. Таким образом, профиль выглядит гармонично и не перегруженно."
          videoId="JWdYfHKpDRI"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          link={'https://drive.google.com/file/d/1s-klPdvkuswL0BqY8ZIVBywJvq4kpMTV/view?usp=drive_link'}
        />

        <hr />

        <VideoText
          lessonTitle="Воздух. Загруженные кадры в ленте.Тренды визуала."
homework={'https://docs.google.com/document/d/1trE6XG-nWnXWxkRA7jj-kM-o2h-HSfhV/edit?usp=drive_link&ouid=114783473414938878123&rtpof=true&sd=true'}
          lessonDescription="Воздух -это чистое пространство на фото. Это может быть простынь, стена, небо, вода - то есть, участки на фото без лишних деталей и объектов.
Загруженные кадры - где в одном кадре много предметов либо есть шумный фон.
Шумный фон- когда на фоне в том числе находятся разные и яркие предметы."
          videoId="HbTGnKrSvMU"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          link={'https://drive.google.com/file/d/1Cq4YCIXbG7d9wadGB0VfwarR-At4qTHm/view?usp=drive_link'}
          secondConspect={'https://drive.google.com/file/d/1kLPJ0JCk6Dl4n1FiIZrfA9AY_-OWUXC6/view?usp=drive_link'}
        />

        <hr />



        <VideoText
          lessonTitle="Сочетание цветов. Цветовой круг"
    homework={'https://docs.google.com/document/d/1PaAq4NT9tN-sTn99E13vIKVyqwTAw1au/edit?usp=drive_link&ouid=114783473414938878123&rtpof=true&sd=true'}
          lessonDescription="Гармоничная комбинация цветов аккаунта помогает клиенту формировать нужное впечатление о компании, товаре и продукте. Важно правильно подбирать оттенки и полутона, которые будут сочетаться или дополнять друг друга. Когда люди попадают на страницу профиля, первым делом обращают внимание на визуал. Он влияет на доверие и интерес у потенциальных клиентов."
          videoId="MYaPSU26bWs"
          deadline="Дедлайн по домашнему заданию к урокам 1 и 2:"
          link={'https://drive.google.com/file/d/1GNCDgAjU-_8eF7mUxvPeZu7J_e8N6O1g/view?usp=drive_link'}
          secondConspect={'https://drive.google.com/file/d/13-ASip-2vhgsVSWylir1nnmTQiaJctc3/view?usp=drive_link'}
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
