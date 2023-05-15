import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
const MuiAccordion = () => {
  const [expanded, setExapnded] = useState(false);
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => {
          isExpanded && setExapnded("panel1");
        }}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordian-1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="secondary">
            React is a Javascript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applicaitons.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        onChange={(e, isExpanded) => {
          isExpanded && setExapnded("panel2");
        }}
        expanded={expanded === "panel2"}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
          expanded={expanded === "panel2"}
        >
          <Typography>Accordian-2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="secondary">
            React is a Javascript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applicaitons.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        onChange={(e, isExpanded) => {
          isExpanded && setExapnded("panel3");
        }}
        expanded={expanded === "panel3"}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
          expanded={expanded === "panel3"}
        >
          <Typography>Accordian-3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="secondary">
            React is a Javascript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applicaitons.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
