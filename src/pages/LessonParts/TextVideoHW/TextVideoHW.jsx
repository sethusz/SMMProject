import React from 'react';
import scss from './TextVideoHW.module.scss'; // Import the SCSS module

const TextVideoHW = ({
  lessonNumber,
  lessonTitle,
  lessonDescription,
  videoId,
  deadline,
  secondSummary,
}) => {
  return (
    <>
      <div className={`${scss.lesson__content} lesson`}>
        <div className={scss.content}>
          <div className={scss.lesson__lesson}>
            Урок {lessonNumber}. {lessonTitle}
          </div>
          {/* <div className={scss.lesson__title}>{lessonTitle}</div> */}
          <div className={scss.lesson__descr}>{lessonDescription}</div>
          <div className={scss.module__content}>
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
              {secondSummary && <div className={scss.module__summary}>{secondSummary}</div>}
            </div>
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

export default TextVideoHW;
