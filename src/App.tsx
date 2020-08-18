import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import FormHeader from "./ApplicationForm/FormHeader";
import theme from "./globalStyles";
import Stepper from "./ApplicationForm/Stepper";

function App() {
  const [position, setPosition] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Stepper />
        <FormHeader />
      </Container>
    </ThemeProvider>
  );
}

export default App;
