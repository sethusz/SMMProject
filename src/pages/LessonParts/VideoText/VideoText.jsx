import React from 'react';
import scss from './VideoText.module.scss'; // Import the SCSS module

const VideoText = ({ lessonNumber, lessonTitle, lessonDescription, videoId, deadline, list }) => {
  return (
    <>
      <div className={`${scss.lesson__content} ${scss.lesson}`}>
        <div className={scss.lesson__lesson}>
          Урок {lessonNumber}. {lessonTitle}
        </div>
        <div className={`${scss.module__content} ${scss.content}`}>
          <div className={scss.module__video}>
            <iframe
              style={{ width: '100%' }}
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?showinfo=0`}
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen></iframe>
            <div className={scss.module__summary}>Конспект</div>
          </div>
          <div className={scss.module__contentTwo}>
            <div className={scss.module__descr}>{lessonDescription}</div>
            {list && (
              <ol type="1" className={scss.module__list}>
                <li>Никнейм</li>
                <li> Аватар</li>
                <li> Шапка профиля </li>
                <li> Актуальные</li>
                <li> Визуал </li>
              </ol>
            )}
            <div className={scss.module__deadline}>
              <div>{deadline}</div>
              <div className={scss.module__homework}>Домашние задание</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoText;
