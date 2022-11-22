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
    if (!email || !password) {
      showNotification({
        title: "Sign in: Fill your email and password",
        message: "If you are signing in, please fill out your email and password",
      });
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: userAuth.user.photoURL,
            })
          );
        })
        .catch((error) => alert(error));
    }
  };

  const handleRegisterSubmit = async (e) => {
    if (!name || !email || !password) {
      e.preventDefault();
      showNotification({
        title: "Registering: Fill out form",
        message: "If you are registering, please fill out the full form (profile picture is optional)",
      });
    } else {
      try {
        const userAuth = await auth.createUserWithEmailAndPassword(email, password);
        await userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        });
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic,
          })
        );
      } catch (message) {
        alert(message);
      }
      window.location.reload(true);
    }
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
