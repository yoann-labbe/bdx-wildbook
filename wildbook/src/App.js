import React from "react";
import "./App.css";
import Main from "./layouts/Main/Main";
import Home from "./view/Home/Home";
import Login from "./view/Login/Login";
import Profil from "./view/Profil/Profil";
import Load from "./view/Login/Load";
import Newpage from "./layouts/components/Header/Popuptheme/Newpage";
import Notif from "./view/Notif/Notif";
import DialogNotif from "./view/Notif/DialogNotif";
import Theme from "./view/Theme/Theme";
import BasicTextFields from "./view/Login/Load";
import CreateAccount from "./view/Login/CreateAccount";
import EditNewPage from "./layouts/components/Header/Popuptheme/EditNewPage/EditNewPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Main>
      <Router>
        <Switch>
          <Route path="/welcome" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Theme} />
          <Route path="/profil" component={Profil} />
        </Switch>
      </Router>

      {/*<Home />*/}
      {/*<Profil />*/}
      {/*<Theme />*/}
      {/*<Login /> */}
      {/*<Load />*/}
      {/*<Newpage />*/}
      {/*<Notif />*/}
      {/*<CreateAccount />*/}
      {/*<EditNewPage />*/}
    </Main>
  );
}

export default App;
