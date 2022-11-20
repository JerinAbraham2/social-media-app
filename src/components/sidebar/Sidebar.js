import { Avatar } from "@mantine/core";
import "./Sidebar.css";
import profileBackground from "../../resources/imgs/poppies-174276_640.jpg";
import { Hash } from "react-feather";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const [tags, setTags] = useState([]);
  useEffect(() => {
    setTags(["netlify", "reactjs", "ui", "developer", "front-end", "vercel"])
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={profileBackground} alt="profile background" />
        <Avatar src={user.photoUrl} className="sidebar__avatar" >{user.displayName[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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
