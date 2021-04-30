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

function ProfilInfos(props) {
  const [editionMode, setEditionMode] = useState(false);
  const [picture, setPicture] = useState("/assets/avatar2.png");
  const { connectedUser } = useContext(UserContext);

  const [form, setForm] = useState({});

  function handlePicture(url) {
    console.log({ picture });
    console.log(url);
    // setPicture(url);
  }

  const handleClick = async () => {
    if (editionMode) {
      try {
        const accessToken = localStorage.getItem("userToken");
        if (accessToken) {
          const config = {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };
          const updatedUser = await axios.patch(
            `https://wildbook-api.herokuapp.com/users/${form._id}`,
            form,
            config
          );
          setForm(updatedUser.data);
        }
      } catch (e) {}
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
    getUsersInfos();
  }, []);

  const getUsersInfos = () => {
    try {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        axios
          .get(
            `https://wildbook-api.herokuapp.com/users/${props.userId}`,
            config
          )
          .then((response) => response.data)
          .then((data) => {
            console.log(data);
            setForm(data);
          });
      }
    } catch (e) {
      //ici afficher un message d'erreur  à l'utilisateur
    }
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
            placeholder="Formation"
          />
        </div>
        <div className="language">
          <MyTextFields
            editionMode={editionMode}
            value={form.language}
            onChange={handleChange}
            name={"language"}
            placeholder="Language"
          />
        </div>
        <div className="wild-year">
          <MyTextFields
            editionMode={editionMode}
            value={form.wildYear}
            onChange={handleChange}
            name={"wildYear"}
            placeholder="Wilder Since ?"
          />
        </div>
        <div className="name">
          <MyTextFields
            editionMode={editionMode}
            value={form.firstName}
            onChange={handleChange}
            name={"firstName"}
            placeholder="firstName"
          />
        </div>
        <div className="city">
          <MyTextFields
            editionMode={editionMode}
            value={form.campus}
            onChange={handleChange}
            name={"campus"}
            placeholder="campus"
          />
        </div>
        <div className="age">
          <MyTextFields
            editionMode={editionMode}
            value={form.age}
            onChange={handleChange}
            name={"age"}
            placeholder="age"
          />
        </div>
      </div>
      <div className="button-container">
        {connectedUser._id === form._id && (
          <button className="edit-button" onClick={handleClick}>
            {editionMode ? <DoneIcon /> : <EditIcon />}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfilInfos;
