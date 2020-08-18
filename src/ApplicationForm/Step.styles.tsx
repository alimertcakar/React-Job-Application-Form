import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  formControl: {
    width: "99%",
    paddingTop: theme.spacing(2),
  },
  textfield: {
    flexGrow: 1,
  },
  paper: {
    borderRadius: 0,
    padding: theme.spacing(2),
  },
  paperGender: {
    borderRadius: 0,
    padding: theme.spacing(2),
    paddingBottom: 0,
  },
  gender: {
    paddingLeft: theme.spacing(2),
  },
}));
