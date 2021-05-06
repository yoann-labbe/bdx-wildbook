import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import CreateAccount from "./CreateAccount";
import { DialogContent, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  modif2: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Popupaccount({
  openAccount,
  handleCloseAccount,
  switchFromRegisterToLogin,
}) {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={openAccount}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseAccount}
      >
        <div className={classes.modif2}>
          <DialogActions>
            <Button onClick={handleCloseAccount} color="primary">
              <CloseIcon />
            </Button>
          </DialogActions>
        </div>
        <DialogContent>
          <CreateAccount
            switchFromRegisterToLogin={switchFromRegisterToLogin}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
