import ReactPlayer from 'react-player';
import scss from './Video.module.scss';
export const Video = ({ videoId, height = '200' }) => {
  return (
    <div className={scss.video}>
      {/* <ReactPlayer url={`https://www.youtube.com/embed/${videoId}?showinfo=0`} /> */}
      <iframe
        style={{ width: '100%', height: `${height}px` }}
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?showinfo=0`}
        title="YouTube Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen></iframe>
      {/* <div className={scss.module__summary}>Конспект</div> */}
    </div>
  );
};
