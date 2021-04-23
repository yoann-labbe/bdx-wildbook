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
import CreateAccount from "./view/Login/CreateAccount";
import EditNewPage from "./layouts/components/Header/Popuptheme/EditNewPage/EditNewPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route
            exact
            path="/welcome"
            render={() => (
              <Main>
                <Login />
              </Main>
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Main>
                <Home />
              </Main>
            )}
          />
          <Route
            exact
            path="/topics"
            render={() => (
              <Main>
                <Theme />
              </Main>
            )}
          />
          <Route
            exact
            path="/profil"
            render={() => (
              <Main>
                <Profil />
              </Main>
            )}
          />
      <Route
            exact
            path="/Load"
            render={() => (
              <Main>
                <Load />
              </Main>
            )}
          />
   <Route
            exact
            path="/Account"
            render={() => (
              <Main>
                <CreateAccount />
              </Main>
            )}
          />
   <Route
            exact
            path="/Newpage"
            render={() => (
              <Main>
                <Newpage />
              </Main>
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
