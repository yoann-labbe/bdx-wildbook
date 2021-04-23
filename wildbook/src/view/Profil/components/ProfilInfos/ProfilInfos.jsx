import React, { useState } from "react";
import "./ProfilInfos.css";
import EditIcon from "@material-ui/icons/Edit";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import MyTextFields from "../MyTextFields";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import Upload from "../../../../common/components/Upload/Upload";

const useStyles = makeStyles((theme) => ({
  editAvatarButton: {},
}));

const user = {
  formation: "Formation",
  language: "Language",
  wildYear: "Wilder since ?",
  userName: "Name",
  city: "City",
  age: "Age",
};

function ProfilInfos(props) {
  const [editionMode, setEditionMode] = useState(false);
  const [form, setForm] = useState(user);
  const classes = useStyles();
  const [picture, setPicture] = useState("/assets/avatar2.png");

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
            value={form.userName}
            onChange={handleChange}
            name={"userName"}
          />
        </div>
        <div className="city">
          <MyTextFields
            editionMode={editionMode}
            value={form.city}
            onChange={handleChange}
            name={"city"}
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
