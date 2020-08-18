import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  formHeadline: {
    color: "white",
    textAlign: "center",
    marginTop: theme.spacing(4),
    padding: theme.spacing(1),
  },
  formHeaderDesc: {
    color: "gray",
    paddingLeft: theme.spacing(2),
    backgroundColor: "white",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  formHeaderContainer: {},
}));
