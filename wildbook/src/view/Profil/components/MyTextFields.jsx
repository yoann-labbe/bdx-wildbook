import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  pValue: {
    margin: 0,
  },
}));

function MyTextFields({ value, onChange, name, editionMode = false }) {
  const classes = useStyles();

  return (
    <div>
      {!editionMode && <p className={classes.pValue}>{value}</p>}
      {editionMode && (
        <TextField
          name={name}
          label={name}
          color="secondary"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default MyTextFields;
