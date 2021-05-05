import { makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";
const useStyles = makeStyles({
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

const PostImage = ({ urlImage }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <img src={urlImage} className={classes.img} />
    </Fragment>
  );
};

export default PostImage;
