import "./index.css";
import { VIDEOS_URLS } from "./videosData";

const Videos = () => {
  return (
    <div className="characters-container">
      {VIDEOS_URLS.map((url, key) => (
        <iframe
          key={key}
          className="video-frame"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ))}
    </div>
  );
};

export default Videos;
