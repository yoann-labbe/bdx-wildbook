import {
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AddAPhoto, BorderColor, YouTube } from "@material-ui/icons";
import Upload from "../Upload/Upload";
import axios from "axios";
import UserContext from "../../../context/user";


const useStyles = makeStyles({
  root: {
    width: 600,
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

function CreatePost(props) {
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

  const handleChange = (e) => {
    setName(e.target.value);
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
  const handlepress = (e) => {
    if (e.charCode == 13) {
      console.log(name);
    }
  };

 
  return (
    <div className={classes.div}>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.centerbutton}>
            <IconButton >
              <BorderColor color="primary" style={{ fontSize: 55 }} />
            </IconButton>


            <IconButton>
              <AddAPhoto color="primary" style={{ fontSize: 55 }} />
            </IconButton>
            <IconButton onClick={handleClick3}>
              <YouTube color="primary" style={{ fontSize: 55 }} />
            </IconButton>
          </div>

          {displays && (
            <TextField
              id="filled-full-width"
              label="Creer un post"
              size="small"
              variant="outlined"
              style={{ margin: 10 }}
              placeholder="Post..."
              fullWidth
              margin="normal"
              value={name}
              onChange={handleChange}
              onKeyPress={handlepress}
            ></TextField>
          )}
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
              value={name}
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
