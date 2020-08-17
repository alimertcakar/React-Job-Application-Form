import { Typography } from "@material-ui/core";
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
  Grid,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import useStyles from "./Form.styles";

interface Props {}

export default function FormHeader({}: Props): ReactElement {
  const cls = useStyles();

  return (
    <Grid container justify="center" className={cls.formHeaderContainer}>
      <Grid item xs={12} sm={12} md={7}>
        <h1 className={cls.formHeadline}>Job Application</h1>
        <Typography component="h1" className={cls.formHeaderDesc}>
          Please fill the form below to apply for a position with us
        </Typography>
        <hr />
      </Grid>
    </Grid>
  );
}
