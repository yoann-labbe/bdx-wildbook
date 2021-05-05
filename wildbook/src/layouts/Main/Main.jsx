
import { makeStyles } from "@material-ui/core";
import React from "react";
import UpButton from "../../common/components/UpButton/UpButton";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height : "100%",
    backgroundImage: "url('/assets/15459.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    bottom : "0",
  },
}))
function Main(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {children}
      <UpButton showBelow={250} />
      <Footer />
    </div>
  );
}

export default Main;
