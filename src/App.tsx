import React,{useState} from 'react';
import {TextField,Select,MenuItem,Typography,FormControl,FormHelperText} from '@material-ui/core';
import ApplicationForm from "./ApplicationForm/Step1";
  
function App() {
const [position,setPosition] = useState("");

  return (
    <div style={{marginLeft:"30vw"}}>
      <h1>Job Application</h1>
      <Typography>Please fill the form below to apply for a position with us</Typography>
      <hr/>
      <ApplicationForm/>
    </div>
  );
}

export default App;
