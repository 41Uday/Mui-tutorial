import React from "react";
import { Box, Stack, Grid, Paper } from "@mui/material";

const MuiLayout = () => {
  return (
    <Paper xs={{ padding: "20px", backgroundColor: "white" }} elevation={15}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="column-reverse
    "
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
              cursor: "pointer",
            },
          }}
        >
          Code Revolution
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid container my={4}>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
