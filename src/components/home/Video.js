import React from "react";
import "./Video.css";

const Video = ({ video }) => {
  const countViews = (numbers) => {
    if (numbers.toString().length === 4) {
      return numbers.toString().slice(0, 1) + "K";
    }
    if (numbers.toString().length === 5) {
      return numbers.toString().slice(0, 2) + "K";
    }
    if (numbers.toString().length === 6) {
      return numbers.toString().slice(0, 3) + "K";
    }
    if (numbers.toString().length === 7) {
      return numbers.toString().slice(0, 1) + "M";
    }
  };
  return (
    <>
      <div className="videoBox">
        <div className="thumbnailInfo">
          <img src={video.image} alt="Thumbnail" className="videoThumbnail" />
          <p>
            <a href={video.image} download>
              download
            </a>
          </p>
        </div>
        <div className="videoInfo">
          <img src={video.logo} alt="Channel logo" className="video_channel" />
          <div>
            <h2>
              {video.title.length <= 70
                ? video.titel
                : `${video.title.substr(0, 70)}...`}
            </h2>
            <h3>
              {video.channel}
              {video.isVerified && (
                <span className="material-symbols-rounded active">
                  check_circle
                </span>
              )}
            </h3>
            <p>
              {countViews(video.views)} views * {video.uploadTime} ago
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
