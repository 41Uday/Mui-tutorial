import React, { useState } from "react";
import { Stack, Box, Autocomplete, TextField } from "@mui/material";

const skills = ["HTML", "CSS", "Javascript", "TypeScript", "React"];
const skillsOption = skills.map((s, i) => ({
  id: i + 1,
  label: s,
}));
console.log(skillsOption);

const MuiAutoComplete = () => {
  const [val, setVal] = useState(null);
  const [skill, setSkill] = useState(null);
  console.log({ val });
  console.log(skill);
  return (
    <Stack spacing={2} width="250px" margin="20px">
      {/* <Box>MuiAutoComplete</Box> */}
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={val}
        onChange={(e, newValue) => setVal(newValue)}
        // freeSolo
      />

      <Autocomplete
        options={skillsOption}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={val}
        onChange={(e, newValue) => setSkill(newValue)}
        // freeSolo
      />
    </Stack>
  );
};

export default MuiAutoComplete;
