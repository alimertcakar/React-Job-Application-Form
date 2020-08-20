import { Paper, TextField, Typography } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import React, { useState } from "react";
import useStyles from "./Step.styles";

function ApplicationForm() {
  const [position, setPosition] = useState(0);
  const cls = useStyles();
  return (
    <div>
      <Paper elevation={0} className={cls.paper}>
        <Typography>Anything to add?</Typography>
        <TextField
          className={cls.message}
          fullWidth
          placeholder="You should know that..."
          label="Message"
          variant="outlined"
          multiline
          rows={3}
          rowsMax={3}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
      </Paper>
    </div>
  );
}

export default ApplicationForm;
