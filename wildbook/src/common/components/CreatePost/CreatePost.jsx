import {
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AddAPhoto, BorderColor, YouTube } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: 650,
    height: "100%",
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    marginBottom: 30,
  },
  sendB: {
    float: "right",
    marginBottom: 5,
  },
  centerbutton: {
    display: "flex",
    justifyContent: "space-around",
  },
});

function CreatePost(props) {
  const classes = useStyles();
  const [name, setName] = useState();
  const [display, setdisplay] = useState(false);
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    setdisplay(!display);
  };
  const handlepress = (e) => {
    if (e.charCode == 13) {
      console.log(name);
    }
  };

  const handleClick2 = () => {
    console.log(name);
  };
  return (
    <div className={classes.div}>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.centerbutton}>
            <IconButton onClick={handleClick}>
              <BorderColor color="primary" style={{ fontSize: 55 }} />
            </IconButton>
            <IconButton>
              <AddAPhoto color="primary" style={{ fontSize: 55 }} />
            </IconButton>
            <IconButton>
              <YouTube color="primary" style={{ fontSize: 55 }} />
            </IconButton>
          </div>

          {display && (
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

          <Button
            variant="contained"
            color="primary"
            className={classes.sendB}
            flexDirection="row-reverse"
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
