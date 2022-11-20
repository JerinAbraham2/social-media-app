import { Avatar } from "@mantine/core";
import React from "react";
import "./HeaderOptions.css";

const HeaderOptions = ({ Icon, title, avatar, onClick }) => {
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOptions__icon" size={30} />}
      {avatar && <Avatar src={avatar} alt="profile icon" size={30} />}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
