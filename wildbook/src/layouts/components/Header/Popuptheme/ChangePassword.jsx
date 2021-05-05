import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DoneIcon from "@material-ui/icons/Done";
import UserContext from "../../../../context/user";
import axios from "axios";
import { Dialog, DialogContent, DialogContentText } from "@material-ui/core";

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
  const { connectedUser, setConnectedUser } = useContext(UserContext);
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    password: "",
  });

  const handleClick = async () => {
    if (
      form.newPassword === form.password &&
      form.oldPassword === connectedUser.password
    ) {
      try {
        const accessToken = localStorage.getItem("userToken");
        if (accessToken) {
          const config = {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };
          const updatedPassword = await axios.patch(
            `https://wildbook-api.herokuapp.com/users/${connectedUser._id}`,
            { plainPassword: form.password },
            config
          );
          setForm(updatedPassword.data);
          setConnectedUser(updatedPassword.data);
          console.log(
            "🚀 ~ file: ChangePassword.jsx ~ line 61 ~ handleClick ~ updatedPassword.data",
            updatedPassword.data
          );
        }
      } catch (e) {}
    }
  };

  const handleModifications = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.form}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <DialogContent style={{ backgroundColor: "white" }}>
          <DialogContentText
            id="alert-dialog-description"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {form.newPassword === form.password ? (
              <p> Password succesfully updated!</p>
            ) : (
              <p>
                "New password" and "confirm new password" must be identical !"
              </p>
            )}
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <div className={classes.oldPassword}>
        <TextField
          style={{ width: "300px", height: "75px" }}
          name={"oldPassword"}
          type="password"
          label="Previous password"
          color="primary"
          value={connectedUser.password}
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
      <div className={classes.confirmPassword}>
        <TextField
          style={{ width: "300px", height: "75px" }}
          name={"password"}
          type="password"
          label="Confirm new password"
          color="primary"
          value={form.password}
          onChange={handleModifications}
          maxLength="20"
        />
      </div>
      {form.newPassword !== form.password ? (
        <p style={{ color: "red" }}>
          "New password" and "confirm new password" must be identical !
        </p>
      ) : (
        ""
      )}
      <div className={classes.buttonContainer}>
        <button
          className={classes.doneButton}
          onClick={(handleClick, handleClickOpen)}
        >
          <DoneIcon className={classes.doneIcon} />
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
