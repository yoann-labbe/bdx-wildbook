import React, { useContext, useState } from "react";
import {
  Card,
  CardContent,
  IconButton,
  makeStyles,
  TextareaAutosize,
} from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  InsertComment,
  SendTwoTone,
} from "@material-ui/icons";
import axios from "axios";
import UserContext from "../../../context/user";
import Likes from "./Likes";
import { Fragment } from "react";

const useStyles = makeStyles({
  icon: {
    display: "flex",
    alignItems: "space-between",
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

function PostComment(props) {
  const classes = useStyles();
  const [display, setdisplay] = useState(false);
  const [com, setcom] = useState({
    text: "",
  });
  const [displays, setdisplays] = useState(false);

  const { connectedUser } = useContext(UserContext);

  const handleClick = () => {
    setdisplay(!display);
  };
  const handleChange = (e) => {
    setcom({ ...com, [e.target.name]: e.target.value });
  };
  const handleClick2 = async () => {
    console.log(props);
    try {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const token = await axios.post(
          `https://wildbook-api.herokuapp.com/posts/${props.postId}/comment`,
          com,
          config
        );

        console.log(token.data);
      }
    } catch (e) {}
  };

  return (
    <Fragment>
      <CardContent>
        <div className={classes.icon}>
          <Likes />
          <IconButton onClick={handleClick}>
            <InsertComment />
          </IconButton>
        </div>
        {display && (
          <div>
            <TextareaAutosize
              className={classes.textA}
              id="filled-full-width"
              label="Comment"
              size="small"
              variant="outlined"
              style={{ margin: 10 }}
              placeholder="Comment"
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
          </div>
        )}
      </CardContent>
    </Fragment>
  );
}

export default PostComment;
