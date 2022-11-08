import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { sidebarData } from "./SideBarData";

const Sidebar = () => {
  const [selectedId, setSelectedId] = useState("");
  return (
    <>
      <div className="sidebarSection close" id="sidebarContainer">
        <div className="miniSidebar" id="miniSidebar">
          {sidebarData.mainTabs.map((tab, i) => {
            return (
              <div
                className={`miniSidebarTab ${
                  tab.icon === selectedId && "active"
                }`}
                onClick={() => setSelectedId(tab.icon)}
                key={i}
              >
                <span className="material-symbols-rounded">{tab.icon}</span>
                <p>{tab.head}</p>
              </div>
            );
          })}
        </div>
        <div className="sidebarContainer" id="sidebarContainer">
          <div className="sidebarTabs">
            <div className="tabContainer">
              {sidebarData.mainTabs.map((tab, i) => {
                return (
                  <div
                    className={`sidebarTab ${
                      tab.icon === selectedId && "active"
                    }`}
                    onClick={() => setSelectedId(tab.icon)}
                    key={i}
                  >
                    <span className="material-symbols-rounded">{tab.icon}</span>
                    {tab.head}
                  </div>
                );
              })}
            </div>
            <div className="horizontalLine"></div>
            <div className="tabContainer">
              {sidebarData.externalTabs.map((tab, i) => {
                return (
                  <div
                    className={`sidebarTab ${
                      tab.icon === selectedId && "active"
                    }`}
                    onClick={() => setSelectedId(tab.icon)}
                    key={i}
                  >
                    <span className="material-symbols-rounded">{tab.icon}</span>
                    {tab.head}
                  </div>
                );
              })}
            </div>
            <div className="horizontalLine"></div>
            <div className="subscriptions">
              <h2 className="mainSidebarHead">Subscriptions</h2>
              {sidebarData.channels.map((tab, i) => {
                return (
                  <div className="channelTab" key={i}>
                    <img src={tab.logo} alt="" />
                    <p>{tab.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="horizontalLine"></div>
            <div className="explore">
              <h2 className="mainSidebarHead">Explore</h2>
              {sidebarData.explore.map((tab, i) => {
                return (
                  <div className="sidebarTab" key={i}>
                    <span className="material-symbols-rounded">{tab.icon}</span>
                    {tab.head}
                  </div>
                );
              })}
            </div>
            <div className="horizontalLine"></div>
            <div className="moreYoutube">
              <h2 className="mainSidebarHead">More on Youtube</h2>
              {sidebarData.moreYoutubes.map((tab, i) => {
                return (
                  <div className="youtubeTabs" key={i}>
                    <img src={tab.logo} alt={tab.name} />
                    <p>{tab.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="horizontalLine"></div>
            <div className="tabContainer">
              {sidebarData.settings.map((tab, i) => {
                return (
                  <div className="sidebarTab" key={i}>
                    <span className="material-symbols-rounded">{tab.icon}</span>
                    {tab.head}
                  </div>
                );
              })}
            </div>
            <div className="horizontalLine"></div>
            <div className="sidebarBottomLinks">
              <Link to="/">About</Link>
              <Link to="/">Press</Link>
              <Link to="/">Copyright</Link>
              <Link to="/">Contact</Link>
              <Link to="/">Creator</Link>
              <Link to="/">Advertise</Link>
              <Link to="/">Developer</Link>
            </div>
            <div className="sidebarBottomLinks">
              <Link to="/">Terms</Link>
              <Link to="/">Privacy</Link>
              <Link to="/">Policy &amp; Safety</Link>
              <Link to="/">How Youtube works</Link>
              <Link to="/">Test new features</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
