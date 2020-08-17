import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./Step.styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";

function ApplicationForm() {
  const [position, setPosition] = useState(0);
  const cls = useStyles();
  return (
    <div className={cls.step1}>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={7} justify="center">
          <FormControl className={cls.formControl}>
            <Select
              variant="outlined"
              labelId="select-position-label"
              id="select-position"
              value={position}
              defaultValue={position}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
                setPosition(event.target.value as any)
              }
            >
              <MenuItem value={0}>
                <em>Front-end Developer</em>
              </MenuItem>
              <MenuItem value={1}>Back-end Developer</MenuItem>
              <MenuItem value={2}>Dev Ops</MenuItem>
              <MenuItem value={3}>Full-stack Developer</MenuItem>
              <MenuItem value={4}>Tester</MenuItem>
              <MenuItem value={5}>QA Engineer</MenuItem>
            </Select>
            <FormHelperText>Position</FormHelperText>
          </FormControl>
        </Grid>

        <Grid container item sm={12} md={7} justify="center">
          <Grid item className={cls.textfield}>
            <TextField
              fullWidth
              placeholder="First Name"
              label="First Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item className={cls.textfield}>
            <TextField
              fullWidth
              label="Surname"
              placeholder="Surname"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ApplicationForm;
