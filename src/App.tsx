import { Container } from "@material-ui/core";
import React, { useState } from "react";
import FormHeader from "./ApplicationForm/FormHeader";
import ApplicationForm from "./ApplicationForm/Step1";

function App() {
  const [position, setPosition] = useState("");

  return (
    <Container>
      <FormHeader />
      <ApplicationForm />
    </Container>
  );
}

export default App;
