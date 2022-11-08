import React, { useState } from "react";
import { Avatar, Whitelogo, Blacklogo } from "../../Assets/ImageIndex";
import "./Navbar.css";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [openNav, setOpenNav] = useState(false);
  const [search, setSearch] = useState("");
  const handleSidebar = () => {
    const sidebarContainer = document.getElementById("sidebarContainer");
    sidebarContainer.classList.toggle("close");
    const homeContainer = document.getElementById("homeContainer");
    homeContainer.classList.toggle("changePadding");
  };

  const handleTheme = () => {
    const rootElement = document.getElementById("root");
    rootElement.classList.toggle("dark-theme");
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <header>
      <div className="headerDiv">
        <div>
          <div className="humburger" onClick={() => handleSidebar()}>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <img
            src={isDarkTheme ? Whitelogo : Blacklogo}
            alt="Youtube logo"
            title="Youtube"
          />
        </div>
        <div className="searchContainer">
          <div className="searchBox">
            <input
              type="text"
              placeholder="search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search !== "" && (
              <span
                className="material-symbol-rounded"
                onClick={() => setSearch("")}
              >
                close
              </span>
            )}
          </div>
          <div className="searchBtn">
            <span className="material-symbol-rounded">search</span>
          </div>
          <div className="searchMic">
            <span className="material-symbol-rounded active">mic</span>
          </div>
        </div>
        <div className="profileContainer">
          <span className="material-symbols-rounded">add_box</span>
          <span className="material-symbols-rounded">notification</span>
          <img src={Avatar} alt="Avatar" onClick={() => setOpenNav(!openNav)} />
        </div>
      </div>
      {openNav && (
        <div className="profileBtns">
          <div className="avatarInfo profileTab">
            <img src={Avatar} alt="avatar" />
            <p>teenage programmer</p>
          </div>
          <div className="horizontalLine"></div>
          <div className="profileTabs">
            <div className="profileTab">
              <span className="material-symbols-rounded">account_box</span>
              <p>channel</p>
            </div>
            <div className="profileTab">
              <span className="material-symbols-rounded">play_circle</span>
              <p>studio</p>
            </div>
          </div>
          <div className="horizontalLine"></div>
          <div className="profileTabs">
            <div className="profileTab">
              <span className="material-symbols-rounded">logout</span>
              <p>logout</p>
            </div>
            {isDarkTheme && (
              <div className="profileTab" onClick={() => handleTheme()}>
                <span className="material-symbols-rounded">light_mode</span>
                <p>light mode</p>
              </div>
            )}
            {!isDarkTheme && (
              <div className="profileTab" onClick={() => handleTheme()}>
                <span className="material-symbols-rounded">bedtime</span>
                <p>dark mode</p>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
