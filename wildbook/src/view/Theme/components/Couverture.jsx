import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import { TextField } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import TitreCouverture from "./TitreCouverture";

const useStyles = makeStyles(() => ({
  banniere: {
    border: "2px solid #B0B0B0",
    height: "150px",
    backgroundImage: `url(${"https://picsum.photos/1200/150?ramdom"})`,
    opacity: "0,5",
  },
  follow: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "120px",
    marginRight: "5px",
  },
  text: {
    position: "absolute",
    marginTop: "25px",
    textAlign: "center",
    width: "100%",
  },
  editContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  edit: {
    border: "none",
    background: "none",
  },
}));
function Couverture(props) {
  const classes = useStyles();
  const [editionMode, setEditionMode] = useState(false);
  const [form, setForm] = useState({ title: "Votre titre ici" });

  const handleChange = (e) => {
    console.log(e.target.name);
    setForm((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClick = () => {
    if (editionMode) {
      console.log(form);
    }
    setEditionMode(!editionMode);
  };

  return (
    <div className={classes.banniere}>
      <div className={classes.text}>
        <div>
          <TitreCouverture
            editionMode={editionMode}
            value={form.title}
            onChange={handleChange}
            name={"title"}
          />
        </div>
        <div className={classes.editContainer}>
          <button className={classes.edit} onClick={handleClick}>
            {editionMode ? <DoneIcon /> : <EditIcon />}
          </button>
        </div>
      </div>
      <div className={classes.follow}>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Follow
        </Button>
      </div>
    </div>
  );
}

export default Couverture;
