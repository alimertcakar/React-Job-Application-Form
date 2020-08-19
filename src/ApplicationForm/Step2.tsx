import { Paper, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React, { useState } from "react";
import useStyles from "./Step.styles";
import MailIcon from "@material-ui/icons/Mail";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
function ApplicationForm() {
  const [position, setPosition] = useState(0);
  const cls = useStyles();
  return (
    <div>
      <Paper elevation={0} className={cls.paper}>
        <TextField
          fullWidth
          placeholder="johnjoe@mail.com"
          label="Mail"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          placeholder="johnjoe@mail.com"
          label="Phone Number"
          type="number"
          variant="outlined"
          className={cls.phoneNumber}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneAndroidIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </div>
  );
}

export default ApplicationForm;
