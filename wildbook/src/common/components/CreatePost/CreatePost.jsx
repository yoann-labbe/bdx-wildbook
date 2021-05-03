import {
  TextField,
  IconButton,
  CardContent,
  Card,
  Button,
  Dialog,
  DialogContentText,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AddAPhoto, BorderColor, YouTube } from "@material-ui/icons";
import Upload from "../Upload/Upload";
import axios from "axios";
import UserContext from "../../../context/user";

const useStyles = makeStyles({
  root: {
    width: 800,
    height: "100%",
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },
  sendB: {
    float: "right",
    marginBottom: 5,
  },
  centerbutton: {
    display: "flex",
    justifyContent: "space-between",
  },

  div: {
    marginBottom: "30px",
  },
});

function CreatePost() {
  const { connectedUser } = useContext(UserContext);
  const classes = useStyles();

  function handlePicture(url) {
    console.log({ picture });
    console.log(url);
    setPicture(url);
  }

  const [picture, setPicture] = useState();
  const [name, setName] = useState({
    pictureUrl: "",
    videoUrl: "",
    text: "",
  });
  const [displays, setdisplays] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handlepress = (e) => {
    if (e.charCode == 13) {
      console.log(name);
    }
  };
  const handleClick2 = async () => {
    try {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const token = await axios.post(
          "https://wildbook-api.herokuapp.com/posts",
          name,
          config
        );
        console.log(token.data);
      }
    } catch (e) {
      //ici afficher un message d'erreur  à l'utilisateur
    }
  };

  const handleClick3 = () => {
    setdisplays(!displays);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.div}>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.centerbutton}>
            <IconButton>
              <BorderColor color="primary" style={{ fontSize: 55 }} />
            </IconButton>

            <IconButton onClick={handleClickOpen}>
              <AddAPhoto color="primary" style={{ fontSize: 55 }} />
            </IconButton>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Update your picture"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Upload handlePicture={handlePicture} />
                </DialogContentText>
              </DialogContent>
            </Dialog>

            <IconButton onClick={handleClick3}>
              <YouTube color="primary" style={{ fontSize: 55 }} />
            </IconButton>
          </div>

          <TextField
            id="filled-full-width"
            label="Creer un post"
            size="small"
            variant="outlined"
            style={{ margin: 10 }}
            placeholder="Post..."
            fullWidth
            margin="normal"
            name={"text"}
            value={name.text}
            onChange={handleChange}
            onKeyPress={handlepress}
          ></TextField>

          {displays && (
            <TextField
              id="filled-full-width"
              label="YouTube URL..."
              size="small"
              variant="outlined"
              style={{ margin: 10 }}
              placeholder="Post..."
              fullWidth
              margin="normal"
              name={"videoUrl"}
              value={name.videoUrl}
              onChange={handleChange}
              onKeyPress={handlepress}
            ></TextField>
          )}

          <Button
            variant="contained"
            color="primary"
            className={classes.sendB}
            onClick={handleClick2}
          >
            send
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
export default CreatePost;
