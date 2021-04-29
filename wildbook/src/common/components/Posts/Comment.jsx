import React, { useState } from "react";
import {
  Card,
  CardContent,
  IconButton,
  makeStyles,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  SendTwoTone,
} from "@material-ui/icons";

const useStyles = makeStyles({
  icon: {
    float: "right",
  },
  cardp: {
    height: "100%",
    marginBottom: 12,
    marginLeft: 20,
    marginTop: 20,
  },
  textA: {
    minWidth: 441,
    maxWidth: 441,
    minHeight: 40,
  },
  addP: {
    height: "100%",
    maxWidth: 430,
    paddingLeft: 5,
  },
  btn: {
    float: "right",
  },
});

function Comment(props) {
  const classes = useStyles();
  const [display, setdisplay] = useState(false);
  const [com, setcom] = useState({
    text: "",
  });
  const [displays, setdisplays] = useState(false);

  const handleClick = () => {
    setdisplay(!display);
  };
  const handleChange = (e) => {
    setcom({ ...com, [e.target.name]: e.target.value });
  };
  const handleClick2 = () => {
    console.log(com);
    /* setdisplays(true)
         setdisplay(!display)*/
  };

  return (
    <div>
      <CardContent>
        <div className={classes.icon}>
          <IconButton>
            <FavoriteBorder />
          </IconButton>

          <IconButton onClick={handleClick}>
            <ChatBubbleOutline />
          </IconButton>
        </div>

        {display && (
          <Card>
            <TextareaAutosize
              className={classes.textA}
              id="filled-full-width"
              label="Commenter"
              size="small"
              variant="outlined"
              style={{ margin: 10 }}
              placeholder="Commenter"
              fullWidth
              margin="normal"
              name={"text"}
              onChange={handleChange}
              value={com.text}
            ></TextareaAutosize>

            <IconButton
              className={classes.btn}
              color="primary"
              onClick={handleClick2}
            >
              <SendTwoTone />
            </IconButton>
          </Card>
        )}

        {displays && (
          <div>
            <Card className={classes.cardp} variant="outlined">
              <p className={classes.addP}>{com}</p>
            </Card>
          </div>
        )}
      </CardContent>
    </div>
  );
}

export default Comment;
