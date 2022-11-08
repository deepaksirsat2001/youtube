import React, { useState } from "react";
import { Adbanner, YoutubeLogo } from "../../Assets/ImageIndex";
import "./Home.css";
import { categoryData } from "./HomeData";
import Video from "./Video";
import Videos from "./Video.json";

const Home = () => {
  const [category, setCategory] = useState("");
  const { videos } = Videos;
  const [onDisplay, setOnDisplay] = useState(videos);

  const handleCategory = (tab) => {
    setCategory(tab);
    if (tab === "All") {
      setOnDisplay(videos);
      return;
    }
    setOnDisplay(videos.filter((video) => video.category === tab));
  };

  return (
    <>
      <div className="homeContainer" id="homeContainer">
        <div className="categoryContainer">
          {categoryData.map((tab, i) => {
            return (
              <h3
                className={`categoryTab ${category === tab && "active"}`}
                key={i}
                onClick={() => handleCategory(tab)}
              >
                {tab}
              </h3>
            );
          })}
        </div>
        <div className="homeBanner">
          <img src={Adbanner} alt="Ad Banner" className="youtubeAdBanner" />
          <div className="infoBox">
            <div>
              <img src={YoutubeLogo} alt="Youtube Logo" />
              <h2>Watch Everything you love</h2>
              <button>GIT IT NOW</button>
            </div>
          </div>
        </div>
        <div className="videoContainer">
          {onDisplay.map((video, i) => (
            <Video video={video} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
