import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

const MuiRadio = () => {
  const [val, setVal] = useState("");
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience">How many Years of Experience</FormLabel>
        <RadioGroup
          name="experience"
          aria-labelledby="job-experience"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          row
        >
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label=">6" value=">6" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadio;
