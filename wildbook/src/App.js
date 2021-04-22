import React from "react";
import './App.css';
import Footer from "./layouts/components/Footer/Footer";
import Header from "./layouts/components/Header/Header";
import Main from './layouts/Main/Main';
import Home from "./view/Home/Home";
import Login from "./view/Login/Login";
import Profil from './view/Profil/Profil';
import Load from './view/Login/Load';
import CreateAccount from "./view/Login/CreateAccount";
import Newpage from "./layouts/components/Header/Popuptheme/Newpage";



import Notif from './view/Notif/Notif'
import CreatePost from "./common/components/CreatePost/CreatePost";

function App() {
  return (
    <Main>
      {/* <Home /> */}
      {/*<Login /> */}
      {/*<Load/>*/}
      {/*<<CreateAccount/>*/}
     {/*} <Newpage />*/}
    <Profil /> 
    {/*<Notif />*/}
    
      
    </Main>
  );
}

export default App;
