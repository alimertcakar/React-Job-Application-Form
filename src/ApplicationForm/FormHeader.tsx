import { Typography } from "@material-ui/core";
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
  Paper,
  Grid,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import useStyles from "./Form.styles";

interface Props {}

export default function FormHeader({}: Props): ReactElement {
  const cls = useStyles();

  return (
    <Grid container justify="center" className={cls.formHeaderContainer}>
      <Grid item xs={12} sm={12} md={8}>
        <h1 className={cls.formHeadline}>Apply as an employee</h1>
      </Grid>
    </Grid>
  );
}
