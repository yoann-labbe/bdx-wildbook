import React from "react";
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
          color="primary"
          value={value}
          onChange={onChange}
          maxLength="20"
        />
      )}
    </div>
  );
}

export default MyTextFields;
