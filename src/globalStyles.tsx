import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          backgroundColor: "#59B1E3",
        },
        body: {
          backgroundColor: "#59B1E3",
        },
      },
    },
  },
});

export default theme;
