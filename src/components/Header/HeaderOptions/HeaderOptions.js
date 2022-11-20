import { Avatar } from "@mantine/core";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/counter/userSlice";

import "./HeaderOptions.css";

const HeaderOptions = ({ Icon, title, avatar, onClick }) => {
  const user = useSelector(selectUser);

  const [tags, setTags] = useState([]);
  useEffect(() => {
    setTags(["netlify", "reactjs", "ui", "developer", "front-end", "vercel"])
  }, [])
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptions__icon" size={30} />}
      {avatar && (
        <Avatar src={user?.photoUrl} alt="profile icon" radius={20} size={30}>{user?.displayName[0]}
        </Avatar>
      )}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
