import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import DialogNotif from "../../../view/Notif/DialogNotif";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ChangePassword from "./Popuptheme/ChangePassword";
import SearchBar from "./SearchBar";
import UserContext from "../../../context/user";
import axios from "axios";

const useStyles = makeStyles(() => ({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    listStyle: "none",
    color: "rgb(247, 108, 109)",
    backgroundColor: "rgb(250, 248, 248)",
    boxShadow: "0px 3px 15px #b3b3b3",
    margin: "0 auto",
    paddingLeft: 0,
    fontSize: "30px",
    height: "70px",
  },

  logo: {
    width: "80px",
    height: "150px",
    justifyContent: "flex-start",
    paddingLeft: "5px",
    display: "flex",
    paddingTop: "35px",
  },

  items: {
    fontFamily: "Bebas Neue",
    textDecoration: "none",
  },

  input: {
    width: "150px",
    height: "30px",
    borderRadius: "5px",
    borderColor: "rgb(248, 245, 245)",
    color: "rgb(247, 108, 109)",
  },

  profil: {
    border: "rgb(226, 107, 107) 1px solid",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "65px",
    width: "300px",
    padding: "10px",
    margin: "8px",
  },

  icons: {
    color: "rgb(226, 107, 107)",
  },

  Menu: {
    backgroundColor: "rgb(250, 248, 248)",
    color: "rgb(226, 107, 107)",
  },

  link: {
    fontStyle: "none",
  },

  UserTitle: {
    fontSize: "20px",
    fontFamily: "Bebas Neue",
  },
}));

function Header(props) {
  const [openDialogue, setOpenDialogue] = useState(false);
  const handleClose = () => {
    setOpenDialogue(false);
  };
  const { connectedUser, setConnectedUser } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState({});
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const disconnect = () => {
    setConnectedUser({});
  };

  const handleClosed = () => {
    setAnchorEl(null);
    setConnectedUser({});
    localStorage.removeItem("userToken");
    history.push("/welcome");
  };

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    console.log({ searchValue, [e.target.value]: e.target.value });
  };

  const [open, setOpen] = useState(false);

  const handleEnd = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [iconAvatar, setIconAvatar] = useState({});

  useEffect(() => {
    getIcon();
  }, [connectedUser]);

  const getIcon = () => {
    try {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken && Object.keys(connectedUser).length > 0) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        axios
          .get(
            `https://wildbook-api.herokuapp.com/users/${connectedUser._id}`,
            config
          )
          .then((response) => response.data)
          .then((data) => {
            setIconAvatar(data);
            console.log(
              "🚀 ~ file: Header.jsx ~ line 155 ~ .then ~ data",
              data
            );
          });
      }
    } catch (e) {
      //ici afficher un message d'erreur  à l'utilisateur
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <img
          src="./assets/newLogo.png"
          alt="logo"
          className={classes.logo}
        ></img>
      </Link>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <p className={classes.items}>NEWS</p>
      </Link>
      <Link to="/topics" style={{ color: "inherit", textDecoration: "none" }}>
        <p className={classes.items}>TOPICS</p>
      </Link>
      <SearchBar />
      <div className={classes.profil}>
        <Link
          to={"/profile/users/" + connectedUser._id}
          style={{
            color: "inherit",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          {connectedUser._id ? (
            <img
              className={classes.iconAvatar}
              src={iconAvatar.avatarUrl}
              alt={connectedUser.firstName}
            />
          ) : (
            <AccountCircleIcon style={{ fontSize: 60 }} />
          )}
        </Link>
        <p style={{ fontSize: "18px", color: "secondary", marginLeft: "10px" }}>
          {connectedUser.firstName} {connectedUser.lastName}
        </p>
        <IconButton
          className={classes.icons}
          onClick={() => setOpenDialogue(true)}
        >
          <NotificationsIcon />{" "}
        </IconButton>
        <IconButton className={classes.icons} onClick={handleClick}>
          <SettingsIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClosed}
        >
          <Link
            to="/profile/users/:_id"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <MenuItem className={classes.Menu} onClick={handleClosed}>
              Modify Profile
            </MenuItem>
          </Link>
          <MenuItem
            className={classes.Menu}
            onClick={(handleClosed, handleClickOpen)}
          >
            Change password
          </MenuItem>
          <Link
            to="/welcome"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <MenuItem className={classes.Menu} onClick={handleClosed}>
              Logout
            </MenuItem>
          </Link>
        </Menu>
      </div>

      <DialogNotif open={openDialogue} onClose={handleClose} />

      <Dialog
        open={open}
        onClose={handleEnd}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ width: "450px", margin: "0 auto" }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Change your password"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ChangePassword />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
