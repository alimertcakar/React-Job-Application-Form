import React,{useState} from 'react';
import {TextField,Select,MenuItem,Typography,FormControl,FormHelperText} from '@material-ui/core';


function ApplicationForm() {
const [position,setPosition] = useState(0);

  return (
    <div>
        <FormControl>
      <Select
          labelId="select-position-label"
          id="select-position"
          value={position}
          defaultValue={position}
          onChange={(event: React.ChangeEvent<{value: unknown}>)=>setPosition(event.target.value as any)}
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
        
      <TextField defaultValue="First Name" variant="outlined"/>
      <TextField defaultValue="Surname" variant="outlined"/>
      
    </div>
  );
}

export default ApplicationForm;
