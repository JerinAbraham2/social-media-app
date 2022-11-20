import "./Login.css";
import LogoBanner from "../../resources/imgs/OC-Banner-cropped-removebg-preview.png";
import { Button, Input } from "@mantine/core";
import { auth } from "../firebase";
import { useState } from "react";
import { showNotification } from "@mantine/notifications";
import { useDispatch } from "react-redux";
import { login } from "../../features/counter/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const handleRegisterSubmit = (e) => {
    if (!name) {
      e.preventDefault();
      alert("please enter full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src={LogoBanner} alt="" />
      <form>
        <Input placeholder="Full name" label="Your profile picture" className="login__input" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="login__input" />
        <Input placeholder="Password" type="password" className="login__input" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input placeholder="Profile pic URL (optional)" className="login__input" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} />
        <Button className="login__button" color="dark" onClick={loginToApp}>
          Sign in
        </Button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={handleRegisterSubmit}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
