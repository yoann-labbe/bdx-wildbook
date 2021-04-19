import React from "react";
import './App.css';
import Footer from "./layouts/components/Footer/Footer";
import Header from "./layouts/components/Header/Header";
import Main from './layouts/Main/Main';
import Profil from './view/Profil/Profil';
import Notif from './view/Notif/Notif'
import DialogNotif from "./view/Notif/DialogNotif";


function App() {
  return (
   
    

    <Main>
      {/* <Home /> */}
      {/* <Login />*/}
      <Profil />
    {/*<Notif />*/}
    <DialogNotif />
      
    </Main>
  );
}

export default App;
