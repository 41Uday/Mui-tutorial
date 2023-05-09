import React, { useState } from "react";

import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState("");

  return (
    <Box width="250px" margin="40px">
      <TextField
        label="Select country"
        select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        fullWidth
        color="secondary"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="WI">West Indies</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
