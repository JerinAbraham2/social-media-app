import React from "react";
import { Bell, Book, Home, MessageSquare, Search, Users } from "react-feather";
import "./Header.css";
import logo from "../../resources/imgs/OC-Logo-V2.png";
import avatar from "../../resources/imgs/tobi_avatar_xs.png";
import { Input } from "@mantine/core";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import { useDispatch } from "react-redux";
import { logout } from "../../features/counter/userSlice";
import { auth } from "../firebase";

const Header = () => {
  const dispatch = useDispatch();
  
  const logoutOfApp = () => {
    dispatch(logout()); // sign out from redux
    auth.signOut();  // sign out from firebase
  }
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="logo" />
        <Input icon={<Search />} placeholder="Search" className="left__input" variant="unstyled" size="lg"/>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={Home} title="Home" />
        <HeaderOptions Icon={Users} title="Network" />
        <HeaderOptions Icon={MessageSquare} title="Messages" />
        <HeaderOptions Icon={Bell} title="Notifications" />
        <HeaderOptions Icon={Book} title="Document" />
        <HeaderOptions title="Profile" avatar={true} onClick={logoutOfApp} />
      </div>
    </div>
  );
};

export default Header;
