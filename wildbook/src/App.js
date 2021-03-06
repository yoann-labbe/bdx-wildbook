import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./layouts/Main/Main";
import Home from "./view/Home/Home";
import Login from "./view/Login/Login";
import Profil from "./view/Profil/Profil";
import Newpage from "./layouts/components/Header/Popuptheme/Newpage";
import Theme from "./view/Theme/Theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import UserContext from "./context/user";
import axios from "axios";
import Minimal from "./layouts/Minimal/Minimal";
import NotFound from "./common/NotFound";

function App() {
  const [connectedUser, setConnectedUser] = useState({});
  useEffect(() => {
    const connectUser = async () => {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const userProfile = await axios.get(
          "https://wildbook-api.herokuapp.com/users/profile",
          config
        );
        setConnectedUser(userProfile.data);
      }
    };

    connectUser();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ connectedUser, setConnectedUser }}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route
              exact
              path="/welcome"
              render={() => (
                <Minimal>
                  <Login />
                </Minimal>
              )}
            />
            <Route
              exact
              path="/"
              render={() => {
                if (connectedUser && connectedUser._id) {
                  return (
                    <Main>
                      <Home />
                    </Main>
                  );
                } else {
                  return (
                    <Redirect
                      to={{
                        pathname: "/welcome",
                        state: { from: window.location.pathname },
                      }}
                    />
                  );
                }
              }}
            />
            <Route
              exact
              path="/topics"
              render={() => {
                if (connectedUser && connectedUser._id) {
                  return (
                    <Main>
                      <Theme />
                    </Main>
                  );
                } else {
                  return (
                    <Redirect
                      to={{
                        pathname: "/welcome",
                        state: { from: window.location.pathname },
                      }}
                    />
                  );
                }
              }}
            />
            <Route
              exact
              path="/profile/users/:id"
              render={(props) => {
                if (connectedUser && connectedUser._id) {
                  return (
                    <Main>
                      <Profil {...props} />
                    </Main>
                  );
                } else {
                  return (
                    <Redirect
                      to={{
                        pathname: "/welcome",
                        state: { from: window.location.pathname },
                      }}
                    />
                  );
                }
              }}
            />
            <Route
              exact
              path="/newpage"
              render={() => {
                if (connectedUser && connectedUser._id) {
                  return (
                    <Main>
                      <Newpage />
                    </Main>
                  );
                } else {
                  return (
                    <Redirect
                      to={{
                        pathname: "/welcome",
                        state: { from: window.location.pathname },
                      }}
                    />
                  );
                }
              }}
            />
            <Route
              path="/*"
              render={() => (
                <Minimal>
                  <NotFound />
                </Minimal>
              )}
            />
          </Switch>
        </Router>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
