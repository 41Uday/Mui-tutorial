import { InputAdornment, Stack, TextField } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";

const MuiTextField = () => {
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4} style={{ margin: 40 }}>
      <Stack spacing={2} direction="row">
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" color="secondary" />
        <TextField
          label="name"
          variant="standard"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          error={!value}
          helperText={!value ? "Required" : "Don't share your credentials"}
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="readonly" InputProps={{ readOnly: true }} />
        {status ? (
          <TextField
            label="Password"
            type="text"
            variant="outlined"
            required
            helperText="Don't share your credentials"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOffIcon onClick={() => setStatus(!status)} />
                </InputAdornment>
              ),
            }}
          />
        ) : (
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            required
            helperText="Don't share your credentials"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <RemoveRedEyeIcon onClick={() => setStatus(!status)} />
                </InputAdornment>
              ),
            }}
          />
        )}
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
