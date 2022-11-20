import "./App.css";
import Header from "./components/Header/Header";
import { MantineProvider } from "@mantine/core";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import Login from "./components/Login/Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="app">
        <Header />

        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        )}
      </div>
    </MantineProvider>
  );
}

export default App;
