import { Avatar } from "@mantine/core";
import "./Sidebar.css";
import profileBackground from "../../resources/imgs/poppies-174276_640.jpg";
import { Hash } from "react-feather";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setTags(["netlify", "reactjs", "ui", "developer", "front-end", "vercel"])
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={profileBackground} alt="profile background" />
        <Avatar className="sidebar__avatar" />
        <h2>Tobi Turner</h2>
        <h4>tobiturner@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,483</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">9,812</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p className="sidebar__recent">Recent</p>
        {tags.map(tag => (
          <div className="sidebar__tags">
            <Hash className="sidebar__hash"/>
            <p className="sidebar__recentItem">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
