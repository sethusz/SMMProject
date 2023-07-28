import React from 'react';
import scss from './TextVideoHW.module.scss'; // Import the SCSS module

const TextVideoHW = ({ lessonNumber, lessonTitle, lessonDescription, videoId, deadline }) => {
  return (
    <>
      <div className={`${scss.lesson__content} ${scss.lesson}`}>
        <div className={scss.lesson__lesson}>Урок {lessonNumber}</div>
        <div className={scss.lesson__title}>{lessonTitle}</div>
        <div className={scss.lesson__descr}>{lessonDescription}</div>
        <div className={scss.module__content}>
          <div className={scss.module__video}>
            <iframe
              style={{ width: '500px' }}
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?showinfo=0`}
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <div className={scss.module__summary}>Конспект</div>
          </div>
          <div className={scss.module__deadline}>
            <div>{deadline}</div>
            <div className={scss.module__homework}>Домашние задание</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextVideoHW;
