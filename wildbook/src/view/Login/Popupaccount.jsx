import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

import CreateAccount from "./CreateAccount";
import { DialogContent } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Popupaccount({ openAccount, handleCloseAccount }) {
  return (
    <div>
      <Dialog
        open={openAccount}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseAccount}
      >
        <DialogContent>
          <CreateAccount />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAccount} color="primary">
            Fermer la page
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
