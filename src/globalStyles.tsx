import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        color: "#35d3f2 !important",
      },
    },
    MuiButton: {
      root: {
        backgroundColor: "#35d3f2 !important",
        borderRadius: "0 !important",
      },
      text: {
        color: "white !important",
      },
    },
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
