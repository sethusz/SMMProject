import React from 'react';
import scss from './VideoText.module.scss'; // Import the SCSS module

const VideoText = ({ lessonNumber, lessonTitle, lessonDescription, videoId, deadline, list }) => {
  return (
    <>
      <div className={`${scss.lesson__content} ${scss.lesson}`}>
        <div className={scss.lesson__lesson}>Урок {lessonNumber}</div>
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
          <div className={scss.module__contentTwo}>
            <div className={scss.module__descr}>{lessonDescription}</div>
            {list && <ul>
              <li>Никнейм</li>
              <li> Аватар</li>
              <li> Шапка </li>
              <li>профиля</li>
              <li> Актуальные</li>
              <li>  Визуал  </li>
            </ul> }
            <div className={scss.module__deadline}>
              <div>{deadline}</div>
              <div className={scss.module__homework}>Домашние задание</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoText;