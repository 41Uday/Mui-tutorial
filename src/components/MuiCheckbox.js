import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
  const [acceptTnc, setAcceptInc] = useState(false);
  const [skills, setSkills] = useState([]);

  console.log(skills);

  const handleChange = (e) => {
    console.log(e.target.checked, "checkbox Clicked");
    setAcceptInc(e.target.checked);
  };

  const handleSkillsChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((s) => s !== e.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox color="secondary" />}
          onChange={handleChange}
          value={acceptTnc}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnc}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={<Checkbox color="secondary" />}
              onChange={handleSkillsChange}
              value="html"
              checked={skills.includes("html")}
            />
            <FormControlLabel
              label="CSS"
              control={<Checkbox color="info" />}
              onChange={handleSkillsChange}
              value="css"
              checked={skills.includes("css")}
            />
            <FormControlLabel
              label="JavaScript"
              control={<Checkbox color="success" />}
              onChange={handleSkillsChange}
              value="javascript"
              checked={skills.includes("javascript")}
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
