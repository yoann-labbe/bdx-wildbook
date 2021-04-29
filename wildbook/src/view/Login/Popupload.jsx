import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import Load from "./Load";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Popupload({ open, onClose }) {
  const [switchOn, setSwitchOn] = useState(false);
  const handleClose = () => {
    setSwitchOn(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Load />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fermer la page
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
