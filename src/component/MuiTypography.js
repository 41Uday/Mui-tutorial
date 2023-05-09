import React from "react";

import { Typography } from "@mui/material";

function MuiTypography() {
  return (
    <div className="App">
      <Typography variant="h1">1 Heading</Typography>
      <Typography variant="h2">2 Heading</Typography>
      <Typography variant="h3">3 Heading</Typography>
      <Typography variant="h4">4 Heading</Typography>
      <Typography variant="h5">5 Heading</Typography>
      <Typography variant="h6">6 Heading</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      <Typography variant="body1">Body-1</Typography>
      <Typography variant="body2">Body-2</Typography>
    </div>
  );
}

export default MuiTypography;
