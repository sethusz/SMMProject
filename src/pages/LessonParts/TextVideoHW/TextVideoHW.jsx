import React from 'react';
import scss from './TextVideoHW.module.scss'; // Import the SCSS module

const TextVideoHW = ({

  lessonTitle,
  lessonDescription,
  videoId,
  deadline,
  secondLink,
  secondSummary,
  firstConspect,
}) => {
  return (
    <>
      <div className={`${scss.lesson__content} lesson`}>
        <div className={scss.content}>
          <div className={scss.lesson__lesson}>
             {lessonTitle}
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
              <div className={scss.module__summary}>
                <a href={firstConspect} className="link">
                  Конспект
                </a>
              </div>
              {secondSummary && (
                <div className={scss.module__summary}>
                  <a href={secondLink} className="link">
                    {secondSummary}
                  </a>
                </div>
              )}
            </div>
            <div className={scss.module__deadline}>
              <div>{deadline}</div>
              <div className={scss.module__homework}>
                <a href="" className="link">
                  Домашние задание
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextVideoHW;
