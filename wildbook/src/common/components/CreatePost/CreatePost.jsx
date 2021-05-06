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
  Snackbar,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AddAPhoto,
  BorderColor,
  CheckCircleOutline,
  Done,
  YouTube,
} from "@material-ui/icons";
import Upload from "../Upload/Upload";
import axios from "axios";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles({
  root: {
    width: 800,
    height: "100%",
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
  pictureInfo: {
    marginBottom: "30px",
  },
  snackButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  validate: {
    display: "flex",
    float: "right",
  },
});

function CreatePost() {
  const classes = useStyles();

  const [name, setName] = useState({
    pictureUrl: "",
    videoUrl: "",
    text: "",
  });

  function handlePicture(url) {
    console.log({ name });
    console.log(url);
    setName({ pictureUrl: url });
  }

  const [displays, setdisplays] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "videoUrl") {
      const video =
        "https://www.youtube.com/embed/" + e.target.value.split("?v=")[1];
      setName({ ...name, videoUrl: video });
    } else {
      setName({ ...name, [e.target.name]: e.target.value });
    }
  };

  const handlepress = (e) => {
    if (e.charCode === 13) {
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

        await axios.post(
          "https://wildbook-api.herokuapp.com/posts",
          name,
          config
        );
        window.location.reload(false);
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
  const handlecloseButton = () => {
    setOpenSnack(true);
  };
  const handleCloseSnack = () => {
    setOpenSnack(false);
    setOpen(false);
  };

  return (
    <div className={classes.div}>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.centerbutton}>
            <IconButton>
              <BorderColor color="primary" style={{ fontSize: 35 }} />
            </IconButton>

            <IconButton onClick={handleClickOpen}>
              <AddAPhoto color="primary" style={{ fontSize: 35 }} />
            </IconButton>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Upload a picture"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <p className={classes.pictureInfo}>
                    "Once you have selected your file, write its <br />
                    description in "Create Your Post" and click on <br />
                    "SEND" to see it appears in the post section !"
                  </p>
                  <div className={classes.snackButton}>
                    <Upload handlePicture={handlePicture} />
                    <div className={classes.validate}>
                      <Button onClick={handlecloseButton}>
                        <p style={{ fontSize: 15 }}>validate </p>
                        <Done style={{ fontSize: 22 }} color="primary" />
                      </Button>
                    </div>
                  </div>
                  <Snackbar
                    open={openSnack}
                    autoHideDuration={800}
                    onClose={handleCloseSnack}
                  >
                    <Alert onClose={handleCloseSnack} severity="success">
                      Image successfully uploaded
                    </Alert>
                  </Snackbar>
                </DialogContentText>
              </DialogContent>
            </Dialog>

            <IconButton onClick={handleClick3}>
              <YouTube color="primary" style={{ fontSize: 35 }} />
            </IconButton>
          </div>

          <TextField
            id="filled-full-width"
            label="Create Your Post"
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
