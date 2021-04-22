import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },

  doneButton: {
    border: "none",
    cursor: "pointer",
    marginTop: "40px",
  },

  doneIcon: {
    "&:hover": { fill: "#EA5655" },
    "&:active": { fill: "#000000" },
  },
}));

function ChangePassword() {
  const classes = useStyles();
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleClick = () => {
    console.log(form);
  };

  const handleModifications = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.form}>
      <div className={classes.oldPassword}>
        <TextField
          style={{ width: "300px", height: "75px" }}
          name={"oldPassword"}
          type="password"
          label="Previous password"
          color="primary"
          value={form.oldPassword}
          onChange={handleModifications}
          maxLength="20"
        />
      </div>
      <div className={classes.newPassword}>
        <TextField
          style={{ width: "300px", height: "75px" }}
          name={"newPassword"}
          type="password"
          label="New password"
          color="primary"
          value={form.newPassword}
          onChange={handleModifications}
          maxLength="20"
        />
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.doneButton} onClick={handleClick}>
          <DoneIcon className={classes.doneIcon} />
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
