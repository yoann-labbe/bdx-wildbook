import React from "react";
import './App.css';
import Main from './layouts/Main/Main';
import Login from "./view/Login/Login";
import Profil from './view/Profil/Profil';
import Load from './view/Login/Load';
import CreateAccount from "./view/Login/CreateAccount";
import Newpage from "./layouts/components/Header/Popuptheme/Newpage";




function App() {
  return (
    <Main>
      {/* <Home /> */}
      {/*<Login /> */}
      {/*<Load/>*/}
      {/*<<CreateAccount/>*/}
      <Newpage />
      {/* <Profil /> */}
    </Main>
  );
}

export default App;
