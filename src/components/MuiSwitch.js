import React, { useState } from "react";

import { Box, FormControlLabel, Switch } from "@mui/material";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(!checked);
  };
  console.log({ checked });
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch />}
        checked={checked}
        onChange={handleChange}
      />
    </Box>
  );
};

export default MuiSwitch;
