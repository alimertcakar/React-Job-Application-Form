import {
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React, { useState } from "react";
import useStyles from "./Step.styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

function ApplicationForm() {
  const [position, setPosition] = useState(0);
  const cls = useStyles();
  return (
    <div>
      <Grid container justify="center">
        <Grid container item sm={12} md={8} justify="center">
          <Grid item className={cls.textfield}>
            <Paper elevation={0} className={cls.paper}>
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
            </Paper>
          </Grid>
          <Grid item className={cls.textfield}>
            <Paper elevation={0} className={cls.paper}>
              <TextField
                fullWidth
                label="Surname"
                placeholder="Surname"
                variant="outlined"
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={8} justify="center">
          <Paper className={cls.paperGender}>
            <FormControl component="fieldset" className={cls.gender}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={"x"} row>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={8} justify="center">
          <Paper className={cls.paper}>
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
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ApplicationForm;
