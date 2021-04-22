import React from "react";
import "./App.css";
import Main from "./layouts/Main/Main";
import Home from "./view/Home/Home";
import Login from "./view/Login/Login";
import Profil from "./view/Profil/Profil";
import Load from "./view/Login/Load";
import Newpage from "./layouts/components/Header/Popuptheme/Newpage";
import Theme from "./view/Theme/Theme";
import Notif from './view/Notif/Notif'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Notif from "./view/Notif/Notif";
import Theme from "./view/Theme/Theme";
import BasicTextFields from "./view/Login/Load";
import CreateAccount from "./view/Login/CreateAccount";
import EditNewPage from "./layouts/components/Header/Popuptheme/EditNewPage/EditNewPage";

function App() {
  return (
    <Main>
      <Router>
        <Switch>
          <Route path="/welcome" component={Login}/>
          <Route path="/Load" component={Load}/>
          <Route path="/CreateAccount" component={CreateAccount}/>
        </Switch>
      </Router>
      {/* <Home /> */}
      {/*<Login />*/}
      {/*<Load/>*/}
      {/*<CreateAccount/>*/}
      <Newpage />
      {/*<Theme />*/}
      {/*<Profil />*/}
      {/*<Notif />*/}
      {/*<EditNewPage />*/}
    </Main>
  );
}

export default App;
