import "./App.css";
import Header from "./components/Header/Header";
import { MantineProvider } from "@mantine/core";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Login from "./components/Login/Login";
import { NotificationsProvider } from '@mantine/notifications';
import { useEffect } from "react";
import { auth } from "./components/firebase";
import Widgets from "./components/Widgets/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
      <div className="app">
        <Header />
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        )}
      </div>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;
