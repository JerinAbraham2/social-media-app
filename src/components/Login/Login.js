import "./Login.css";
import LogoBanner from "../../resources/imgs/OC-Banner-cropped-removebg-preview.png";
import { Button, FileInput, Input } from "@mantine/core";
import { Upload } from "react-feather";

const Login = () => {
  const loginToApp = () => {};
  const handleRegisterSubmit = () => {
    console.log("resgistersubmit");
  };
  return (
    <div className="login">
      <img src={LogoBanner} alt="" />
      <form onSubmit={handleRegisterSubmit}>
        <Input placeholder="Full name" label="Your profile picture" required className="login__input" />
        <Input placeholder="Email" required className="login__input" />
        <Input placeholder="Password" type="password" required className="login__input" />
        <FileInput icon={<Upload size={14} />} placeholder="Profile pic (optional)" className="login__input" />
        <Button type="submit" className="login__button" color="dark" >
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
