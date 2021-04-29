import React, { useContext, useEffect, useState } from "react";
import "./ProfilInfos.css";
import EditIcon from "@material-ui/icons/Edit";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import MyTextFields from "../MyTextFields";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import Upload from "../../../../common/components/Upload/Upload";
import UserContext from "../../../../context/user";
import axios from "axios";

const user = {
  formation: "Formation",
  language: "Language",
  wildYear: "Wilder since ?",
  firstName: "Name",
  campus: "Campus",
  age: "Age",
};

function ProfilInfos(props) {
  const [editionMode, setEditionMode] = useState(false);
  const [picture, setPicture] = useState("/assets/avatar2.png");
  const { connectedUser } = useContext(UserContext);

  if (connectedUser) {
    user.firstName = connectedUser.firstName;
  }

  const [form, setForm] = useState(user);
  console.log(
    "🚀 ~ file: ProfilInfos.jsx ~ line 31 ~ ProfilInfos ~ connectedUser",
    connectedUser
  );

  function handlePicture(url) {
    console.log({ picture });
    console.log(url);
    setPicture(url);
  }

  const handleClick = () => {
    if (editionMode) {
      console.log(form);
    }
    setEditionMode(!editionMode);
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }));
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get("https://wildbook-api.herokuapp.com/users._id")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div className="profil-infos">
      <div className="grid-container">
        <div className="picture">
          <img className="avatar" src={picture} alt="avatar" />
          <button className="editAvatarButton" onClick={handleClickOpen}>
            {editionMode ? (
              <PhotoCameraIcon />
            ) : (
              <PhotoCameraIcon style={{ display: "none" }} />
            )}
          </button>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Update your profile picture"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Upload handlePicture={handlePicture} />
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
        <div className="formation">
          <MyTextFields
            editionMode={editionMode}
            value={form.formation}
            onChange={handleChange}
            name={"formation"}
          />
        </div>
        <div className="language">
          <MyTextFields
            editionMode={editionMode}
            value={form.language}
            onChange={handleChange}
            name={"language"}
          />
        </div>
        <div className="wild-year">
          <MyTextFields
            editionMode={editionMode}
            value={form.wildYear}
            onChange={handleChange}
            name={"wildYear"}
          />
        </div>
        <div className="name">
          <MyTextFields
            editionMode={editionMode}
            value={form.firstName}
            onChange={handleChange}
            name={"firstName"}
          />
        </div>
        <div className="city">
          <MyTextFields
            editionMode={editionMode}
            value={form.campus}
            onChange={handleChange}
            name={"campus"}
          />
        </div>
        <div className="age">
          <MyTextFields
            editionMode={editionMode}
            value={form.age}
            onChange={handleChange}
            name={"age"}
          />
        </div>
      </div>
      <div className="button-container">
        <button className="edit-button" onClick={handleClick}>
          {editionMode ? <DoneIcon /> : <EditIcon />}
        </button>
      </div>
    </div>
  );
}

export default ProfilInfos;
