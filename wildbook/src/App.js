import React from "react";
import './App.css';
import Main from './layouts/Main/Main';
import Home from "./view/Home/Home";
import Login from "./view/Login/Login";
import Profil from './view/Profil/Profil';
import Load from './view/Login/Load';
import Newpage from "./layouts/components/Header/Popuptheme/Newpage";
import Notif from './view/Notif/Notif'
import Theme from "./view/Theme/Theme";
import BasicTextFields from "./view/Login/Load";
import CreateAccount from "./view/Login/CreateAccount";

function App() {
  return (
    <Main>
      <Home />{/*<Home />*/}
      {/*<Profil />*/}
      {/*<Theme />*/}
      {/*<Login /> */}
      {/*<Load />*/}
      {/*<Newpage />*/}
      {/*<Notif />*/}
      {/*<CreateAccount />*/}
    </Main>
  );
}

export default App;
